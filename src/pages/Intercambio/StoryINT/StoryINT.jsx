import React from "react";
import "./StoryINT.css";
import leonardo from '../../../assets/images/leonardocard.png'
import julia from '../../../assets/images/juliacard.png'
import caioimage from '../../../assets/images/caiocard.png' 

function StoryINT() {
  return (
    <div className="story-container">
      <h2 className="story-title">Como um Ensino Médio Sólido Abre Portas para Oportunidades Internacionais</h2>
      <p className="story-subtitle">
        Conheça histórias inspiradoras de pessoas que, com uma sólida formação
        acadêmica, conseguiram oportunidades únicas ao redor do mundo.
      </p>

      <div className="story-cards">
        <div className="story-card">
          <img src={leonardo} alt="Leonardo Souza" className="story-image" />
          <h3 className="story-name">Leonardo Souza</h3>
          <p className="story-description">
            "Meu desempenho no ensino médio me levou a um intercâmbio em Paris, que foi
            essencial para minha carreira, ajudando-me a entender o mercado europeu."
          </p>
         
        </div>

        <div className="story-card">
          <img src={julia} alt="Julia Mendes" className="story-image" />
          <h3 className="story-name">Julia Mendes</h3>
          <p className="story-description">
            "Graças ao bom desempenho acadêmico, estudei em Buenos Aires e fiz contatos
            importantes que impulsionaram minha trajetória profissional."
          </p>
         
        </div>

        <div className="story-card">
          <img src={caioimage} alt="Caio Machado" className="story-image" />
          <h3 className="story-name">Caio Machado</h3>
          <p className="story-description">
            "O excelente desempenho no ensino médio me possibilitou estudar em Barcelona,
            onde adquiri conhecimentos globais e competências valiosas para minha carreira."
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default StoryINT;
