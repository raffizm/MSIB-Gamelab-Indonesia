const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("perpustakaan");
    dbo.collection("databuku").find({ thn_terbit: { $eq: 2022 } }, { projection: { kode_buku: 1, judul_buku: 1, pengarang: 1, thn_terbit: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});