let mysql = require('mysql');
// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'dbtarestapi',
// });

// module.exports = pool;
// Kongigurasi Koneksi MySql
module.exports = {
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbtarestapi'
};