import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pacientes.css';

function Paciente() {
  const navigate = useNavigate();

  const handleSolicitar = () => {
    alert('Solicitação de mais medicamentos enviada!');
  };

  const handleInformar = () => {
    navigate('/efeitos-colaterais');
  };

  return (
    <div className="paciente-container">
      {/* Cabeçalho azul */}
      <header className="paciente-header">
        <div className="menu-icon">☰</div>
        <div className="logo">
          <h1>farma<span>Vig</span></h1>
        </div>
      </header>

      {/* Cartão do usuário */}
      <section className="paciente-card">
        <div className="paciente-info">
          <p className="saudacao">Olá, <strong>Silvia Maria</strong></p>
          <p className="paciente-label">PACIENTE</p>
          <p className="paciente-plano">Categoria A</p>
        </div>
        <div className="paciente-avatar">
          <img src="/perfil.png" alt="Perfil" />
        </div>
      </section>

      {/* Blocos de medicamentos */}
      <main className="paciente-opcoes">
        <div className="opcao-card">
          <h3>Nolvadex-D 20mg</h3>
          <p>
            Comprimidos revestidos de 20 mg. Manter entre 15ºC e 30ºC.{' '}
            <strong>Dose única diária</strong>.
          </p>
          <div className="botoes">
            <button onClick={handleSolicitar}>Solicitar mais</button>
            <button className="bt-efeitos-colaterais" onClick={handleInformar}>Efeitos colaterais</button>
          </div>
        </div>

        <div className="opcao-card">
          <h3>Medicamento 2</h3>
          <p>Informações do medicamento...</p>
          <div className="botoes">
            <button onClick={handleSolicitar}>Solicitar mais</button>
            <button onClick={handleInformar}>Efeitos colaterais</button>
          </div>
        </div>

       
      </main>

      {/* Barra inferior */}
      <nav className="paciente-nav">
        <div className="nav-item active">🏠</div>
        <div className="nav-item">💊</div>
        <div className="nav-item"> X </div>
        <div className="exit">
          <img src="/bt-exit.png" alt="bt-exit" className="bt-exit" />
        </div>
      </nav>
    </div>
  );
}

export default Paciente;
