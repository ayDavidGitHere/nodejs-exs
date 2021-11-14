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
example_fileupload: function(app){
    var router = express.Router();
    router.route('/example/fileupload').get(function(req, res, next){
        res.render("fileupload", {
            Site_Title: "DSM",
            Page_Title: "File Upload",
        });
    });
    return router;
},
example_socketcom_page: function(app){
    var router = express.Router();
    router.route('/example/socketcom').get(function(req, res, next){
        res.render("socketcom", {
            Site_Title: "DSM",
            Page_Title: "Socket.io communication ",
            SITE_URL: config.getHTTPUrl(),
        });
        
    });
    return router;
},
example_socketcom_control: function(app){
    var router = express.Router();
    router.route('/api/socketcom').get(mainController.socketcom);
    return router;
},
...require("./home"),
};



module.exports = function(app){
    for(var route in routes){
        app.use("/", routes[route]()); 
    }
};





/**
 * 
 * 
 * 
import axios from 'axios';
import fs from 'fs';
import * as api from 'd-fi-core';

// Init api with arl from cookie
await api.initDeezerApi(arl_cookie);

// Verify user
try {
  const user = await api.getUser();
  // Successfully logged in
  console.log('Logged in as ' + user.BLOG_NAME);
} catch (err) {
  // Invalid arl cookie set
  console.error(err.message);
}

// GET Track Object
const track = await api.getTrackInfo(song_id);

// Parse download URL for 128kbps
const trackData = await api.getTrackDownloadUrl(track, 1);

// Download track
const {data} = await axios.get(trackdata.trackUrl, {responseType: 'arraybuffer'});

// Decrypt track if needed
const outFile = trackData.isEncrypted ? api.decryptDownload(data, track.SNG_ID) : data;

// Add id3 metadata
const trackWithMetadata = await api.addTrackTags(outFile, track, 500);

// Save file to disk
fs.writeFileSync(track.SNG_TITLE + '.mp3', trackWithMetadata

*/