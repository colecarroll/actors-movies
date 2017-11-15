var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name').from('movie').innerJoin('person_movie', 'movie.id', 'person_movie.movie_id').innerJoin('person', 'person.id', 'person_movie.person_id')
  .then(function(actorData) {
    res.render('actors', { actorData: actorData});
  })

});

module.exports = router;
