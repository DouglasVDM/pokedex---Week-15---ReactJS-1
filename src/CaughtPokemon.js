import React, { useState }from 'react'

function CaughtPokemon(props) {
  
  const initialState = [];
  const [caught, setCaught] = useState(initialState)

  let listOfPokemons = ["Pikachu", "Charizard", "Landorus", "Eevee", "Snorlax", "MewTwo", "Charmander", "Ditto", "Squirtle", "Lucario", "Gardevior", "Gengar", "Bulbasaur"];

  const randomPokemon = listOfPokemons[Math.floor(Math.random() * listOfPokemons.length)];
  
  const catchPokemon = () => setCaught(caught.concat(randomPokemon))

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
      <button onClick={catchPokemon}>Add Pokemon</button>
    </div>    
  )
}

export default CaughtPokemon
