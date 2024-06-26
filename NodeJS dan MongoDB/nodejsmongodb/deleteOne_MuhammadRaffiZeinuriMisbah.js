const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik");
    var query = { _id: 1 };
    dbo.collection("Mata_Pelajaran").deleteOne(query, function(err, res) {
        if (err) throw err;
        console.log("~~~~ 1 Baris Data Berhasil Dihapus ~~~~");
        db.close();
    });
});