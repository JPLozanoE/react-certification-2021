/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import { demoState } from '../../fixtures/demoState';
import { SearchBar } from '../../../components/Home/SearchBar';

// describe('SearchBar', () => {
//   test('Should render properly', () => {
//     component = render(<SearchBar />);
//     expect(component).toMatchSnapshot();
//   });

//   test('Should contain a search button', () => {
//     const buttonElement = screen.getByRole('button', { name: 'buscar' });
//     expect(buttonElement).toBeInTheDocument();
//   });
// });

/* eslint-disable react/jsx-filename-extension */

describe('SearchBar', () => {
  const providerValues = {
    state: { ...demoState },
    dispatch: jest.fn(),
  };
  const wrapper = render(
    <AppContext.Provider value={providerValues}>
      <Router>
        <SearchBar />
      </Router>
    </AppContext.Provider>
  );

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should contain a search button', () => {
    const buttonElement = screen.getByText('search');
    expect(buttonElement).toBeInTheDocument();
  });
});
