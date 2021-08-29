/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState, singleVideo } from '../../fixtures/demoState';
import { VideoPage } from '../../../pages/Video/Video.page';

describe('Video Page', () => {
  let wrapper;

  test('Should render properly', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoPage />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getByText(demoState.videos[0].snippet.title)).toBeInTheDocument();
  });
});
