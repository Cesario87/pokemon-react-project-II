import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ pokemon }) => {
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
    <div data-testid="cardRenders" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img data-testid="Card__img" src={sprites} alt={name} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <p>ID: {id}</p>
            <Link to={`/pokemon/${id}?data=${encodedPokemonData}`}>
              <h2 data-testid="Card__title">{capitalizedFirstLetterName}</h2>
            </Link>
            {type1 && <p>Type 1: {type1}</p>}
            <p>Type 2: {type2 ? type2 : "none"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;


