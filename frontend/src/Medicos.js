import React, { useState, useEffect } from 'react';
import './App.css';

function Medicos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/medicos')
      .then(response => response.json())
      .then(data => setMedicos(data));
  }, []);

  return (
    <div className="App">
      <h2>Médicos</h2>
      <ul>
        {medicos.map(medico => (
          <li key={medico._id}>{medico.nome} - {medico.especialidade}</li>
        ))}
      </ul>
    </div>
  );
}

export default Medicos;