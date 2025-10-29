import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from '../pages/Login/Login';
import Medicos from '../pages/Medicos/Medicos';
import Pacientes from '../pages/Pacientes/Pacientes';
import Farmaceuticos from '../pages/Farmaceuticos/Farmaceuticos';
import EfeitosColaterais from '../pages/Pacientes/EfeitosColaterais';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className='logo'>
            <img src="/logo-farmavig-branco.png" alt="FarmaVig Logo" className="icon_logo" />
            <h3 className="h3"> FarmaVig </h3>
          </div>
        
        </div>
        
        <Routes>
          <Route
            path="/"
            element={
              <div className="botoes">

                <h2>Logar como:</h2>

                <Link to="/Login/Pacientes">
                  <button>Paciente</button>
                </Link>
                <br />

                <Link to="/Login/Medicos">
                  <button>Médico</button>
                </Link>
                <br />

                <Link to="/Login/Farmaceuticos">
                  <button>Farmacêutico</button>
                </Link>
              </div>
            }
          />
          <Route path="/login/medicos" element={<Login userType="Medicos" />} />
          <Route path="/login/pacientes" element={<Login userType="Pacientes" />} />
          <Route path="/login/farmaceuticos" element={<Login userType="Farmaceuticos" />} />
          <Route path="/Medicos" element={<Medicos />} />
          <Route path="/Pacientes" element={<Pacientes />} />
          <Route path="/Farmaceuticos" element={<Farmaceuticos />} />
          <Route path="/efeitos-colaterais" element={<EfeitosColaterais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;