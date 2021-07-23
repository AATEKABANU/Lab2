var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aateka' });
});
router.get('/Ijaj', function(req, res, next) {
  res.render('Ijaj', { title: 'Father' });
});
router.get('/Afsana', function(req, res, next) {
  res.render('Afsana', { title: 'Mother' });
});
router.get('/Aazin', function(req, res, next) {
  res.render('Aazin', { title: 'Brother' });
});
module.exports = router;
