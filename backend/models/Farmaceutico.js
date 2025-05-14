const mongoose = require('mongoose');

const FarmaceuticoSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  senha: String,
  crf: String
});

module.exports = mongoose.model('Farmaceutico', FarmaceuticoSchema);
