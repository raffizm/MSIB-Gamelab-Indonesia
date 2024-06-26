var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employees"
});

db.connect(function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to Database !");
    }
});

module.exports = db;