import React, { useContext } from 'react';
import { listContext } from '../../../context/listContext';
import Card from '../Search/Card';

const Home = () => {
  const { pokemonList } = useContext(listContext);

  return (
    <div>
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Home;

