import React from 'react'

function CaughtPokemon(props) {
  console.log("CaughtPokemon:", props);

  return (
    <p>Caught 0 Pokemon on</p>,
    <p>Today's date in Cape Town is: {props.date}</p>
    
  )
}

export default CaughtPokemon
