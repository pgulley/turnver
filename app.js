var express = require('express');
var app = express();
var config = require("./config");

console.log("Running app.js");
app.get('/', function (req, res) {
  res.send('Hello World!, I work!');
});

var server = require('http').createServer(app);

server.listen(config.port, function () {

  	var host = server.address().address;
  	var port = server.address().port;

  	console.log('Sandbox running at %s:%s', host, port);
});

app.use(function(req, res, next) {
  res.status(404).send('!');
});

module.exports = app;
