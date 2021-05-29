import React, { useState } from "react";

function PokemonCity() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    console.log("event:", event.target.value);
    setCity(event.target.value);

  }

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={updateCity}
        placeholder="Update city here..."
      />
      <p>Welcome to the city of {city}</p>
    </div>
  );
}

export default PokemonCity;
