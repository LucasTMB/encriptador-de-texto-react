// CSS
import './App.css';
// IMG
import AluraLogo from './assets/alura-logo.png';
// components
import Encriptador from './components/Encriptador';
// React imports
import { useState } from 'react';

const stages = [
  {id: 1, name: 'resultadoVazio'},
  {id: 2, name: 'resultadoOK'},
]

function App() {

  const [exitStage, setExitStage] = useState(stages[0].name);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  return (
    <div className="App">
      
      <header className='cabecalho'>
        <h1 className="logo-alura">
          <button className='logo-btn'>
            <img src={AluraLogo} alt="Logo da Alura" />
          </button>
        </h1>
      </header>

      <Encriptador 
        stages={stages}
        exitStage={exitStage}
        setExitStage={setExitStage}
        inputText={inputText}
        setInputText={setInputText}
        outputText={outputText}
        setOutputText={setOutputText}
      />
      
    </div>
  );
}

export default App;