const express = require('express');
const router = express.Router();
const Director = require('../models/director');

// Obtener todos los directores
router.get('/', async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});

// Obtener un director por ID
router.get('/:id', getDirector, (req, res) => {
  res.json(res.director);
});

// Crear un nuevo director
router.post('/', async (req, res) => {
  const { nombres } = req.body;

  const nuevoDirector = new Director({
    nombres,
  });

  try {
    const director = await nuevoDirector.save();
    res.status(201).json(director);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
});

// Actualizar un director
router.put('/:id', getDirector, async (req, res) => {
  const { nombres } = req.body;

  try {
    res.director.nombres = nombres;
    const directorActualizado = await res.director.save();
    res.json(directorActualizado);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
});

// Eliminar un director
router.delete('/:id', getDirector, async (req, res) => {
  try {
    await res.director.remove();
    res.json({ mensaje: 'Director eliminado' });
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
});

// Middleware para obtener un director por ID
async function getDirector(req, res, next) {
  let director;
  try {
    director = await Director.findById(req.params.id);
    if (director == null) {
      return res.status(404).json({ mensaje: 'Director no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ mensaje: err.message });
  }

  res.director = director;
  next();
}

module.exports = router;