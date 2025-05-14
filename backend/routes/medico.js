const express = require('express');
const router = express.Router();
const Medico = require('../models/Medico');

// Listar médicos
router.get('/', async (req, res) => {
  const medicos = await Medico.find();
  res.json(medicos);
});

// Criar médico
router.post('/', async (req, res) => {
  const novoMedico = new Medico(req.body);
  await novoMedico.save();
  res.status(201).json(novoMedico);
});

module.exports = router;
