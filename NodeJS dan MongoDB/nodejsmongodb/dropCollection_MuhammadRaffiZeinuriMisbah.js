const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik");
    dbo.dropCollection("nilaiExtra", function(err, res) {
        if (err) throw err;
        console.log("~~~~ Koleksi Berhasil Dihapus / Didrop ~~~~");
        db.close();
    });
});