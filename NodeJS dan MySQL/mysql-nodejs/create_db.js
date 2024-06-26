var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

const sql = "CREATE DATABASE employees";
db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Database created !");
});