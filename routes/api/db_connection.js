const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'us-cdbr-east-03.cleardb.com', // MYSQL HOST NAME
    user     : 'b90fd44b4804db', // MYSQL USERNAME
    password : '975a428c', // MYSQL PASSWORD
    database : 'heroku_59a99d709a0c163' // MYSQL DB NAME
}).promise();

module.exports = dbConnection;
