import React from 'react'


//  Arrow function.
const BestPokemon = (props) => {
  // console.log("BestPokemon:", props);
  return (
    <div>    
      <p>My favourite Pokemon is Pickachoo!</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>          
        ))}    
      </ul>
   </div>

 )
}

export default BestPokemon
