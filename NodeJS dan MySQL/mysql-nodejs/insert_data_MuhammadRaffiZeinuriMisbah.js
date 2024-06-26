var db = require("./db_config_MuhammadRaffiZeinuriMisbah");

var sql = "INSERT INTO member (name, address) VALUES ?";
var values = [
    ["Muhammad Raffi Zeinuri Misbah", "Cicaheum 7"],
    ["Adhiva Deva", "Babakan Siliwangi 3"],
    ["Syafa Surya", "Golf Raya 15"],
    ["Alif Munawar", "Sukamenak 23"],
    ["Hafiizh Alif", "Haur Pacuh 53"],
]

db.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " Records Inserted !");
});