var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const users = {}
const Director = require('../models/moduloDirector')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.get('/creaDirector', Director.crear(req, res)=>{
  res.send('random.text');
});*/

router.post('/creaDirector', async (req, res)=>{
  try{

    const director = await Director.create(req.body)
    res.status(200).json(director)
  }catch (error) {
    res.status(500).json({message: error.message})
  }
});


module.exports = router;
