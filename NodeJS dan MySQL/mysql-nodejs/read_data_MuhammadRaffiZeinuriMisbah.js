var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

var sql = "SELECT * from member";
db.query(sql, (err, result) => {
    if (err) throw err;

    console.log(`| ID  | Name                 | Address              |`);
    console.log(`-----------------------------------------------------`);

    result.forEach((mbr) => {
        console.log(`| ${mbr.id}   | ${mbr.name}        | ${mbr.address}       |`);
    });
});