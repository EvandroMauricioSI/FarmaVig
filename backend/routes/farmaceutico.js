const express = require('express');
const router = express.Router();
const Farmaceutico = require('../models/Farmaceutico');

// Listar farmacêuticos
router.get('/', async (req, res) => {
  const farmaceuticos = await Farmaceutico.find();
  res.json(farmaceuticos);
});

// Criar farmacêutico
router.post('/', async (req, res) => {
  const novoFarmaceutico = new Farmaceutico(req.body);
  await novoFarmaceutico.save();
  res.status(201).json(novoFarmaceutico);
});

module.exports = router;
