import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cards from './Card';

test('Card renders', () => {
  const pokemonData = { id: "132", name: "ditto", sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png', types: [{ type: { name: "normal" } }, { type: { name: "none" } }] };
  render(<Router>
    <Cards pokemon={pokemonData} />
  </Router>
  );
  const cardElement = screen.getByTestId('cardRenders');
  expect(cardElement).toBeVisible();
});

test('Title exists', () => {
  const pokemonData = { id: "132", name: "ditto", sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png', types: [{ type: { name: "normal" } }, { type: { name: "none" } }] };
  render(<Router>
    <Cards pokemon={pokemonData} />
  </Router>
  );
  const titleElement = screen.getByTestId('Card__title');
  expect(titleElement).toBeInTheDocument();
  const imgElement = screen.getByTestId('Card__img');
  expect(imgElement).toBeInTheDocument();
});

test('Card renders the name from props in the title', () => {
  const pokemonData = { id: "132", name: "Ditto", sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png', types: [{ type: { name: "normal" } }, { type: { name: "none" } }] };
  render(<Router>
    <Cards pokemon={pokemonData} />
  </Router>
  );
  const titleElement = screen.getByTestId('Card__title');
  expect(titleElement).toHaveTextContent(pokemonData.name);
});

test('Card renders the sprite image from props', () => {
  const pokemonData = { id: "132", name: "ditto", sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png', types: [{ type: { name: "normal" } }, { type: { name: "none" } }] };
  render(<Router>
    <Cards pokemon={pokemonData} />
  </Router>
  );
  const imgElement = screen.getByTestId('Card__img');
  expect(imgElement).toHaveAttribute('src', pokemonData.sprites);
});