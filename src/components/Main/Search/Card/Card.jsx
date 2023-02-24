import React from "react";

const Card = ({ pokemon }) => {
  const { name, id, types, sprites } = pokemon;

  const capitalizedFirstLetterName = name.charAt(0).toUpperCase() + name.slice(1);

  const type1 = types.find((type) => type.slot === 1)?.type.name;
  const type2 = types.find((type) => type.slot === 2)?.type.name;

  return (
    <div data-testid="cardRenders">
      <p>ID: {id}</p>
      <h2 data-testid="Card__title">{capitalizedFirstLetterName}</h2>
      <img data-testid="Card__img" src={sprites.front_default} alt={name} />
      {type1 && <p>Type 1: {type1}</p>}
      <p>Type 2: {type2 ? type2 : "none"}</p>
    </div>
  );
};

export default Card;


