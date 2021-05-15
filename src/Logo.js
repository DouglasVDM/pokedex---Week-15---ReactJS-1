import React from 'react'

//  Traditional Function declaration.
const Logo = (props) => {
  console.log("Logo:", props)
  return (
    <header>
      <h1>Welcome to {props.appName} Pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
  )
}

export default Logo
