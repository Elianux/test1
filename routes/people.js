const express = require('express');
const mysqlConnetion = require('../connection');

const Router = express.Router();

Router.get('/', (req, res) => {
  mysqlConnetion.query('SELECT * FROM people', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

module.exports = Router;
