import React, { useState }from 'react'

function CaughtPokemon(props) {
  
  const initialState = [];
  const [caught, setCaught] = useState(initialState)
  
  const catchPokemon = () => setCaught(caught.concat(12345))

  return (
    <div>
      <p>Caught {caught.length} Pokemon on</p>
      <ul>
        {
          caught.map((pokemon,index) => {
            console.log(pokemon)
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
