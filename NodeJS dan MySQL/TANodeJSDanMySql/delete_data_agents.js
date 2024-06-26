var db = require("./db_config");

var sql = "DELETE from agents WHERE PHONE_NO LIKE '044%'";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " Records Deleted !");
});