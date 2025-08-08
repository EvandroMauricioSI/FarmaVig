import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from '../pages/Login/Login';
import Medicos from '../pages/Medicos/Medicos';
import Pacientes from '../pages/Pacientes/Pacientes';
import Farmaceuticos from '../pages/Farmaceuticos/Farmaceuticos';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="cabecalho">
          <img src="/logo.png" alt="FarmaVig Logo" className="logo" />
          <h3> FarmaVig </h3>
        </div>
        
        <Routes>
          <Route
            path="/"
            element={
              <div className="botoes">

                <h2>Logar como:</h2>

                <Link to="/login/pacientes">
                  <button>Paciente</button>
                </Link>
                <br />

                <Link to="/login/medicos">
                  <button>Médico</button>
                </Link>
                <br />

                <Link to="/login/farmaceuticos">
                  <button>Farmacêutico</button>
                </Link>
              </div>
            }
          />
          <Route path="/login/medicos" element={<Login userType="Médicos" />} />
          <Route path="/login/pacientes" element={<Login userType="Pacientes" />} />
          <Route path="/login/farmaceuticos" element={<Login userType="Farmacêuticos" />} />
          <Route path="/medicos" element={<Medicos />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/farmaceuticos" element={<Farmaceuticos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;