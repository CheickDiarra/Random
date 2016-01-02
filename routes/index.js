var express = require('express');
var router = express.Router();
var random_people = require('../src/random/api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/random', function(req , res) {

  random_people.generate(req.query)
  .then(function(result) {
      console.log('Generated');
      res.status(200).json(result);
  });
});

module.exports = router;
