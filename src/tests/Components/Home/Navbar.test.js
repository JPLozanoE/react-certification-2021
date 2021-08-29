/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Navbar } from '../../../components/Home/Navbar';
import { AppContext } from '../../../state/AppContext';
import { demoState } from '../../fixtures/demoState';

describe('Navbar not being logged in', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Router>
          <Navbar />
        </Router>
      </AppContext.Provider>
    );
  });

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should contain a login link', () => {
    const TitleElement = wrapper.getByText('Login');
    expect(TitleElement).toBeInTheDocument();
  });
});

describe('Navbar being logged in', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState, auth: { isLogged: true } },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Router>
          <Navbar />
        </Router>
      </AppContext.Provider>
    );
  });

  test('Should contain a logout link', () => {
    const TitleElement = wrapper.getByText('Logout');
    expect(TitleElement).toBeInTheDocument();
  });
});
