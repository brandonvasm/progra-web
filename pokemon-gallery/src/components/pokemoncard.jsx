import React from "react";
import './App.css';


function PokemonCard({ name, image, weight, height, types, abilities }) {
  return (
    <div className="pokemon-card">
      <h3> {name} </h3>
      <img src={image} alt={name} />
      <p> Weight: {weight} kg</p>
      <p> Height: {height} m</p>
      <p> Type: {types.join(", ")}</p>
      <p> Abilities: {abilities.join(", ")}</p>
    </div>
  );
}

export default PokemonCard;


