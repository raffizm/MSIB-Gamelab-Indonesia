var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

var sql = "UPDATE member SET address='Bandung' WHERE id > 3";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " Records Updated !");
});