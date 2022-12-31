// CSS
import './Encriptador.css';
// React imports
import { useState } from 'react';
// components
import { ExitNone } from './ExitNone';
import ExitOK from './ExitOK';

const stages = [
    {id: 1, name: 'resultadoVazio'},
    {id: 2, name: 'resultadoOK'},
]

const Encriptador = () => {

    const [exitStage, setExitStage] = useState(stages[0].name);
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [copyText, setCopyText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const botaoCriptografar = () => {
        const textoEncriptado = criptografar(inputText);
        setOutputText(textoEncriptado);
        setCopyText(textoEncriptado);
        setExitStage(stages[1].name);
    }

    const botaoDescriptografar = () => {
        const textoDescriptado = descriptografar(inputText);
        setOutputText(textoDescriptado);
        setCopyText(textoDescriptado);
        setExitStage(stages[1].name);
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
                    outputText={outputText}
                    copyText={copyText}
                />}
            </div>
        </div>
    </div>
  )
}

export default Encriptador