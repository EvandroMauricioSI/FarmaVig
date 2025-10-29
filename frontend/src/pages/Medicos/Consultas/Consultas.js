import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Medicos.css';

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5001/api/medicos')
      .then(response => response.json())
      .then(data => setMedicos(data))
      .catch(err => console.error('Erro ao buscar médicos:', err));
  }, []);

  const opcoesMenu = [
    { nome: 'Consultas | Presenciais', rota: '' },
    { nome: 'Consultas | Teleconsultas', rota: '/teleconsultas' },
    { nome: 'Multi-agenda dos médicos', rota: '/multi-agenda' },
    { nome: 'Cadastro geral dos pacientes', rota: '/cadastro-pacientes' },
    { nome: 'Histórico completo de cada paciente', rota: '/historico-paciente' },
    { nome: 'Prescrição digital e eletrônica integrada com as farmácias', rota: '/prescricao-digital' },
    { nome: 'Faturamento TISS', rota: '/faturamento-tiss' },
    { nome: 'Tabela TUSS', rota: '/tabela-tuss' },
    { nome: 'CID', rota: '/cid' },
    { nome: 'Chat interno', rota: '/chat' },
    { nome: 'Envio de E-mail para os pacientes', rota: '/envio-email' },
    { nome: 'Bulário online', rota: '/bulario' },
    { nome: 'Fluxo de caixa completo', rota: '/fluxo-caixa' },
    { nome: 'Repasse financeiro para os médicos', rota: '/repasse-financeiro' },
    { nome: 'Relatórios', rota: '/relatorios' },
    { nome: 'Telemonitoramento', rota: '/telemonitoramento' },
  ];

  const medico = medicos[0];

  const handleNavegar = (rota) => {
    navigate(rota);
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>{medico ? medico.nome : 'Carregando médico...'}</h1>
        <p>{medico ? `CRM: ${medico.crm}` : ''}</p>
      </header>

      <nav className="menu-list">
        <ul>
          {opcoesMenu.map((item, index) => (
            <li key={index}>
              <button 
                className="menu-button"
                onClick={() => handleNavegar(item.rota)}
              >
                {index + 1} - {item.nome}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Medicos;
