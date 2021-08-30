/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState } from '../../fixtures/demoState';
import { FavoritesPlayerPage } from '../../../pages/FavoritesPlayer/FavoritesPlayer.page';

describe('Favorites Player', () => {
  let wrapper;

  test('Should render properly', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: demoState.favoriteVideos[0] },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <FavoritesPlayerPage />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.getByText(demoState.favoriteVideos[0].snippet.description)
    ).toBeInTheDocument();
  });
});
