import React from 'react'
import './Contato.css'

function Contato() {
    return (
        <div className='contato'>
            <h2>ENTRE EM CONTATO CONOSCO</h2>
            <div className='contato-form-container'>
                <form>
                    <div className='contato-nome'>
                        <input type="text" placeholder='Nome completo' />
                    </div>
                    <div className='contato-email'>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='contato-mensagem'>
                        <textarea placeholder='Mensagem'></textarea>
                    </div>
                    <div className='contato-botao'>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato;
