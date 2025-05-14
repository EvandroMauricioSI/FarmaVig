const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Rota de login
router.post('/login', async (req, res) => {
  const { cpf, senha } = req.body;

  try {
    const user = await User.findOne({ cpf });
    if (!user) {
      return res.status(401).json({ message: 'CPF não encontrado' });
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    const token = jwt.sign({ id: user._id, tipo: user.tipo }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token, tipo: user.tipo });
  } catch (err) {
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

module.exports = router;
