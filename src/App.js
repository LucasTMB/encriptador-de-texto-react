// CSS
import './App.css';
// IMG
import AluraLogo from './assets/alura-logo.png';
// components
import Encriptador from './components/Encriptador';

function App() {

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      
      <header className='cabecalho'>
        <h1 className="logo-alura">
          <button 
            className='logo-btn'
            onClick={reload}
          >
            <img src={AluraLogo} alt="Logo da Alura" />
          </button>
        </h1>
      </header>

      <Encriptador />
      
    </div>
  );
}

export default App;