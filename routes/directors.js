var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')
const query = require('./query')

/* GET users listing. */
router.get('/', function(req, res, next) {
  return db.select('title', 'name').from('movie').innerJoin('person', 'movie.director_id', 'person.id')
  .then (function(directorData){
    res.render('directors', { directorData: directorData})
  })
});


router.post('/new', function(req, res, next) {
  console.log(req.body)
  return db('person').insert({ 
    'name': req.body.name,
    'role': req.body.role
  }, 'id')
  .then((directorID)=>{
    return db('movie').insert({
      'title' : req.body.title,
      'director_id': directorID[0]
    })
    .then(()=>{
      res.redirect('/directors')
    })
  })
})

module.exports = router;
