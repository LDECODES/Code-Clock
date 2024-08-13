let mysql = require('mysql');

let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "bestmother"
 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
});
