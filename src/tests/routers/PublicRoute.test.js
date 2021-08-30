/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Theme from '../../components/Layout/Theme';
import { demoState, singleVideo } from '../fixtures/demoState';
import { AppContext } from '../../state/AppContext';
import { PublicRoute } from '../../routers/PublicRoute';
import { AuthRouter } from '../../routers/AuthRouter';

describe('PublicRoute', () => {
  let wrapper;

  test('Should render properly', () => {
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
            <PublicRoute path="/auth" component={AuthRouter} isAuth={false} />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  });

  test("Should't render properly", () => {
    const providerValues = {
      state: { ...demoState, auth: { isLogged: true } },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/auth/login');
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <PublicRoute path="/auth" component={AuthRouter} isAuth />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper.queryByRole('heading', { name: 'Login' })).not.toBeInTheDocument();
  });
});
