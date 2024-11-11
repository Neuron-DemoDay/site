import React from 'react';
import './HeaderINT.css';
import backgroundd from '../../../assets/images/backgroundd.png';
import airint from '../../../assets/images/airplaneint.png';
import clouds from '../../../assets/images/clouds.png';

const HeaderINT = () => {
  return (
    <div className="header-int">
      <div className="clouds" />
      <div className="background" />
      <div className="content">
        <h1>Descubra Oportunidades de Intercâmbio Global</h1>
        <p>
          Descubra a Neuron e realize seu sonho de intercâmbio! Com suporte na criação de
          cartas e acesso a bolsas de estudo personalizadas, você estará pronto para uma
          experiência internacional enriquecedora.
        </p>
        <button className="saiba-mais">Saiba mais</button>
      </div>
      <img src={airint} alt="Avião" className="airplanee-icon" />
    </div>
  );
};

export default HeaderINT;
