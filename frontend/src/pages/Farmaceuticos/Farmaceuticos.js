import React from 'react';
import './Farmaceuticos.css';

function Farmaceuticos() {
  // Dados estáticos apenas para exibição inicial
  const pacientes = [
    { id: 1, nome: "João Silva", medicamento: "Amoxicilina 500mg", status: "Em uso" },
    { id: 2, nome: "Maria Souza", medicamento: "Paracetamol 750mg", status: "Concluído" },
    { id: 3, nome: "Carlos Oliveira", medicamento: "Ibuprofeno 400mg", status: "Em uso" },
  ];

  const tarefas = [
    { id: 1, titulo: "Conferir estoque de Amoxicilina" },
    { id: 2, titulo: "Registrar entrega de dipirona" },
    { id: 3, titulo: "Atualizar ficha de João Silva" },
  ];

  return (
    <div className="farmaceutico-container">
      {/* Menu lateral */}
      <aside className="sidebar">
        <h2>Farmacêutico</h2>
        <nav>
          <ul>
            <li><a href="#pacientes">Pacientes</a></li>
            <li><a href="#medicamentos">Medicamentos</a></li>
            <li><a href="#tarefas">Tarefas</a></li>
            <li><a href="/">Sair</a></li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <section id="pacientes">
          <h3>Pacientes em Acompanhamento</h3>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Medicamento</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map(p => (
                <tr key={p.id}>
                  <td>{p.nome}</td>
                  <td>{p.medicamento}</td>
                  <td>{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="medicamentos">
          <h3>Medicamentos em Estoque</h3>
          <ul>
            <li>Amoxicilina 500mg — 120 unidades</li>
            <li>Paracetamol 750mg — 80 unidades</li>
            <li>Ibuprofeno 400mg — 65 unidades</li>
          </ul>
        </section>

        <section id="tarefas">
          <h3>Tarefas do Dia</h3>
          <ul>
            {tarefas.map(t => (
              <li key={t.id}>{t.titulo}</li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Farmaceuticos;
