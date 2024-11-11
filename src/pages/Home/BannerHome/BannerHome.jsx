import React from 'react';
import './BannerHome.css';
import juninbanner from '../../../assets/images/juninhomebanner.png';
import meiabolaazul from '../../../assets/images/meialuaazulhome.png'

function BannerHome() {
  return (
    <section className="banner-home">
      <div className='bolaazul'><img src={meiabolaazul} alt="" /></div>
      <h2 className="banner-title">Como o Ensino Médio Pode Transformar Sua Vida</h2>
      <div className="banner-content">
        <p className="banner-description">
          O ensino médio é uma etapa crucial para alcançar oportunidades internacionais e realizar sonhos. 
          Descubra como a experiência de intercâmbio, possibilitada por um sólido ensino médio, pode mudar sua vida.
        </p>
        <img src={juninbanner} alt="Estudante com mochila e livros" className="banner-image" />
      </div>
    </section>
  
  );
}

export default BannerHome;
