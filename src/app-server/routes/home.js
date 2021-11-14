var express = require('express');
var mainController = require('../mvc/controllers/main');
var homeController = require('../mvc/controllers/home');
var dbModel = require('../mvc/models/db');
var config = require("../configs/config");



module.exports = function(app){


var routes = {};
(function (){


routes.home = function(){
    homeController.start();
    dbModel.createGenresTable();
    dbModel.createSongsTable();
    var router = express.Router();
    router.route('/').get(async function(req, res, next){
        var songs = await dbModel.getSongs();
        var genres = await dbModel.getGenres();
        res.render("home", {
            Site_Title: "DSM",
            Page_Title: "Home",
            GENRES: genres,
            TRENDINGS: songs.TRENDINGS,
        });
    });
    return router;
}//EO routes.home




//Register routes
for(var route in routes){app.use("/", routes[route]());}
})();




};  //EO module.exports