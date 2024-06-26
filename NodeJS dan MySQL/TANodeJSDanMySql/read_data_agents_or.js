var db = require("./db_config");

var sql = "SELECT * FROM agents WHERE WORKING_AREA='Bangalore' OR WORKING_AREA='New York';";
db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(`| AGENT CODE  | AGENT NAME    | WORKING AREA         | COMMISSION      | PHONE_NO              | COUNTRY           |`);
    console.log(`---------------------------------------------------------------------------------------------------------------------`);
    result.forEach((mbr) => {
        console.log(` ${mbr.AGENT_CODE} \t\t ${mbr.AGENT_NAME} \t\t ${mbr.WORKING_AREA} \t\t ${mbr.COMMISSION} \t\t ${mbr.PHONE_NO} \t\t ${mbr.COUNTRY}`);
    });
});