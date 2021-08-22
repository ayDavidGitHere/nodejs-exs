var main = require('../models/main');
var multer = require("multer")
var path = require('path');
var config = require('../../configs/config');
//Controller for mainp
var mainController = {
 //Create a main
 test: function(req, res){
     
 },
 fileUpload: function(req, res, next){
    var storage = multer.diskStorage({   
     destination: function (req, file, callback) {
        fs.mkdir('./uploads', function(err) {
        if(err) { console.log(err.stack) } else {
             callback(null, './uploads');
        }
        })
     },
     filename: function (req, file, callback) {
        callback(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname));
     },
    });
    var upload = multer({
     storage : storage, 
     fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext!=='.png'&&ext!=='.jpg'&&ext!=='.gif'&&ext!=='.jpeg') {
            return callback(new Error('Only images are allowed'));
        }
        callback(null, true);
     }
    }).single('userFile');
    upload(req,res,function(err){
        if(err){   return res.end("Error uploading file.");    }
        res.end("File is uploaded");
    });
    
    
 },
 socketcom: function(req, res, next){
     console.log("at socketcom api: ")
     console.log(res.body);
     /*
     //Cannot use this socket.io because on node version
     const io = require('socket.io')(config.server);
     io.on('connection', (socket) => {
         console.log("Client connected!");
         socket.on('message-from-client-to-server', (msg) => {
             console.log(msg);
         })
         socket.emit('message-from-server-to-client', 'Hello World!');
     });*/
     
    var WebSocketServer = require('ws').Server
    var wss = new WebSocketServer({ server: config.server }); 
    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
           var returnMessage = 
           JSON.stringify({mid:-2, text: "Your message Recieved at server"});
           console.log(returnMessage);
           ws.send(returnMessage)
      });
      ws.send(JSON.stringify({
        mid:-2,
        text:'I am glad to say we have successsfully connected'
      }))
      console.log('ws connected');
    });
    console.log("ws server at: ")
    res.end("at socketcom is api");
    
 },
 
 
 
 
}
module.exports = mainController;
