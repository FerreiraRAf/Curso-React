import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Maria";


  return (
    <div className="App">
      <SayMyName nome="Rafael" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rafael" idade="20" profissao="Programador" foto="https://via.placeholder.com/150" />

    </div>
  );
}

export default App;
