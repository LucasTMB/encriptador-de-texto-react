// CSS
import './ExitOK.css';
// React imports
import { useState } from 'react';
import copy from "copy-to-clipboard";

const ExitOK = ({handleSubmit, outputText}) => {

  const [copyText, setCopyText] = useState('');

  const botaoCopiar = () => {
      //let textoCopiado = copiar(outputText);
      setCopyText(outputText);
      copy(copyText);
      alert(`Você copiou "${copyText}"`)

      // Função com falha. Por algum motivo é necessário clicar duas vezes no botão de copiar para atualizar o copyText.
  }

  return (
    <div className='conteudo-resultado-ok'>
      <form 
        onSubmit={handleSubmit}
      >
        <textarea 
          name="text-output" 
          cols="20" 
          rows="10"
          value={outputText}
        ></textarea>
        <button 
          className='copy-btn'
          onClick={botaoCopiar}
        >
            Copiar texto
        </button>
      </form>
    </div>
  )
}

export default ExitOK