const mysql = require('mysql2');

const db =mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'db01'
})


module.exports = db;