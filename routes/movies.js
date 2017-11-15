var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return db.select().from('movie')
  .then (function(movieData){
    res.render('movies', { movieData: movieData })
  })
});

router.post('/new', function(req, res, next) {
  console.log(req.body)
  return db.table('movie').insert(req.body)
  .then (() => {
    res.redirect('/movies')
  })
})

module.exports = router;
