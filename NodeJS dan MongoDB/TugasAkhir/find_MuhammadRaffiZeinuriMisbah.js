const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik_MRaffiZM");
    dbo.collection("databuku").find({ pengarang: "Gamelab Indonesia" }, { projection: { kode_buku: 1, judul_buku: 1, pengarang: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});