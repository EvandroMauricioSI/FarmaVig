import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ userType }) {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Determina o label e placeholder com base no tipo de usuário
  const getIdentifierLabel = () => {
    if (userType.toLowerCase() === 'médico' || userType.toLowerCase() === 'medico') {
      return 'CPF ou CRM:';
    }
    if (userType.toLowerCase() === 'farmacêutico' || userType.toLowerCase() === 'farmaceutico') {
      return 'CPF ou CRM:';
    }
    if (userType.toLowerCase() === 'paciente') {
      return 'CPF ou Email:';
    }
    return 'Identificação:';
  };

  const getIdentifierPlaceholder = () => {
    if (userType === 'Medicos') {
      return 'Digite seu CPF ou CRM';
    }
    if (userType === 'Farmaceuticos') {
      return 'Digite seu CPF ou CRM';
    }
    if (userType === 'Pacientes') {
      return 'Digite seu CPF ou Email';
    }
    return 'Digite sua identificação';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você faria a validação e autenticação
    navigate(`/${userType.toLowerCase()}`);
  };

  return (
    <div className="login-container" lang="pt-BR">
      <h2>Login | {userType}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="identifier">{getIdentifierLabel()}</label>
          <input
            type="text"
            id="identifier"
            value={identifier}
            placeholder={getIdentifierPlaceholder()}
            onChange={(e) => setIdentifier(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>

      {/* Botão de Voltar */}
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <img
          src="/button_back_blue.png"
          alt="botão voltar"
          className="back-button-img"
        />
        <h3 className="h3">VOLTAR</h3>
      </button>
    </div>
  );
}

export default Login;
