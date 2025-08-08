import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './setup/reportWebVitals';

//Criação do ponto de renderização:
const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderização da aplicação:
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Se você quiser começar a medir o desempenho do seu aplicativo, passe uma função para registrar os resultados (por exemplo: reportWebVitals(console.log)) ou envie para um endpoint de análise. Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
