/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Theme from '../../components/Layout/Theme';
import { demoState, singleVideo } from '../fixtures/demoState';
import { AppContext } from '../../state/AppContext';
import { AuthRouter } from '../../routers/AuthRouter';

describe('Auth Router', () => {
  let wrapper;

  test('Should render properly when in /auth/register', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/auth/register');
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <AuthRouter />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getByRole('heading', { name: 'Register' })).toBeInTheDocument();
  });

  test('Should render properly when in /auth/login', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/auth/login');
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <AuthRouter />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  });
});
