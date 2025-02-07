import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'portfolio_db'
}).promise()

const projekt = await pool.query("SELECT * FROM portfolio_db.projekt")
console.log(projekt)
