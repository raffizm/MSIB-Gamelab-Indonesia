var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tanodejsdanmysql"
});

db.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Berhasil Connect Ke Database !");
    }
});

module.exports = db;