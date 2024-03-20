var express = require('express');
var router = express.Router();
const db = require('../db/dbConeccion')
const users = {}
const Director = require('../controllers/director')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/creaDirector', Director.crear);


module.exports = router;
