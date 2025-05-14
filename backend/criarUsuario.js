const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');

async function criarUsuario() {
  await mongoose.connect(process.env.MONGO_URI);

  const senhaCriptografada = await bcrypt.hash('123456', 10);

  const novoUsuario = new User({
    cpf: '12345678900',
    senha: senhaCriptografada,
    tipo: 'medico' // pode ser 'paciente' ou 'farmaceutico'
  });

  await novoUsuario.save();
  console.log('Usuário criado com sucesso!');
  mongoose.disconnect();
}

criarUsuario();
