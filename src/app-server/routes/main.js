var express = require('express');
var mainController = require('../mvc/controllers/main');
var config = require("../configs/config");




var routes = {
test: function(app){
    var router = express.Router();
    router.route('/test').get(function(req, res, next){
        res.send("We reached here");
    });
    return router;
},
api: function(app){
    var router = express.Router();
    router.route('/api/fileupload').post(mainController.fileUpload);
    return router;
},
home: function(app){
    var router = express.Router();
    router.route('/').get(function(req, res, next){
        res.render("home", {
            Site_Title: "Nodejs exs",
            Page_Title: "Home"
        });
    });
    return router;
},
example_fileupload: function(app){
    var router = express.Router();
    router.route('/example/fileupload').get(function(req, res, next){
        res.render("fileupload", {
            Site_Title: "Nodejs exs",
            Page_Title: "Home"
        });
        
    });
    return router;
}

,};
module.exports = routes;