var db = require("./db_config");

var sql = "INSERT INTO agents (AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION, PHONE_NO, COUNTRY) VALUES ?";
var values = [
    ["A0021", "Raffizm", "Bandung", "0.14", "032-32148412", "Indonesia"],
    ["A0022", "Dimas", "Semarang", "0.13", "051-54241256", "Indonesia"],
    ["A0023", "AwpticFN ", "Jakarta", "0.11", "064-15451475", "Indonesia"]
]

db.query(sql, [values], function(err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " Records Inserted !");
});