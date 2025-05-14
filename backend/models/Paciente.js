const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  senha: String,
  data_nascimento: Date
});

module.exports = mongoose.model('Paciente', PacienteSchema);
