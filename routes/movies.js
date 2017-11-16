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
  return db.table('person').insert({
    "name" : req.body.directorName,
    "role" : req.body.role1
  }, "id")
  .then((directorid)=>{
    var directorID = directorid[0]
    return db.table('person').insert({
      'name' : req.body.actorName,
      'role' : req.body.role2
    }, "id")
    .then((actorid)=>{
      var actorID = actorid[0]
      return db.table('movie').insert({
        "title" : req.body.title,
        "director_id" : directorID
      }, "id")
      .then((movieid)=>{
        let movieID=movieid[0]
        return db.table('person_movie').insert({
          "person_id": directorID,
          "movie_id" : movieID
        })
        .then(()=>{
          return db.table('person_movie').insert({
            "person_id" : actorID,
            "movie_id" : movieID
          })
          .then (() => {
            res.redirect('/movies')
          })
        })
      })
    })
  })
 
})

module.exports = router;
