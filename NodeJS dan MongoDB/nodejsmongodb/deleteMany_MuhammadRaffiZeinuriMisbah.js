const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("perpustakaan");
    var query = { pengarang: "Educa Studio" };
    dbo.collection("databuku").deleteMany(query, function(err, res) {
        if (err) throw err;
        console.log("~~~~ " + res.deletedCount + (" Baris Data Berhasil Dihapus ~~~~"));
        db.close();
    });
});