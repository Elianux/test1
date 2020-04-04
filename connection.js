const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'rorrrot',
  password: '33355032',
  database: 'Edureka',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (err) {
    console.log('Connected ');
  } else {
    console.log('Connection failed');
  }
});

module.exports = mysqlConnection;