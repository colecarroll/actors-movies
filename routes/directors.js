var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name').from('movie').innerJoin('person', 'movie.director_id', 'person.id')
  .then (function(directorData){
    res.render('directors', { directorData: directorData})
  })
});

router.post('/new', function(req, res, next) {
  
})

module.exports = router;
