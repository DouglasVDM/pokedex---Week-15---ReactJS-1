import CaughtPokemon from './CaughtPokemon';
import HelloWorld from "./HelloWorld";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import PokemonMoves from './PokemonMoves';



function App() {
  const logWhenClicked = () => (
    console.log("You clicked the logo.")
  )
  return (
    <div >
      <Logo handleClick={logWhenClicked} appName="Pokedex"/>
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMoves />
      <HelloWorld />
    </div>
  );
}

export default App;