var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 3311
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are connected...')
})



router.post('/:user_id', function(req, res, next) {
    var word = req.body.word;
    console.log(word);
    connection.query('SELECT * FROM item WHERE user_id = ? AND (name LIKE "%'+word+'%" OR short_name LIKE "%'+word+'%" OR place LIKE "%'+word+'%" OR note LIKE "%'+word+'%" OR author LIKE "%'+word+'%")', [req.params.user_id], function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        } else{
            //console.log(res);
            res.json(results)
        }
    })
});






module.exports = router;