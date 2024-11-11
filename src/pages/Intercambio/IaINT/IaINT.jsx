import React from "react";
import "./IaINT.css";
import juninrobotico from '../../../assets/images/juninrobotico.png'

function IaINT() {
  return (
    <div className="ia-container">
      <h2 className="ia-title">Como nossa IA Potencializa seu caminho para o Intercâmbio</h2>

      <div className="ia-content">
        <img src={juninrobotico} alt="Avatar" className="ia-avatar" />

        <ul className="ia-features">
          <li>Oferecer suporte personalizado em várias etapas.</li>
          <li>Ajuda a identificar oportunidades alinhadas ao perfil do aluno</li>
          <li>Sugere bolsas de estudo na Espanha</li>
          <li>Orienta na elaboração de cartas de apresentação (cover letters)</li>
          <li>Monitora o progresso do estudante</li>
          <li>Ajusta as recomendações de conteúdos com base no desempenho do usuário e muito mais</li>
        </ul>
      </div>
    </div>
  );
}

export default IaINT;
