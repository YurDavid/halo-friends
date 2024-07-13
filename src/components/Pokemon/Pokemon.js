import React, { useState, useEffect } from "react";
import './pokemon.css';

function Pokemon({ pokemon }) {
  const [spriteUrl, setSpriteUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const resp = await fetch(pokemon.url);
        const data = await resp.json();
        setSpriteUrl(data.sprites.other.showdown.front_default);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemonData();
  }, [pokemon.url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="pokemon">
      <img src={spriteUrl} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
    </div>
  );
}

export default Pokemon;
