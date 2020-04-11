var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : '',
  database : process.env.DB_DATABASE
});
 
connection.connect((err)=> {
    if(err) console.log(`Error MYSQL : ${err}`)
});

 
module.exports = connection