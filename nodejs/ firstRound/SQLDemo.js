const mysql =  require('mysql2')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'db01'
})

db.query('SELECT username from user where id=2 or id =3 ', (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})