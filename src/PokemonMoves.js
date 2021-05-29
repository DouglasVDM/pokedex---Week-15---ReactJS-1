import React, {useEffect, useState} from "react";

function PokemonMoves() {

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(()=>{},[])

  useEffect(() => {

    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then(response => response.json())
      .then(
        data => {
          console.log("before:", data);
          setPokemonData(data);
          console.log("After:", data);
        })
      
  }, [])
    
    if (pokemonData) {
      return (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return null;
    }  
}

export default PokemonMoves;

























/*
 const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(
        result => {
          setIsLoaded(true);
          setBookings(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults bookings={bookings} />
        </div>
      </div>
    );
  }
};
*/