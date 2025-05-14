
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
  const { cpf, senha } = req.body;
  try {
    const user = await User.findOne({ cpf });
    if (!user) return res.status(404).json({ msg: 'Usuário não encontrado' });

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) return res.status(401).json({ msg: 'Senha incorreta' });

    const token = jwt.sign({ id: user._id, tipo: user.tipo }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token, tipo: user.tipo });
  } catch (err) {
    res.status(500).json({ msg: 'Erro interno' });
  }
};
