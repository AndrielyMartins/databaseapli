require('dotenv').config()
console.log(process.env)


var mysql = require ('mysql2');

var con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
  
