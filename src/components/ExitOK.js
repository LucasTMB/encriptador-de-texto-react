// CSS
import './ExitOK.css';
// React imports
import copy from "copy-to-clipboard";

const ExitOK = ({handleSubmit, outputText, copyText}) => {

  const botaoCopiar = () => {
      copy(copyText);
      alert(`Você copiou "${copyText}"`)
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