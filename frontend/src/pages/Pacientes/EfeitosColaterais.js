import React from "react";

export default function EfeitosColaterais() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Informações sobre Efeitos Colaterais</h1>
      <p>
        Aqui você pode informar e consultar efeitos colaterais dos medicamentos.
      </p>
      <ul>
        <li>Náusea</li>
        <li>Dor de cabeça</li>
        <li>Reações alérgicas</li>
        {/* Adicione outros efeitos colaterais que desejar */}
      </ul>
    </div>
  );
}
