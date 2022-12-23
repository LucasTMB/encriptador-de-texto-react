// CSS
import './ExitNone.css';
// IMG
import MeninoComLupa from '../assets/menino-lupa.png';

export const ExitNone = () => {
  return (
    <div className='conteudo-resultado-vazio'>
        <img src={MeninoComLupa} alt="Menino com uma lupa" />
        <h2>
            Nenhuma mensagem encontrada
        </h2>
        <p>
            Digite um texto que você deseja criptografar ou descriptografar.
        </p>
    </div>
  )
}
