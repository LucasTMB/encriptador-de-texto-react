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

    const [exitStage, setExitStage] = useState(stages[1].name);
    const [inputText, setInputText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const botaoCriptografar = () => {
        console.log(inputText);
        const textoEncriptado = criptografar(inputText);
        console.log(textoEncriptado);
    }

    const botaoDescriptografar = () => {
        console.log(inputText);
        const textoDescriptado = descriptografar(inputText);
        console.log(textoDescriptado);
    }

    const criptografar = (inputText) => {
        const matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat'], ['aimes', 'ai']];

        let stringEncriptada = inputText;
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0 ; i < matrizCodigo.length ; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptada;
    }

    const descriptografar = (inputText) => {
        const matrizCodigo = [['a', 'ai'], ['e', 'enter'], ['i', 'imes'], ['o', 'ober'], ['u', 'ufat']];

        let stringDescriptada = inputText;
        stringDescriptada = stringDescriptada.toLowerCase();

        for (let i = 0 ; i < matrizCodigo.length ; i++) {
            if (stringDescriptada.includes(matrizCodigo[i][1])) {
                stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDescriptada;
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
                        setInputText(e.target.value)
                    }}
                ></textarea>
                <p>
                    ⓘ Apenas letras minúsculas e sem acento.
                </p>
                <div className="botoes">
                    <button 
                        className="cripto-btn"
                        onClick={botaoCriptografar}
                    >
                        Criptografar
                    </button>
                    <button
                        className="descripto-btn"
                        onClick={botaoDescriptografar}    
                    >
                        Descriptografar
                    </button>
                </div>
            </form>

            <div className='saida'>
                {exitStage === 'resultadoVazio' && <ExitNone />}
                {exitStage === 'resultadoOK' && <ExitOK 
                    handleSubmit={handleSubmit}
                />}
            </div>
        </div>
    </div>
  )
}

export default Encriptador