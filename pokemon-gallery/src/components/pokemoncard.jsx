import React from "react";
import "./card.css";

function PokemonCard({ name, image, abilities }) {
  return (
    <div className="pokemon-card">
      <h3> {name} </h3>
      <img src={image} alt={name} />
      <p> Abilities: {abilities.join(", ")}</p>
    </div>
  );
}

export default PokemonCard;


