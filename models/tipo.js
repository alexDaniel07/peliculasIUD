const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  descripcion: { type: String },
});

const Tipo = mongoose.model('Tipo', tipoSchema);

module.exports = Tipo;