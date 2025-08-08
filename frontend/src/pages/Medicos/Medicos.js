import React, { useState, useEffect } from 'react';
import './Medicos.css';

function Medicos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/medicos')
      .then(response => response.json())
      .then(data => setMedicos(data));
  }, []);

  const opcoesMenu = [
    'Agenda de consultas e procedimentos presenciais',
    'Agenda de Teleconsultas',
    'Multi-agenda dos médicos',
    'Cadastro geral dos pacientes',
    'Histórico completo de cada paciente',
    'Prescrição digital e eletrônica integrada com as farmácias',
    'Faturamento TISS',
    'Tabela TUSS',
    'CID',
    'Chat interno',
    'Envio de E-mail para os pacientes',
    'Bulário online',
    'Fluxo de caixa completo',
    'Repasse financeiro para os médicos',
    'Relatórios',
    'Estoque',
    'Telemonitoramento'
  ];

  const medico = medicos[0]; // Usar o primeiro médico retornado

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>{medico ? medico.nome : 'Carregando médico...'}</h1>
        <p>{medico ? `CRM: ${medico.crm}` : ''}</p>
      </header>

      <nav className="menu-list">
        <ul>
          {opcoesMenu.map((item, index) => (
            <li key={index}>{index + 1} - {item}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Medicos;
