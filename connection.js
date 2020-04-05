const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '33355032',
  database: 'edureka',
  multipleStatements: true,
});

function startConnection() {
  mysqlConnection.connect((err) => {
    if (err) {
      console.log('Connection failed', err.code);
      startConnection();
    } else {
      console.log('Connected');
    }
  });

  mysqlConnection.on('error', (err) => {
    if (err.fatal) startConnection();
  });
};

startConnection();

module.exports = mysqlConnection;