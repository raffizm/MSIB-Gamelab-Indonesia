let mysql = require('mysql');

//konfigurasi untuk koneksi database MySql

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbtarestapi'
});

//Kondisi untuk mengecek database berjalan atau tidak 
connection.connect(function(error) {
    try {
        console.log('Koneksi ke database MySql Berhasil!');
    } catch (err) {
        // Melempar Exception
        next(err);
    }
})

module.exports = connection;