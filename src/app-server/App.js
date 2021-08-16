
//Import Libraries
var express = require('express');
//var session = require('express-session');
var mongoose = require('mongoose');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
//Import custom modules
var mainRoutes = require('./routes/main');
var config = require('./configs/config');

//Create a new Express application and Configure it
var app = express();

//use bodyp
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set Template Engine
//For some weird reasons /mvc... had to become src/app-server/mvc...
app.set('view engine', 'ejs');
app.set('views', 'src/app-server/mvc/views'); 


var PUBLIC_DIR = path.join(__dirname, '/../public')
//Define static folders 
app.use( "/static",express.static(PUBLIC_DIR) );


//Register Routes
for(var route in mainRoutes){
    app.use("/", mainRoutes[route]());
}


//Start the server
config.server = app.listen(config.PORT, function(){
    var message = 'Connected to EXPRESS Server at - '+
    config.URL+ ":" +config.PORT;
    console.log(message);
    
});
