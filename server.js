const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnetion = require('./connection');
const PeopleRoutes = require('./routes/people');

const app = express();

app.use(bodyParser.json());

app.use('/people', PeopleRoutes);

app.listen(3000, (err) => {
  if (err) {
    console.log('Cannot start server');
  } else {
    console.log('Server started at port: 3000');
  }
});
