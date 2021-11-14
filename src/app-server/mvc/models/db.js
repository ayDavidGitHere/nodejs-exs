var main = require('../models/main');
var multer = require("multer")
var path = require('path');
var config = require('../../configs/config');
//var codehelp = require('../../libs/codehelps.js')






module.exports = {

createGenresTable: function(req, res){
    
    //Connect to Db
    var pg = require("pg")
    var client = new pg.Client(config.DB.pg.getConnectionString());
    client.connect();
    var queryString = 
    " DROP TABLE IF EXISTS genres; "
    +"CREATE TABLE "
    +"genres(id SERIAL PRIMARY KEY,genre TEXT NOT NULL,DATA JSONb NOT NULL); "
    +"INSERT INTO genres(genre, DATA) "
    +"VALUES ('rap', '{}'), ('pop', '{}'), ('afropop', '{}') "
    +";"
    ;
    var query = client.query(queryString, function(err, res){
        console.log("createGenres err: "+err);
        //console.log("res: "+res);
    });
    client.on("row", function (row, result) {
        console.log("row: "+row);
        result.addRow(row);
    });
    client.on("end", function (result) {
        console.log("end: "+result);
    }); 
    
    
},  
getGenres: function(req, res){
    return new Promise((resolve, reject) => {
        var pg = require("pg");
        var client = new pg.Client(config.DB.pg.getConnectionString());
        client.connect();
        var queryString = 
        " SELECT * FROM genres; "
        ;
        var query = client.query(queryString, function(err, res){
            console.log("getGenres err: "+err);
            resolve(res.rows);
        });
    });
},  
createSongsTable: function(req, res){
    
    //Connect to Db
    var pg = require("pg")
    var client = new pg.Client(config.DB.pg.getConnectionString());
    client.connect();
    var queryString = 
    " DROP TABLE IF EXISTS songs; "
    +"CREATE TABLE "
    +"songs(id SERIAL PRIMARY KEY,name TEXT NOT NULL,DATA JSONb NOT NULL); "
    +"INSERT INTO songs(name, DATA) "
    +"VALUES "
    +"('maroon 5', '{\"name\": \"maroon 5\", \"url\": \"/maroon\", \"cdn\": \"\", \"views\": \"1\", \"likes\": \"2\"}'),"
    +"('drake', '{\"name\": \"drake\", \"url\": \"/drake\", \"cdn\": \"\", \"views\": \"1\", \"likes\": \"2\"}')"
    +";"
    ;
    var query = client.query(queryString, function(err, res){
        console.log("createSongserr: "+err);
        //console.log("res: "+res);
    });
    
},  
getSongs: function(req, res){
    return new Promise((resolve, reject) => {
        var pg = require("pg");
        var client = new pg.Client(config.DB.pg.getConnectionString());
        client.connect();
        var queryString = 
        " SELECT * FROM songs; "
        ;
        var query = client.query(queryString, function(err, res){
            console.log("getSongs err: "+err);
            //console.log(res);
            var ALL = res.rows;
            var TRENDINGS = res.rows;
            resolve({ALL: ALL, TRENDINGS: TRENDINGS,});
        });
    });
},  
    
    
    
    
};