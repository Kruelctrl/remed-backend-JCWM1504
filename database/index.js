const mysql = require('mysql')

// set up my sql
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'rakhadhi',
    password: 'b!Nu$10031995',
    database: 'remedialbackend'
})

module.exports = connection