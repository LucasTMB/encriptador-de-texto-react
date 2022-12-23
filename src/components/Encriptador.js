// CSS
import './Encriptador.css';

// IMG
import MeninoComLupa from '../assets/menino-lupa.png';
import ExclamationCircle from '../assets/exclamation-circle.png';

const Encriptador = () => {
  return (
    <div className="container">
        <form className="entrada">
            <textarea 
                name="text-input" 
                cols="30" 
                rows="13" 
                placeholder="Digite seu texto..."
            ></textarea>
            <p>
                ⓘ Apenas letras minúsculas e sem acento.
            </p>
            <div className="botoes">
                <button className="cripto-btn">
                    Criptografar
                </button>
                <button className="descripto-btn">
                    Descriptografar
                </button>
            </div>
        </form>
    </div>
  )
}

export default Encriptador