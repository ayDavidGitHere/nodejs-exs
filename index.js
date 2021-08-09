
//Import Libraries
var express = require('express');
//var session = require('express-session');
var mongoose = require('mongoose');
var request = require('request');
//Import custom modules
var userRoutes = require('./app/routes/userRoutes');
var config = require('./app/configs/config');

//Create a new Express application and Configure it
var app = express();

//Configure Routes
app.use(config.API_PATH, mainRoute());



//Start the server
app.listen(config.PORT, function(){
    console.log('Connected to EXPRESS Server at - '+ config.URL+ ":" +config.PORT)
});
