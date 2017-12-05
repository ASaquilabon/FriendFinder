//list dependencies 
var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path"); 
//set up express to parse data 
var app = express(); 
var PORT = process.env.PORT || 8000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text()); 