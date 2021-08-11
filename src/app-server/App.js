
//Import Libraries
var express = require('express');
//var session = require('express-session');
var mongoose = require('mongoose');
var request = require('request');
var path = require('path');
//Import custom modules
var mainRoutes = require('./routes/main');
var config = require('./configs/config');

//Create a new Express application and Configure it
var app = express();

var PUBLIC_DIR = path.join(__dirname, '/../public')
//Define static folders !--not working
app.use( "/static",express.static(PUBLIC_DIR) );


//set Template Engine
app.set('view engine', 'ejs');
app.set('views', 'mvc/views');

//Register Routes
for(var route in mainRoutes){
    app.use("/", mainRoutes[route]());
}


//Start the server
app.listen(config.PORT, function(){
    var message = 'Connected to EXPRESS Server at - '+
    config.URL+ ":" +config.PORT;
    console.log(message);
    
});
