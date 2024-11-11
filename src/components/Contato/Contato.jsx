import React from 'react'
import './Contato.css'

function Contato() {
    return (
        <div className='contato'>
            <h2>ENTRE EM CONTATO CONOSCO</h2>
            <div className='form-container'>
                <form>
                    <div className='nome'>
                        <input type="text" placeholder='Nome completo' />
                    </div>
                    <div className='email'>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='mensagem'>
                        <textarea placeholder='Mensagem'></textarea>
                    </div>
                    <div className='campo botao'>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contato;
