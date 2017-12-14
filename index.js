var express = require('express');
var app = express();

var users = require('./users.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/zeval/:sessionId/students', (req, res) => {
  res.json(users);
});

app.post('/api/zeval/training-sessions/:sessionId/evaluations', (req, res) => {
  res.end();
});

app.get('/api/zeval/*', (req, res) => {
  res.end();
});
 
app.listen(8080);