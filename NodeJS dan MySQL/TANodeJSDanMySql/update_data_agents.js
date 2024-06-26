var db = require("./db_config");

var sql = "UPDATE agents SET COUNTRY='LUAR NEGERI' WHERE COUNTRY=''";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " Records Updated !");
});