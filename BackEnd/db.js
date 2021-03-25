const mysql = require('mysql');

var db  = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b8bfeb72b85a93',
    password: 'f0636dc9',
    database: 'heroku_ff3d06f8f0314b0'
  });
  
module.exports = db;