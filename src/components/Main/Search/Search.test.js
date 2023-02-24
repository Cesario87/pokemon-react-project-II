import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders learn react link', () => {
  render(<Search />);
  const linkElement = screen.queryByText('Look for a pokemon!!');
  expect(linkElement).toBeVisible();
});

test('Search renders', () => {
  render(<Search />);
  const searchElement = screen.getByTestId('searchRenders');
  expect(searchElement).toBeVisible();
});

test('renders button with className "App_btn"', () => {
  render(<Search />);
  const buttonElement = screen.getByRole('button', { className: 'App_btn' });
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('Search');
});

test('input element with testId "inputText" has placeholder "Your pokemon name here"', () => {
  render(<Search />);
  const inputElement = screen.getByTestId('inputText');
  expect(inputElement).toHaveAttribute('placeholder', 'Your pokemon name here');
});