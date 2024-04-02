
const {Schema, model} = require('mongoose');

const Director = Schema ({
  nombre: {
    type: String,
    required: true
  },

  Estado:{
     type: String,
    // required: true,
     enun:[
         '', 'Activo', 'Inactivo'
     ]
  },

  fechaCreacion: {
    type: Date,
    required: true
  }
  ,
  fechaActualizacion: {
    type: Date,
    required: true
   }
})

module.exports = model('moduloDirector', Director)