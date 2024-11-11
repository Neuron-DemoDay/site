import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './PricePage.css';

const PricePage = () => {
  return (
    <div className="price-page">
      <div className="plan neuronal">
        <div className="plan-header">Plano Cognitivo</div>
        <div className="price">Gratuito</div>
        <ul>
          <li><FaCheck className="check-icon" /> Acesso ao conteúdo básico</li>
          <li><FaCheck className="check-icon" /> Plataforma lixo</li>
          <li><FaCheck className="check-icon" /> Conteúdos horríveis</li>
          <li><FaCheck className="check-icon" /> Jair Bolsonaro</li>
          <li><FaTimes className="cancel-icon" /> Suporte 24/7</li>
        </ul>
        <button className="plan-btn neuronal-btn">Assine</button> {/* Botão adicionado */}
      </div>

      <div className="plan quantico">
        <div className="plan-header">Plano Quântico</div>
        <div className="price">R$ 30,00</div>
        <ul>
          <li><FaCheck className="check-icon" /> Acesso a recursos premium</li>
          <li><FaCheck className="check-icon" /> Suporte 24/7</li>
        </ul>
        <button className="plan-btn quantico-btn">Assine</button> {/* Botão adicionado */}
      </div>

      <div className="plan cognitivo">
        <div className="plan-header">Plano Neurônio</div>
        <div className="price">R$ 270,00</div>
        <ul>
          <li><FaCheck className="check-icon" /> Acesso a recursos avançados</li>
          <li><FaCheck className="check-icon" /> Consultoria personalizada</li>
        </ul>
        <button className="plan-btn cognitivo-btn">Assine</button> {/* Botão adicionado */}
      </div>
    </div>
  );
};

export default PricePage;
