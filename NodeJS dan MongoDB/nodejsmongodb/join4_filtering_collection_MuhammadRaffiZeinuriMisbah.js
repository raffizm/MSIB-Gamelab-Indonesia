const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("perpustakaan");
    dbo.collection("history").aggregate([{
            $lookup: {
                from: 'databuku',
                localField: 'kode_buku',
                foreignField: 'kode_buku',
                as: 'DataBuku'
            }
        },
        {
            $lookup: {
                from: 'lokasibuku',
                localField: 'kode_buku',
                foreignField: 'kode_buku',
                as: 'LokasiBuku'
            }
        },
        {
            $lookup: {
                from: 'anggota',
                localField: 'kode_anggota',
                foreignField: 'kode_anggota',
                as: 'DataAnggota'
            }
        },
        {
            $match: {
                "LokasiBuku.nama_rak": { $eq: "Database" }
            }
        },
        {
            $sort: {
                "LokasiBuku.kode_buku": 1
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        db.close();
    });
});