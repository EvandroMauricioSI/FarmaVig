require('dotenv').config(); // Deve estar no topo

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/medicos', require('./routes/medico'));
app.use('/api/pacientes', require('./routes/paciente'));
app.use('/api/farmaceuticos', require('./routes/farmaceutico'));


// Defina o schema para os dados de exemplo
const exemploSchema = new mongoose.Schema({
  nome: String,
  especialidade: String,
  crm: String,
  data_nascimento: Date,
  medicamentos: [String]
});

const Exemplo = mongoose.model('Exemplo', exemploSchema);

// Função para carregar dados de exemplo no banco
const carregarDados = async () => {
  try {
    const dadosExemplo = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'exemplo.json'))
    );
    const count = await Exemplo.countDocuments();
    if (count === 0) {
      await Exemplo.insertMany(dadosExemplo);
      console.log('Dados de exemplo carregados com sucesso!');
    } else {
      console.log('Dados de exemplo já existem no banco.');
    }
  } catch (error) {
    console.error('Erro ao carregar dados de exemplo:', error);
  }
};

// Conexão com MongoDB
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/farmavig', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Conectado ao MongoDB');

    // Carregar dados de exemplo após conectar
    await carregarDados();

    // Iniciar o servidor
    app.listen(5001, () => {
      console.log('Servidor rodando na porta 5001');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com MongoDB:', err);
  });
