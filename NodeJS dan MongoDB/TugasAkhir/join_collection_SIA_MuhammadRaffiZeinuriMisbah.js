const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik_MRaffiZM");
    dbo.collection("Siswa").aggregate([{
            $lookup: {
                from: 'Kelas',
                localField: 'kode_kelas',
                foreignField: 'kode_kelas',
                as: 'Data_Kelas'
            }
        },
        {
            $lookup: {
                from: 'Mapel',
                localField: 'kode_mapel',
                foreignField: 'kode_mapel',
                as: 'Data_MataPelajaran'
            }
        },
        {
            $lookup: {
                from: 'Nilai',
                localField: 'kode_mapel',
                foreignField: 'kode_mapel',
                as: 'Data_Nilai'
            }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res, null, 2));
        db.close();
    });
});