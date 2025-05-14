const mongoose = require('mongoose');

const MedicoSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  senha: String,
  crm: String,
  especialidade: String
});

module.exports = mongoose.model('Medico', MedicoSchema);
