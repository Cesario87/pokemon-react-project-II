import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  const { name, id, types, sprites } = pokemon;

  const capitalizedFirstLetterName =
    name.charAt(0).toUpperCase() + name.slice(1);

  const type1 = types.find((type) => type.slot === 1)?.type.name;
  const type2 = types.find((type) => type.slot === 2)?.type.name;

  const pokemonData = {
    name,
    id,
    image: sprites,
    typeOne: type1,
    typeTwo: type2
  };

  const encodedPokemonData = encodeURIComponent(JSON.stringify(pokemonData));

  return (
    <div data-testid="cardRenders">
      <p>ID: {id}</p>
      <Link to={`/pokemon/${id}?data=${encodedPokemonData}`}>
        <h2 data-testid="Card__title">{capitalizedFirstLetterName}</h2>
      </Link>
      <img data-testid="Card__img" src={sprites} alt={name} />
      {type1 && <p>Type 1: {type1}</p>}
      <p>Type 2: {type2 ? type2 : "none"}</p>
    </div>
  );
};

export default Card;


