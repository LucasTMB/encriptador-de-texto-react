// CSS
import './ExitOK.css';

const ExitOK = ({handleSubmit, outputText, botaoCriptografar, botaoDescriptografar}) => {
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
          className='copy-btn'>
            Copiar texto
        </button>
      </form>
    </div>
  )
}

export default ExitOK