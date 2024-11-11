import React from 'react';
import './Finalizacao.css';
import juninfinali from "../../../assets/images/juninfinalizacaohome.png"

const Finalizacao = () => {
  return (
    <section className="finalizacao-container">
      <div className="finalizacao-content">
        <h2>Pronto para Transformar sua Educação e Realizar Seus Sonhos?</h2>
        <p>
          Descubra como a Neuron pode revolucionar sua jornada de aprendizado! Acesse agora e explore 
          oportunidades personalizadas que te ajudarão a alcançar seus objetivos acadêmicos e profissionais.
        </p>
        <button className="finalizacao-button">Experimente Gratuitamente</button>
      </div>
      <div className="finalizacao-image">
        <img src={juninfinali} alt="Personagem sorrindo" />
      </div>
    </section>
  );
};

export default Finalizacao;