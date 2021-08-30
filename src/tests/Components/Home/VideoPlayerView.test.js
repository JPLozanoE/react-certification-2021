/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState, singleVideo } from '../../fixtures/demoState';
import { VideoPlayerView } from '../../../components/Home/VideoPlayerView';

describe('VideoPlayerView', () => {
  let wrapper;

  test('Should render properly when recommended videos are in the sidebar', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoPlayerView favorites={false} />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.getByText(demoState.videos[0].snippet.title)).toBeInTheDocument();
  });

  test('Should render properly when favorite videos are in the sidebar', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoPlayerView favorites />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(
      wrapper.getByText(demoState.favoriteVideos[0].snippet.title)
    ).toBeInTheDocument();
  });

  test('Should have a button that says "Add to favorites" when logged in', () => {
    const providerValues = {
      state: { ...demoState, selectedVideo: singleVideo, auth: { isLogged: true } },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoPlayerView favorites />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper.getByText('Add to favorites')).toBeInTheDocument();
  });

  test('Should have a button that says "Delete from favorites" when given video is set as Favorite and user is logged in', () => {
    const providerValues = {
      state: {
        ...demoState,
        selectedVideo: { ...singleVideo, isFavorite: true },
        auth: { isLogged: true },
      },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoPlayerView />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper.getByText('Delete from favorites')).toBeInTheDocument();
  });
});
