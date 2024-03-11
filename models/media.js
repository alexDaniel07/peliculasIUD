const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  serial: { type: String, required: true, unique: true },
  titulo: { type: String, required: true },
  sinopsis: { type: String, required: true },
  urlPelicula: { type: String, required: true, unique: true },
  portada: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  anioEstreno: { type: Number, required: true },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: 'Genero', required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: 'Productora', required: true },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: 'Tipo', required: true },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;