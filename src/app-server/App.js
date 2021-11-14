//Import Libraries
var express = require('express');
//var session = require('express-session');
var mongoose = require('mongoose');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
//Import custom modules
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


//Define static folders 
var RES_DIR = path.join(__dirname, '/../public/res');
var DIST_DIR = path.join(__dirname, '/../../dist') ;
app.use( "/res", express.static(RES_DIR) );
app.use( "/dist", express.static(DIST_DIR) );

//Register Routes
require('./routes/home')(app);
require('./routes/songs')(app);




//set options
let options = {};
/*
try{
options = 
{
   cert: fs.readFileSync(__dirname+'/private/localhost.crt', 'utf8'),
   key: fs.readFileSync(__dirname+'/private/localhost.key', 'utf8'),
};
}catch(e){console.log(":::::: Fs Error: \n::: "+e);}
*/



// Create HTTPs server.
config.server = require('https').
createServer(options, app).listen(config.PORT, function(){
    var message = 'EXPRESS Server Started at  :::::> \ \  \ '
    +config.URL
    +":" 
    +config.PORT;
    console.log(message);
});
/*
//Start the server
config.server = app.listen(config.PORT, function(){
    var message = 'Connected to EXPRESS Server at-'
    +config.URL
    +":" 
    +config.PORT;
    console.log(message);
});
*/





//--- /storage/emulated/0/compilerInternalSonyX/projects/Branch1/web_projects/download_site_pevn/inlink/download_site_pevn/