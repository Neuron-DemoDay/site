import React from 'react';
import './Header.css';
import bolaaviao from '../../../assets/images/fotoaviaobolaroxa.png';
import livros from '../../../assets/images/livros.png';

function Header() {
  return (
    <header className="header">
      <div className='aviaobola'>
        <img src={bolaaviao} alt="Avião" />
      </div>
      <div className="header-content">
        <h1 className="header-title">
          Transforme Sua Educação com Tecnologia Avançada e Oportunidades Globais
        </h1>
        <p className="header-subtitle">
          Acesse uma plataforma de aprendizado personalizada e prepare-se para um futuro brilhante.
        </p>
        <div className="header-buttons">
          <button className="header-button cadastre-se">Cadastre-se</button>
          <button className="header-button saiba-mais">Saiba mais</button>
        </div>
      </div>
      <div className='livroshome'>
        <img src={livros} alt="Livros" />
      </div>
    </header>
  );
}

export default Header;
