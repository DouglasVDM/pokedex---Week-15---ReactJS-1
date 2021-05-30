import React, { useState }from 'react'

function CaughtPokemon(props) {

  const [pokemonNameInput, setPokemonNameInput] = useState("");
  
  const initialState = [];
  const [caught, setCaught] = useState(initialState);

  let listOfPokemons = ["Pikachu", "Charizard", "Landorus", "Eevee", "Snorlax", "MewTwo", "Charmander", "Ditto", "Squirtle", "Lucario", "Gardevior", "Gengar", "Bulbasaur"];

  const randomPokemon = listOfPokemons[Math.floor(Math.random() * listOfPokemons.length)];
  
  const catchPokemon = () => setCaught(caught.concat(pokemonNameInput), setPokemonNameInput(""));

  const handleInputChange = (event) => setPokemonNameInput(event.target.value)

  return (
    <div>
      <p>Caught {caught.length} Pokemon on</p>
      <ul>
        {
          caught.map((pokemon,index) => {
            return (
              <li key={index}>{pokemon}</li>
            )
          })
        }
      </ul>
      <p>Today's date in Cape Town is: {props.date}</p>
      <input
        type="text"
        placeholder="catch a pokemon..."
        value={pokemonNameInput}
        onChange={handleInputChange}
      />
      <button type="reset" onClick={catchPokemon}>Catch Pokemon</button>
    </div>    
  )
}

export default CaughtPokemon
