var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ppv'
})

connection.connect(function(err) {
    if (err) throw err
    console.log('You are now connected...')
})

router.post('/insert/:id/:name', function(req, res, next) {
    var project = req.body;
    var obj = '{"id":"'+req.params.id+'","name":"'+req.params.name+'"},';
    console.log( obj);

    connection.query('UPDATE item SET used_in_links = concat(used_in_links, ?) WHERE item.id = ?', [obj, project.id ], function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results)
        }
    })
});

router.get('/:category/:id', function(req, res, next) {
    connection.query('SELECT * FROM item WHERE id_category = ? AND user_id = ? ORDER BY name', [req.params.category, req.params.id], function(err, results) {
        if (err) {
            res.send(err);
        } else{
            res.json(results)
        }
    })
});

router.get('/:category/:id', function(req, res, next) {
    connection.query('SELECT * FROM item WHERE id = ?', [req.params.id], function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results)
        }
    })

});


router.post('/get/list', function(req, res, next) {
    var list = req.body;
    connection.query('SELECT * FROM item WHERE id IN (?)', [list],  function(err, results) {
        if (err) {
            //console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results)
        }
    })
});

router.post('/save/:category', function(req, res, next) {
    var project = req.body;
    //console.log('INSERT INTO item ('+ Object.keys(project) +') VALUES (' + Object.keys(project).map(function(key){return '?'}) + ') ' , Object.keys(project).map(function(key){return project[key]}));
    connection.query('INSERT INTO item ('+ Object.keys(project) +') VALUES (' + Object.keys(project).map(function(key){return '?'}) + ') ', Object.keys(project).map(function(key){return project[key]}),  function(err, results) {
        if (err) {
            //console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results)
        }
    })
});

router.post('/update/:id', function(req, res, next) {
    var project = req.body;
    var quer = '';
    Object.keys(project).forEach(function(key) {
        if(key != 'id')
            quer += (key +" = '"+ project[key]+"', ");
    });
    quer = quer.substring(0,quer.length-2);
    connection.query('UPDATE item SET ' + quer + ' WHERE item.id = ?', [req.params.id], function(err, results) {
        if (err) {
            console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results);
        }
    })
});

router.get('/:category/delete/:id', function(req, res, next) {
    connection.query('DELETE FROM item WHERE item.id = ? ', [req.params.id], function(err, results) {
        console.log(err,results);
        if (err) {
            console.log(err);
            res.send(err);
        } else{
            //console.log(results);
            res.json(results)
        }
    })

});



module.exports = router;