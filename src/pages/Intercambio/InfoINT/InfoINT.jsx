import React from "react";
import "./InfoINT.css";
import aviaomundo from '../../../assets/images/aviaomundo.png'
function InfoINT() {
  return (
    <div className="info-container">
      <h2 className="info-title">Oportunidades de Intercâmbio estudantis</h2>
      <p className="info-description">
        Nosso site oferece preparo para intercambistas estudantis na Espanha e recomenda
        conteúdos personalizados para aumentar suas chances de sucesso. Explore e prepare-se
        para uma experiência única e enriquecedora!
      </p>

      <img src={aviaomundo} alt="Avião e globo" className="info-image" />

      <h3 className="info-subtitle">Descubra Oportunidades</h3>
      <div className="info-circles">
        <div className="info-circle">Universidade</div>
        <div className="info-circle">Mochilão</div>
        <div className="info-circle">Aprendizado de idiomas</div>
        <div className="info-circle">Cultura</div>
      </div>

      <p className="info-footer">
        Conheça essa e outras oportunidades de intercâmbio acessando nossa plataforma
      </p>
      
      <button className="access-button">Acesse já</button>
    </div>
  );
}

export default InfoINT;
