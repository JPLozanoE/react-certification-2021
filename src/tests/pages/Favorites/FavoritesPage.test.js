/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState } from '../../fixtures/demoState';
import { FavoritesPage } from '../../../pages/Favorites/Favorites.page';

describe('Favorites Page', () => {
  let wrapper;

  test('Should render properly', () => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <FavoritesPage />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.getByText(demoState.favoriteVideos[0].snippet.channelTitle)
    ).toBeInTheDocument();
  });
});
