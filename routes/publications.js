//require express library
var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = './uploads/';
//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
            cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage }).single('file');

//var upload = multer({dest: DIR}).single('file');


//our file upload function.
router.post('/', function (req, res, next) {



    var path = '';
    upload(req, res, function (err) {

        if (err) {
            // An error occurred when uploading
            c
            return res.status(422).send("an Error occured")
        }
        // No error occured.

        path = req.file.path;
        return res.send("Upload Completed for "+path);
    });
})
module.exports = router;
