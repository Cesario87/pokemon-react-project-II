import React, { useContext } from 'react';
import { listContext } from '../../../context/listContext';
import Cards from '../Search/Card';

const Home = () => {
  const { pokemonList } = useContext(listContext);

  return (
    <div>
      <h1>Caught pokemon will appear here:</h1>
      <div className="cardSpace">
      {pokemonList.map((pokemon) => (
        <Cards key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
    </div>
  );
};

export default Home;

