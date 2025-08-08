import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ userType }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${userType.toLowerCase()}`);
  };

  return (
    <div className="login-container" lang='pt-BR'>
      <h2>Login | {userType}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>

        
      </form>
      {/* Botão de Voltar */}
      <button  type="button" className="back-button" onClick={() => navigate(-1)}>
        <img src="/button_back_blue.png" alt="botão voltar" className="back-button-img" />
        <h3 className='h3'>VOLTAR</h3>
      </button>
    </div>
  );
}

export default Login;
