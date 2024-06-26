const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("perpustakaan");
    var sorting = { jmlh_halaman: -1 };
    dbo.collection("databuku").find({ pengarang: "Gamelab Indonesia" }, { projection: { judul_buku: 1, jmlh_halaman: 1 } }).sort(sorting).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});