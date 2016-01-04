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

router.get('/postman' , function(req , res) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var params = req.query;
  console.log(params);
  var options = {
    host : params.hostname,
    path : params.path,
    method : 'GET'
  }

  var req = https.request(options, function(res) {
  console.log("statusCode: ", res.statusCode);
  console.log("headers: ", res.headers);

  res.on('data', function(d) {
    process.stdout.write(d);
  });
  });
  req.end();

  req.on('error', function(e) {
    console.error(e);
  });
  res.status(200).end();
});

module.exports = router;
