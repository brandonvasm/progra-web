import React, { useEffect, useState } from 'react';
import PokemonCard from './components/pokemoncard';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const data = await res.json();
      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: details.name,
            image: details.sprites.front_default,
            weight: details.weight,
            height: details.height,
            types: details.types.map(t => t.type.name),
            abilities: details.abilities.map(a => a.ability.name)
          };
        })
      );
      setPokemons(pokemonData);
    }
    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon Gallery</h1>
      <div className="grid-container">
        {pokemons.map(p => (
          <PokemonCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;
