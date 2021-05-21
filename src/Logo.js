import React from 'react'

const logWhenClicked = () => (
  console.log("You clicked the logo")
)


//  Traditional Function declaration.
const Logo = (props) => {
  console.log("Logo:", props)
  return (
    <header>
      <h1>Welcome to {props.appName} Pokedex</h1>
      <img onClick={logWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="" />
    </header>
  )
}

export default Logo
