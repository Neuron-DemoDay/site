// src/components/Anuncio.jsx
import React from 'react';
import './Anuncio.css';
// import avatar from '../public/avatar.png';

const Anuncio = () => {
  return (
    <div className="anuncio-container">
      <div className="anuncio-content">
        <h2>Realize seu sonho de Intercâmbio através dos seus estudos</h2>
        <p>
          Use seu desempenho no ensino médio a seu favor e realize o sonho de fazer intercâmbio na
          Espanha com a Neuron. A plataforma sugere as melhores oportunidades, apresenta bolsas de
          estudo e ajuda na preparação para essa experiência única.
        </p>
        <br /><br /><br />
        <button>Comece agora!</button>
      </div>
      {/* <img src={avatar} alt="Avatar do garoto" className="anuncio-avatar" /> */}
    </div>
  );
};

export default Anuncio;