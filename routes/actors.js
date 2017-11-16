var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name', 'role').from('movie').innerJoin('person_movie', 'movie.id', 'person_movie.movie_id').innerJoin('person', 'person.id', 'person_movie.person_id')
  .then(function(actorData) {
    var newArr = [];
    for (var i=0; i<actorData.length; i++) {
       var person = actorData[i]
      if (person.role === 'actor'){
        newArr.push(person)
      }
    }
    console.log(newArr)
    // res.send(newArr)
    res.render('actors', {actorData: newArr});
  })
  })

  // { name: 'Tom Hanks', title: 'Cast Away', role: 'actor' }
  router.post('/new', (req, res, next)=>{
    console.log(req.body)
    var movieTitle = req.body.title
    console.log(movieTitle)
    return db('person').insert({
      'name': req.body.name,
      'role': req.body.role
    }, 'id')
    .then((actorID)=>{
      let actorid = actorID[0]
      return db('movie').insert({
        'title': movieTitle
      }).returning('id')
      .then((movieID)=>{ 
        let movieid = movieID[0]
        return db('person_movie').insert({
          'person_id' : actorid,
          'movie_id' : movieid
        })
      })
      .then(()=>{
        res.redirect('/actors')
      })
    })
  })


module.exports = router;
