var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongojs = require("mongojs");

var app = express();

var corsOptions = {
    origin: 'http://localhost:8000'
};

app.use(bodyParser.json(), cors(corsOptions));

app.listen(8000, function(){
	console.log("listening on port 8000");
});