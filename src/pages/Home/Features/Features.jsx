// Features/Features.jsx
import React from 'react';
import './Features.css';
import FeatureItem from './FeatureItem';
import robozin from '../../../assets/GIFs/robozinhome.gif';
import maozin from '../../../assets/GIFs/maozinhahome.gif';
import caneta from '../../../assets/GIFs/canetahome.gif';
import grafico from '../../../assets/GIFs/graficohome.gif';
import pc from '../../../assets/GIFs/pchome.gif';
import airplane from '../../../assets/GIFs/aviaohome.gif';

function Features() {
  return (
    <section className="features">
      <h2 className="features-title">Funcionalidades que Transformam o Aprendizado</h2>
      <div className="features-grid">
        <FeatureItem
          title="Auxílio da inteligência artificial Neuron nos seus estudos"
          gifUrl= {robozin}
          bgColor="#CE73E2"
        />
        <FeatureItem
          title="Aprendizagem com games e realidade aumentada"
          gifUrl={maozin}
          bgColor="#7EC8DE"
        />
        <FeatureItem
          title="Auxílio na criação de Cover Letters"
          gifUrl={caneta}
          bgColor="#CE73E2"
        />
        <FeatureItem
          title="Gráficos de desempenho"
          gifUrl={grafico}
          bgColor="#7EC8DE"
        />
        <FeatureItem
          title="Monetização de conteúdo para profissionais da educação"
          gifUrl={pc}
          bgColor="#CE73E2"
        />
        <FeatureItem
          title="Sugestões de Intercâmbios Acessíveis"
          gifUrl={airplane}
          bgColor="#7EC8DE"
        />
      </div>
    </section>
  );
}

export default Features;