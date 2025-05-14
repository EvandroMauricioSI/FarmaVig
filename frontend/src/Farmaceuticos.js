import React, { useState, useEffect } from 'react';
import './App.css';

function Farmaceuticos() {
  const [farmaceuticos, setFarmaceuticos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/farmaceuticos')
      .then(response => response.json())
      .then(data => setFarmaceuticos(data));
  }, []);

  return (
    <div className="App">
      <h2>Farmacêuticos</h2>
      <ul>
        {farmaceuticos.map(farmaceutico => (
          <li key={farmaceutico._id}>{farmaceutico.nome} - CRF: {farmaceutico.crf}</li>
        ))}
      </ul>
    </div>
  );
}

export default Farmaceuticos;