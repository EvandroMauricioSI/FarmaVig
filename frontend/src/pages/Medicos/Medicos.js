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

  const menuAgrupado = [
    {
      categoria: 'Consultas e Agendamentos',
      itens: [
        { nome: 'Consultas agendadas para hoje', rota: './consultas' },
        { nome: 'Agenda de Teleconsultas', rota: './teleconsultas' },
        { nome: 'Multi-agenda dos médicos', rota: '/multi-agenda' },
      ]
    },
    {
      categoria: 'Pacientes',
      itens: [
        { nome: 'Cadastro geral dos pacientes', rota: '/cadastro-pacientes' },
        { nome: 'Histórico completo de cada paciente', rota: '/historico-paciente' },
      ]
    },
    {
      categoria: 'Prescrições e Farmácia',
      itens: [
        { nome: 'Prescrição digital e eletrônica integrada com as farmácias', rota: '/prescricao-digital' },
        { nome: 'Bulário online', rota: '/bulario' },
      ]
    },
    {
      categoria: 'Financeiro',
      itens: [
        { nome: 'Faturamento TISS', rota: '/faturamento-tiss' },
        { nome: 'Fluxo de caixa completo', rota: '/fluxo-caixa' },
        { nome: 'Repasse financeiro para os médicos', rota: '/repasse-financeiro' },
      ]
    },
    {
      categoria: 'Comunicação',
      itens: [
        { nome: 'Chat interno', rota: '/chat' },
        { nome: 'Envio de E-mail para os pacientes', rota: '/envio-email' },
      ]
    },
    {
      categoria: 'Tabelas e Códigos',
      itens: [
        { nome: 'Tabela TUSS', rota: '/tabela-tuss' },
        { nome: 'CID', rota: '/cid' },
      ]
    },
    {
      categoria: 'Monitoramento e Relatórios',
      itens: [
        { nome: 'Telemonitoramento', rota: '/telemonitoramento' },
        { nome: 'Relatórios', rota: '/relatorios' },
      ]
    },
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
        {menuAgrupado.map((grupo, idx) => (
          <div key={idx} className="menu-group">
            <h2 className="menu-group-title">{grupo.categoria}</h2>
            <ul>
              {grupo.itens.map((item, index) => (
                <li key={index}>
                  <button 
                    className="menu-button"
                    onClick={() => handleNavegar(item.rota)}
                  >
                    {item.nome}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Medicos;
