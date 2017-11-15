var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    return db.select('title', 'name').from('movie').innerJoin('person', 'movie.director_id', 'person.id')
    .then (function(directorData){
      var director = directorData
      console.log(director)
      return db.select('title', 'name').from('movie').innerJoin('person_movie', 'movie.id', 'person_movie.movie_id').innerJoin('person', 'person.id', 'person_movie.person_id')
        .then(function(actorData) {
          var actor = actorData
          var data = {
            'directorData': director,
            'actorData': actor
          }
          res.send({data})
          // res.render('index', { 
          // 'directorData' : director,
    //       'actorData' : actor 
    // });
  });
})
})  

// router.post('/new', (req, res, next)=>{
//   res.render('index', { 'method' : 'post', 'path' : '/new'})
// })

// router.put('/new/1', (req, res, next)=>{
//   res.render('index', { 'method' : 'put', 'path' : '/new/1'})
// })
module.exports = router;
