const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  descripcion: { type: String, required: true },
});

const Genero = mongoose.model('Genero', generoSchema);

module.exports = Genero;