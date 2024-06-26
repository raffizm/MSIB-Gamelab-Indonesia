const MongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("Sistem_Informasi_Akademik");
    var my_obj = [
        { kode_mapel: 'H02', nama_mapel: 'HTML Dasar' },
        { kode_mapel: 'H03', nama_mapel: 'HTML Lanjut' },
        { kode_mapel: 'J01', nama_mapel: 'Javascript Dasar' },
        { kode_mapel: 'J02', nama_mapel: 'Javascript Lanjut' },
        { kode_mapel: 'N01', nama_mapel: 'NodeJS Dasar' },
        { kode_mapel: 'N02', nama_mapel: 'NodeJS Lanjut' },
        { kode_mapel: 'P01', nama_mapel: 'PHP Dasar' },
        { kode_mapel: 'P02', nama_mapel: 'PHP Lanjut' },
        { kode_mapel: 'M01', nama_mapel: 'MongoDB Dasar' },
        { kode_mapel: 'M02', nama_mapel: 'MongoDB Lanjut' },
        { kode_mapel: 'M03', nama_mapel: 'MySQL Dasar' },
        { kode_mapel: 'M04', nama_mapel: 'MySQL Lanjut' },
        { kode_mapel: 'L01', nama_mapel: 'Laravel Dasar' },
        { kode_mapel: 'L02', nama_mapel: 'Laravel Lanjut' }
    ];
    dbo.collection("Mata_Pelajaran").insertMany(my_obj,
        function(err, result) {
            if (err) throw err;
            console.log(result.insertedCount + " Baris Data Telah Ditambahkan !");
            db.close();
        });
});