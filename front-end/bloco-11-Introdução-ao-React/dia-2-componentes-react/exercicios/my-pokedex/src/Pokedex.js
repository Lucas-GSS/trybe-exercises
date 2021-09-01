import React from  'react';
import Pokemon from './Pokemon';
import pokemons from './data';
import { nanoid } from 'nanoid';
class Pokedex extends React.Component {
  render() {
    return (
      <>
      {pokemons.map((pokemon) => <Pokemon key={nanoid()} poke={pokemon} />)}
      </>
    );
  }  
}

export default Pokedex;