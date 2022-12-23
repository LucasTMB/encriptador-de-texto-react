// CSS
import './Encriptador.css';
// React imports
import { useState } from 'react';
import { ExitNone } from './ExitNone';
import ExitOK from './ExitOK';

const stages = [
    {id: 1, name: 'resultadoVazio'},
    {id: 2, name: 'resultadoOK'},
]

const Encriptador = () => {

    const [exitStage, setExitStage] = useState(stages[0].name);
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const botaoCriptografar = () => {
        console.log(input);
    }

  return (
    <div className="main">
        <div className='container'>
            <form 
                className="entrada"
                onSubmit={handleSubmit} 
            >
                <textarea 
                    name="text-input" 
                    cols="30" 
                    rows="13" 
                    placeholder="Digite seu texto..."
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                ></textarea>
                <p>
                    ⓘ Apenas letras minúsculas e sem acento.
                </p>
                <div className="botoes">
                    <button 
                        className="cripto-btn"
                        onClick={botaoCriptografar}>
                        Criptografar
                    </button>
                    <button className="descripto-btn">
                        Descriptografar
                    </button>
                </div>
            </form>

            <div className='saida'>
                {exitStage === 'resultadoVazio' && <ExitNone />}
                {exitStage === 'resultadoOK' && <ExitOK />}
            </div>
        </div>
    </div>
  )
}

export default Encriptador