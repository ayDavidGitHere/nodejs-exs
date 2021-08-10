var main = require('../models/main');
var multer = require("multer")
var path = require('path');
//Controller for main
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
     res.end("Seen")
 }
 
 
 
 
 
}
module.exports = mainController;
