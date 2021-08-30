/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Theme from '../../components/Layout/Theme';
import { demoState } from '../fixtures/demoState';
import { AppContext } from '../../state/AppContext';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { FavoritesPage } from '../../pages/Favorites/Favorites.page';

describe('PrivateRoute', () => {
  let wrapper;

  test('Should render properly ', () => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/favorites');
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <PrivateRoute exact path="/favorites" component={FavoritesPage} isAuth />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getByText('Videos favoritos')).toBeInTheDocument();
  });

  test("Shouldn't render if not logged in ", () => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/favorites');
    const anotherWrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <PrivateRoute
              exact
              path="/favorites"
              component={FavoritesPage}
              isAuth={false}
            />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(anotherWrapper.queryByText('Videos favoritos')).not.toBeInTheDocument();
  });
});
