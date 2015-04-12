var express = require('express');
var app = express();
var config = require("./config");

app.set('port', process.env.PORT || 3000);

console.log("Running app.js");
app.get('/', function (req, res) {
  res.send('Hello World!, I work!');
});

app.listen(app.get('port'), function () {
  	console.log('Sandbox running');
});

app.use(function(req, res, next) {
  res.status(404).send('!');
});

module.exports = app;
