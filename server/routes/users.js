var express = require('express');
var router = express.Router();
const Director = require('../models/moduloDirector')



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.get('/creaDirector', Director.crear(req, res)=>{
  res.send('random.text');
});*/
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*CRUD DIRECTOR*/

router.post('/creaDirector', async (req, res)=>{
  try{

    const director = await Director.create(req.body)
    res.status(200).json(director)
  }catch (error) {
    res.status(500).json({message: error.message})
  }
});

router.get('/director', async (req, res)=>{
  try{
    const  director = await Director.find()
    res.status(200).json(director)
  }catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.put('/director/:id', async (req, res)=>{
  try{
    const {id} = req.params;
    const director = await Director.findOneAndUpdate(id, req.body)
    res.status(200).json(director)

    const updateDirector = await Director.findById(id, req.body)
    res.status(200).json(updateDirector)

  }catch (error) {
    res.status(500).json({message: error.message})
  }
})

/**
* ordern de las solicitudes HTTP
* https://stackoverflow.com/questions/7042340/error-cant-set-headers-after-they-are-sent-to-the-client
 *
 * crud bien hecho
 * https://github.com/haris-bit/simple-crud-app-backend/blob/main/controllers/product.controller.js
* */


module.exports = router;
