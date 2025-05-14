
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  cpf: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  tipo: { type: String, enum: ['paciente', 'medico', 'farmaceutico'], required: true }
});

module.exports = mongoose.model('User', UserSchema);
