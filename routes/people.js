const express = require('express');
const mysqlConnection = require('../connection');

const Router = express.Router();

Router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM people;', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

module.exports = Router;