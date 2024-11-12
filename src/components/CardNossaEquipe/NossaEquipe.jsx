import React from 'react';
import './NossaEquipe.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NossaEquipe = ({ nome, cargo, cargo2, linkedin, github, corNome, corCargo, corCargo2, corDeFundo, corDaBorda, imagem }) => {
    return (
        <div className='container'>
            <div className="card-time" style={{ background: corDeFundo, borderColor: corDaBorda }}>
                <div className="circle" style={{ borderColor: corDaBorda }}>
                    <img src={imagem} alt={`Foto de ${nome}`} />
                </div>
                <h2 style={{ color: corNome }}>{nome}</h2>
                <h3 style={{ color: corCargo }}>{cargo}</h3>
                <p className='cargo2' style={{ color: corCargo2 }}>{cargo2}</p>
                <div className="social-media">
                    <div className="social-item linkedin">
                        <FaLinkedin className="icon" />
                        <p>{linkedin}</p>
                    </div>
                    <div className="social-item github">
                        <FaGithub className="icon" />
                        <p>{github}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NossaEquipe;
