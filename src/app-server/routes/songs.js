var express = require('express');
var mainController = require('../mvc/controllers/main');
var homeController = require('../mvc/controllers/home');
var dbModel = require('../mvc/models/db');
var config = require("../configs/config");




module.exports = function(app){


var routes = {};
(async function (){
var songs = await dbModel.getSongs();
songs.ALL.map(function(song){
    routes[song.data.name.replace(/ /g, "_")] = function(app){
        var router = express.Router();
        console.log(song)
        router.route(song.data.url).get(function(req, res, next){
            res.render("song", {
                Site_Title: "DSM",
                Page_Title: "This Song Page",
                song: song,
            });
        });
        return router;
    }
});
//Register routes
for(var route in routes){app.use("/", routes[route]());}
})();


};  //EO module.exports

