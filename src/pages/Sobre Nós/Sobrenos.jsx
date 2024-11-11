import React, { useState } from 'react';
import './SobreNos.css';

/* Importar icons  */
import { FaBullseye, FaEye, FaStar } from 'react-icons/fa';

/* Imagens gerais */
import bonecosImage from '../../assets/images/BonecosEquipe.png';
import NossaEquipe from '../../components/CardNossaEquipe/NossaEquipe';
import neuronzinho from '../../assets/images/avatarNeuron.png';

/* Importação de Componentes */
import Navbar from '../../components/Navbar/NavBar';
import Contato from '../../components/Contato/Contato';
import Footer from "../../components/Footer/Footer";

/* Imagens dos integrantes da Neuron */
import Vinicius from '../../assets/images/vinicius.jpeg';
import Stefany from '../../assets/images/stefany.jpeg';
import Campelo from '../../assets/images/guilhermeCampelo.jpeg';
import Jenifer from '../../assets/images/jenifer.jpeg';
import Macedo from '../../assets/images/guilherme.jpg';
import Caio from '../../assets/images/caioeduardo.jpeg';
import Gian from '../../assets/images/gianbueno.jpeg';
import Lucas from '../../assets/images/lucassantiago.jpg';

const SobreNos = () => {
    const [flipped, setFlipped] = useState([false, false, false]);

    const handleCardClick = (index) => {
        const newFlipped = [...flipped];
        newFlipped[index] = !newFlipped[index];
        setFlipped(newFlipped);
    };

    return (
        <div>
            <Navbar />
            <section className="sobre-nos">
                <h1>SOBRE NÓS</h1>
                <p className='sobre-nos-subtitulo'>
                    Bem-vindo à nossa plataforma inovadora, que visa democratizar o acesso à educação e intercâmbios internacionais para pessoas de baixa renda. Usamos IA, Realidade Aumentada (RA) e Gamificação para criar uma experiência educacional personalizada e enriquecedora.
                </p>
                <div className="sobre-nos-imagens">
                    <img src={bonecosImage} alt="Bonecos" className="bonecos-image" />
                </div>
                <section className="nossos-valores">
                    <h2 className="titulo-valores">O QUE NOS MOVE</h2>
                    <div className="cards-container">
                        {[
                            { title: 'MISSÃO', icon: <FaBullseye />, text: 'Transformar a educação global.', backText: 'Proporcionar oportunidades educacionais personalizadas e inclusivas, utilizando tecnologias avançadas para democratizar o aprendizado e atender às necessidades de todos.' },
                            { title: 'VISÃO', icon: <FaEye />, text: 'Ser a principal plataforma educacional do mundo.', backText: 'Ser uma plataforma reconhecida por democratizar o aprendizado e conectar estudantes a oportunidades internacionais, impactando positivamente o futuro de jovens em todo o mundo.' },
                            {
                                title: 'VALORES', icon: <FaStar />, text: 'Inclusão, Inovação e Colaboração.', backText: (
                                    <ul>
                                        <li>Inclusão</li>
                                        <li>Inovação</li>
                                        <li>Colaboração</li>
                                        <li>Aprendizado</li>
                                        <li>Comunicação aberta</li>
                                        <li>Impacto: Transformação de vidas e criação de oportunidades de crescimento.</li>
                                    </ul>
                                )
                            }
                        ].map((card, index) => (
                            <div
                                key={index}
                                className={`card ${flipped[index] ? 'flipped' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="card-inner">
                                    <div className="card-front">
                                        <h3>{card.title}</h3>
                                        <div className="icon-container">{card.icon}</div>
                                        <p>{card.text}</p>
                                    </div>
                                    <div className="card-back">
                                        <p>{card.backText}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="card-equipe">
                    <h2>CONHEÇA A NOSSA EQUIPE</h2>
                    <p>
                        Somos um grupo de estudantes de escolas públicas, unidos pelo desejo de tornar a educação acessível a todos. Compreendemos os desafios enfrentados por nossos colegas e, por isso, desenvolvemos este projeto inovador para oferecer oportunidades educacionais e de intercâmbio para estudantes de baixa renda. Nosso objetivo é criar um impacto positivo e ajudar outros jovens a alcançar seus sonhos acadêmicos e profissionais.
                    </p>
                </section>
                <div className='equipe-desenvolvimento'>
                    <h3>NOSSO TIME DE DESENVOLVIMENTO</h3>
                    <div className='equipe-container'>
                        <div className='time1'>
                            < NossaEquipe
                                nome="Vinicius Santana"
                                cargo="Desenvolvedor"
                                cargo2="Back-end"
                                linkedin={"viniciussantana007"}
                                github={"viniciusspereira007"}
                                corDeFundo={""}
                                imagem={Vinicius}
                            />
                            < NossaEquipe
                                nome="Stefany Gomes"
                                cargo="Desenvolvedora Front-end/"
                                cargo2="UI & UX Designer"
                                linkedin={"stefany-gomes"}
                                github={"marstefany"}
                                corDeFundo="rgba(180, 15, 231, 0.29)"
                                corDaBorda="#B40FE7"
                                corNome={"#B40FE7"}
                                corCargo={"#590E70"}
                                corCargo2={"#590E70"}
                                imagem={Stefany}
                            />
                            < NossaEquipe
                                nome="Guilherme Campelo"
                                cargo="Desenvolvedor"
                                cargo2="Scrum Master/IA"
                                linkedin={"guilherme-campelo"}
                                github={"campelo3110"}
                                corDeFundo="rgba(254, 95, 85, 0.29)"
                                corDaBorda={"#FE5F55"}
                                corNome={"#FE5F55"}
                                corCargo={"#CB534C"}
                                corCargo2={"#CB534C"}
                                imagem={Campelo}
                            />
                            < NossaEquipe
                                nome="Jenifer Carvalho"
                                cargo="Desenvolvedora"
                                cargo2="Full-Stack/Financeiro"
                                linkedin={"jenifercarvalhomarques"}
                                github={"jenifercmarques"}
                                corDeFundo={""}
                                imagem={Jenifer}
                            />
                        </div>
                        <div className='time2'>
                            < NossaEquipe
                                nome="Guilherme Macedo"
                                cargo="Desenvolvedor Front-end/"
                                cargo2="UI & UX Designer"
                                linkedin={"guilhermemagalhães28"}
                                github={"gui-macedo-7"}
                                corDeFundo="rgba(254, 95, 85, 0.29)"
                                corDaBorda="#FE5F55"
                                corNome={"#FE5F55"}
                                corCargo={"#CB534C"}
                                corCargo2={"#CB534C"}
                                imagem={Macedo}
                            />
                            < NossaEquipe
                                nome="Caio Eduardo"
                                cargo="Desenvolvedor"
                                cargo2="Full-Stack"
                                linkedin={"caioeduardodesouza"}
                                github={"caiodusouza"}
                                corDeFundo={""}
                                imagem={Caio}
                            />
                            < NossaEquipe
                                nome="Gian Bueno"
                                cargo="Desenvolvedor"
                                cargo2="Back-end"
                                linkedin={"gian-luiggi-bueno"}
                                github={"gianlb"}
                                corDeFundo="rgba(180, 15, 231, 0.29)"
                                corDaBorda="#B40FE7"
                                corNome={"#B40FE7"}
                                corCargo={"#590E70"}
                                corCargo2={"#590E70"}
                                imagem={Gian}
                            />
                            < NossaEquipe
                                nome="Lucas Santiago"
                                cargo="P.O/Desenvolvedor"
                                cargo2="Back-end"
                                linkedin={"lucas-santiago-de-oliveira"}
                                github={"lucassantiago0"}
                                corDeFundo={""}
                                imagem={Lucas}
                            />
                        </div>
                    </div>
                </div>
                <div className="card-neuron">
                    <div>
                        <h2>Porque "Neuron" ?</h2>
                        <p>
                            O nome "Neuron" simboliza aprendizado e inteligência, refletindo conexões dinâmicas e inovação, e nosso desejo de inspirar um aprendizado significativo.
                        </p>
                    </div>
                    <img src={neuronzinho} alt="Imagem representativa de Neuron" />
                </div>
                <div>
                    <Contato />
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </div>
    );
};

export default SobreNos;
