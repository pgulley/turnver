var express = require('express');
var app = express();
var config = require("./config");
var mongoose = require('mongoose');
var multer = require("multer");
var path = require('path');

//Middlewear
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'hbs');

app.use(multer({ dest: './public/images',
	rename: function (fieldname, filename) {
	    return filename+Date.now();
	  },
	onFileUploadStart: function (file) {
	  console.log(file.originalname + ' is starting ...')
	},
	onFileUploadComplete: function (file) {
	  console.log(file.fieldname + ' uploaded to  ' + file.path)
	  done=true;
	}
}));

app.set('port', process.env.PORT || 3000);


app.get('/', function (req, res) {
  res.render("index", {title:"<3 <3 <3"});
});

app.get("/upload", function(req, res){
	res.render("upload", {title:"upload"});
})

app.post('/api/photo',function(req,res){
  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});




app.listen(app.get('port'), function () {
  	console.log('Sandbox running');
});

app.use(function(req, res, next) {
  res.status(404).send('!');
});

module.exports = app;
