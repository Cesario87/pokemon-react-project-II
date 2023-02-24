import React, { useState, useEffect, useRef, useContext } from "react";
import Card from "./Card";
import { listContext } from '../../../context/listContext';

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonList, setPokemonList } = useContext(listContext);

  const debounceTimeoutRef = useRef(null);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to make the fetch request
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}?fields=id,name,sprites,types`);
        const { id, name, sprites, types } = await response.json();

        // Check if the new Pokemon is already present in pokemonList
        const pokemonAlreadyInList = pokemonList.find(pokemon => pokemon.id === id);
        if (!pokemonAlreadyInList) {
          // Add the new Pokemon to the list if it's not already present
          setPokemonList((prevPokemonList) => [...prevPokemonList, { id, name, sprites, types }]);
          setPokemonData(null);
        } else {
          setPokemonData({ id, name, sprites, types });
        }

      } catch (error) {
        console.error(error);
        setPokemonData(null);
      }
    }, 1500);
  };

  useEffect(() => {
    setInputValue("");
  }, [pokemonList]);

  return (
    <div data-testid="searchRenders">
      <h3>Look for a pokemon!!</h3>
      <input type="text" data-testid="inputText" placeholder="Your pokemon name here" value={inputValue} onChange={handleInputChange} />
      {pokemonData && <Card pokemon={pokemonData} />}
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Search;
