// CSS
import './App.css';

// IMG
import AluraLogo from './assets/alura-logo.png';
import MeninoComLupa from './assets/menino-lupa.png';
import ExclamationCircle from './assets/exclamation-circle.png';

// components
import Encriptador from './components/Encriptador';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="logo-alura">
          <img src={AluraLogo} alt="Logo da Alura" />
        </h1>
      </header>

      <Encriptador />
      
    </div>
  );
}

export default App;
