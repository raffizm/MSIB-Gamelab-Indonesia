var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

var sql = `CREATE TABLE member
    (
        id int NOT NULL AUTO_INCREMENT,
        name VARCHAR(255),
        address VARCHAR(255),
        PRIMARY KEY(id)
    )`;

db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table Created !");
});