// FOOTER JSX

import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import logoBranca from '../../assets/images/logoBranca.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logoBranca} alt="Logo" className="footer-logo-image" />
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-section">
            <h3><a href="/home">Home</a></h3>
            <ul>
              <li><a href="/planos">Planos</a></li>
              <li><a href="/funcionalidades">Funcionalidades</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="/sobre-nos">Sobre Nós</a></h3>
            <ul>
              <li><a href="/time">Time de desenvolvimento</a></li>
              <li><a href="/por-que-neuron">Por que "Neuron"?</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="/intercambio">Intercâmbio</a></h3>
            <ul>
              <li><a href="/como-funciona">Como funciona</a></li>
              <li><a href="/historias">Histórias inspiradoras</a></li>
              <li><a href="/oportunidades">Oportunidades</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3><a href="/login">Login</a></h3>
            <ul>
              <li><a href="/criar-conta">Crie a sua conta</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&#169; {new Date().getFullYear()} | Neuron | Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Footer;