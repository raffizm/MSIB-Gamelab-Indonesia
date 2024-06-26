const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik_MRaffiZM");
    var myquery = { nama_mapel: "SEJARAH" };
    var newvalues = { $set: { kode_mapel: "PBD", nama_mapel: "Pemrograman Basis Data" } };
    dbo.collection("Mapel").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("~~~~ 1 Data Berhail Di Update ~~~~");
        db.close();
    })
});