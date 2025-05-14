import React from 'react';
import './Paciente.component.css'; // Or paciente.css if renamed


function Paciente() {
  const handleSolicitar = () => {
    alert('Solicitação de mais medicamentos enviada!');
  };

  const handleInformar = () => {
    alert('Informações sobre efeitos colaterais exibidas!');
  };

  return (
    <div className="corpo-pacientes">

    <div className="perfil-paciente">
      <img src="/perfil.png" alt="Logo" className="foto-perfil" />
      <h1 className="nome-paciente">Silvia Maria</h1>
    </div>
      
      
      
      <div className="list-medicamentos">
          <h2>Medicamentos:</h2>
          
          <div className="medicamento-x">
            <h3>Nolvadex-D 20mg</h3>
            <p>
              Comprimidos revestidos de 20 mg em embalagens. Deve ser mantido em
              temperatura ambiente (15ºC a 30ºC).{' '}
              <strong>Dose única diária</strong>
            </p>
            <div className="bt">
              <button className="bt-paciente" onClick={handleSolicitar}>
                Solicitar mais
              </button>
              <button className="bt-paciente" onClick={handleInformar}>
                Efeitos colaterais
              </button>
            </div>
          </div>
          
          <div className="medicamento-x">
            <h3>Nome</h3>
            <p>dados do medicamento</p>
            <div className="bt">
              <button className="bt-paciente" onClick={handleSolicitar}>
                Solicitar mais
              </button>
              <button className="bt-paciente" onClick={handleInformar}>
                Efeitos colaterais
              </button>
            </div>
          </div>
          
          <div className="medicamento-x">
            <h3>Nome</h3>
            <p>dados do medicamento</p>
            <div className="bt">
              <button className="bt-paciente" onClick={handleSolicitar}>
                Solicitar mais
              </button>
              <button className="bt-paciente" onClick={handleInformar}>
                Efeitos colaterais
              </button>
            </div>
          </div>
          
          <div className="medicamento-x">
            <h3>Nome</h3>
            <p>dados do medicamento</p>
            <div className="bt">
              <button className="bt-paciente" onClick={handleSolicitar}>
                Solicitar mais
              </button>
              <button className="bt-paciente" onClick={handleInformar}>
                Efeitos colaterais
              </button>
            </div>
          </div>

        </div>
      </div>

  );
}

export default Paciente;