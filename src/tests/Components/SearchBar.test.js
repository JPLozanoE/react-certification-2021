/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/Home/SearchBar';

let component;

beforeEach(() => {
  component = render(<SearchBar />);
});

describe('SearchBar', () => {
  test('Should render properly', () => {
    component = render(<SearchBar />);
    expect(component).toMatchSnapshot();
  });

  test('Should contain a search button', () => {
    const buttonElement = screen.getByRole('button', { name: 'buscar' });
    expect(buttonElement).toBeInTheDocument();
  });
});
