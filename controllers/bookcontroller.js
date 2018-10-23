let router = require('express').Router();
let Book = require('../db').import('../models/books');

router.get('/', function (req, res) {
  res.send('Hey!!! This is a test route!');
});

router.get('/getall', function(req, res){
    
  Book
  .findAll({
    attributes: ['nameOfBook', 'author', 'genre', 'pubYear', 'rating']
  })
  .then(
    function findAllSuccess(data) {
      console.log("Controller data:", data);
      res.json(data);
    },
    function findAllError(err) {
      res.send(500, err.message);
    }
  );
});

router.get('/get/:id', function(req,res) {
  let data = req.params.id;

  Book
  .findOne({
    where: { id: data },
    attributes: ['nameOfBook', 'author', 'genre', 'pubYear', 'rating']
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

router.post('/create', function (req, res) {

  Book
  .create({
    nameOfBook: req.body.nameOfBook,
    author: req.body.author,
    genre: req.body.genre,
    pubYear: req.body.pubYear,
    rating: req.body.rating
  }).then(dataFromDatabase => {
      res.send("Test two was success.. For now..")
  })
});

router.delete('/delete/:id', function(req, res) {
  let data = req.params.id;

  Book
  .destroy({
    where: { id: data }
  }).then(
    function deleteLogSuccess(data){
      res.send("you removed a log");
    },
    function deleteLogError(err){
      res.send(500, err.message);
    }
  );
});


router.put('/update/:id', (req, res, next) => {
  Book.update(
      {
          nameOfBook: req.body.nameOfBook,
          author: req.body.author,
          genre: req.body.genre,
          pubYear: req.body.pubYear,
          rating: req.body.rating
      },
      {
          where: { id: req.params.id }
      }
  )
  .then(
    function updateSuccess(updatedLog) {
      res.json({
        nameOfBook: req.body.nameOfBook,
          author: req.body.author,
          genre: req.body.genre,
          pubYear: req.body.pubYear,
          rating: req.body.rating
      });
    },
    function updateError(err){
      res.send(500,err.message);
    }
  )
});
module.exports = router;