/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { VideoGrid } from '../../../components/Home/VideoGrid';
import { AppContext } from '../../../state/AppContext';
import { demoState, manyVideos } from '../../fixtures/demoState';
import Theme from '../../../components/Layout/Theme';

/* eslint-disable react/jsx-filename-extension */

describe('VideoGrid', () => {
  const providerValues = {
    state: { ...demoState },
    dispatch: jest.fn(),
  };
  const wrapper = render(
    <AppContext.Provider value={providerValues}>
      <Theme>
        <Router>
          <VideoGrid items={manyVideos} editFavorites={false} />
        </Router>
      </Theme>
    </AppContext.Provider>
  );

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
