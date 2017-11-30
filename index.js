var express = require('express');
var app = express();

var users = require('./users.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/session', (req, res) => {
  res.end();
});
 
app.listen(3000);