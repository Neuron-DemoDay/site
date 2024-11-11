import React from 'react';
import './Article.css';
import coralcirculo from '../../../assets/images/meialuacoralhome.png'

function Article() {
  return (
    <article className="article">
      <div className='meialuacoral'><img src={coralcirculo} alt="" /></div>
      <h2 className="article-title">O Futuro da Educação Está Aqui</h2>
      <p className="article-description">
        Na Neuron, facilitamos o acesso à educação e oportunidades de intercâmbio, por meio da sugestão de bolsas de intercâmbio e informações de como utilizar suas notas da maneira mais proveitosa. Com IA personalizada e gamificação, oferecemos um ambiente de estudo dinâmico e colaborativo. Confira um tour pela nossa plataforma no vídeo abaixo.
      </p>
      <div className="video-placeholder">
        <div className="play-icon">▶</div>
      </div>
    </article>
  );
}

export default Article; 