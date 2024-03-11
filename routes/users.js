var express = require('express');
var router = express.Router();
const db = require('../db/dbConeccion')
const users = {}
const director = require('../models/moduloDirector')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
