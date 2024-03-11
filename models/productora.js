const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  slogan: { type: String },
  descripcion: { type: String },
});

const Productora = mongoose.model('Productora', productoraSchema);

module.exports = Productora;