/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Theme from '../../components/Layout/Theme';
import { demoState, singleVideo } from '../fixtures/demoState';
import { AppContext } from '../../state/AppContext';
import MainRouter, { RedirectImprov } from '../../routers/MainRouter';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { FavoritesPlayerPage } from '../../pages/FavoritesPlayer/FavoritesPlayer.page';

describe('Main Router', () => {
  let wrapper;

  test('Should render properly when in /auth/register', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <MainRouter />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.getByText(demoState.videos[0].snippet.channelTitle)
    ).toBeInTheDocument();
  });

  test('Should render properly ', () => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    const history = createMemoryHistory();
    history.push('/video/favorites/5');
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router history={history}>
            <PrivateRoute
              exact
              path="/video/favorites/:videoId"
              component={
                providerValues.state.selectedVideo !== null
                  ? FavoritesPlayerPage
                  : RedirectImprov
              }
              isAuth
            />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(
      wrapper.queryByText(demoState.favoriteVideos[0].snippet.title)
    ).not.toBeInTheDocument();
  });
});
