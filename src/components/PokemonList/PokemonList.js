import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import './pokemonlist.css';

function PokemonList (props) {
    
    return (
        <div className="pokemonlist">
    {
    props.pokemons.map(
        pokemon => <Pokemon key={pokemon.name} pokemon={pokemon} />
        )
    }
  </div>
    )
}

export default PokemonList;