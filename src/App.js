import CaughtPokemon from './CaughtPokemon';
import HelloWorld from "./HelloWorld";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";

const logWhenClicked = () => (
  console.log("You clicked the logo")
)

function App() {
  return (
    <div >
      <Logo handleClick={logWhenClicked} appName="Pokedex"/>
      <BestPokemon abilities={['Anticipation', 'Adaptability', 'Run-Away']}/>
      <CaughtPokemon date={new Date().toLocaleDateString()}/>
      <HelloWorld />
    </div>
  );
}

export default App;