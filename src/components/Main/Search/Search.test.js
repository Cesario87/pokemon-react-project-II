import React from 'react';
import { render, screen } from '@testing-library/react';
import { listContext } from '../../../context/listContext';
import Search from './Search';

test('renders Catch a pokemon!!', () => {
  const mockContextValue = { pokemonList: [], setPokemonList: jest.fn() };

  render(
    <listContext.Provider value={mockContextValue}>
      <Search />
    </listContext.Provider>
  );

  const linkElement = screen.queryByText('Catch a pokemon!!');
  expect(linkElement).toBeVisible();
});

test('Search renders', () => {
  const mockContextValue = { pokemonList: [], setPokemonList: jest.fn() };

  render(
    <listContext.Provider value={mockContextValue}>
      <Search />
    </listContext.Provider>
  );
  const searchElement = screen.getByTestId('searchRenders');
  expect(searchElement).toBeVisible();
});

// test('renders button with className "App_btn"', () => {
//   const mockContextValue = { pokemonList: [], setPokemonList: jest.fn() };
//   render(
//     <listContext.Provider value={mockContextValue}>
//       <Search />
//     </listContext.Provider>
//   );
//   const buttonElement = screen.getByRole('button', { className: 'App_btn' });
//   expect(buttonElement).toBeInTheDocument();
//   expect(buttonElement).toHaveTextContent('Search');
// });

test('input element with testId "inputText" has placeholder "Name goes here..."', () => {
  const mockContextValue = { pokemonList: [], setPokemonList: jest.fn() };
  render(
    <listContext.Provider value={mockContextValue}>
      <Search />
    </listContext.Provider>
  );
  const inputElement = screen.getByTestId('inputText');
  expect(inputElement).toHaveAttribute('placeholder', 'Name goes here...');
});