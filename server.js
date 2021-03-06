//list dependencies 
var express = require("express"); 
var bodyParser = require("body-parser");
var path = require("path"); 
//set up express to parse data 
var app = express(); 
var PORT = process.env.PORT || 8000; 

app.use(bodyParser.json());
app.use(bodyParser.json({type:"application/vnd.api+json"}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text()); 
app.use(express.static("app"));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(process.env.PORT || 8000);