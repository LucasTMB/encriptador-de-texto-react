// CSS
import './ExitOK.css';

const ExitOK = ({handleSubmit}) => {
  return (
    <div className='conteudo-resultado-ok'>
      <form 
        onSubmit={handleSubmit}
      >
        <textarea 
          name="text-output" 
          cols="20" 
          rows="10"
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