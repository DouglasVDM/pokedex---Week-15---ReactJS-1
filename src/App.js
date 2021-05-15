import './App.css';
import CaughtPokemon from './CaughtPokemon';
import HelloWorld from "./HelloWorld";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";

function App() {
  return (
    <div >
      <Logo appName="Pokedex"/>
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon date={new Date().toLocaleDateString()}/>
      <HelloWorld />
    </div>
  );
}

export default App;