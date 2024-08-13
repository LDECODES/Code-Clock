let mysql = require('mysql');

let con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "bestmother",
  database: "mydb"
});

con.connect(function(err){
if(err) throw err;
console.log("connected!")
var sql = "CREATE TABLE generated_codes (code VARCHAR(255), date INT";
con.query(sql, function (err ,
  result){
    if (err) throw err;
    console.log("Database created")
  }
)
})

