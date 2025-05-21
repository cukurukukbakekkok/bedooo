var express = require('express');
var router = express.Router();

//Import database
var connection = require('../libary/database');

/**
 * INDEX POSTS 
 */
router.get('/', function (req, res, next) {
    //Query
    connection.query('SELECT * FROM posts', function (error, results, fields) {
        if (err) {
            req.flash('error', err);
            res.render('posts/index', {
                data: ''
            });
        } else  {
            //Render to view
            res.render('posts/index', {
                data:rows // <-- data posts
            });
        }
    });
});

module.exports = router;