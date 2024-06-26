var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

var sql = "DELETE from member WHERE address='Bandung'";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " Records Deleted !");
});