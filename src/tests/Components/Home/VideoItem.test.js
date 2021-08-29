/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState, singleVideo } from '../../fixtures/demoState';
import { VideoItem } from '../../../components/Home/VideoItem';

describe('VideoItem not being logged in', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoItem video={singleVideo} editFavorites={false} isFavorite={false} />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
  });

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should contain a channel title', () => {
    const ChannelTitleElement = wrapper.getByText(singleVideo.snippet.channelTitle);
    expect(ChannelTitleElement).toBeInTheDocument();
  });

  test('Should contain a title', () => {
    const TitleElement = wrapper.getByText(singleVideo.snippet.title);
    expect(TitleElement).toBeInTheDocument();
  });

  test('Should contain an Image', () => {
    const ImageElement = wrapper.getByRole('img', { name: singleVideo.snippet.title });
    expect(ImageElement).toBeInTheDocument();
  });
});

describe('VideoItem being logged in', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState, auth: { ...demoState.auth, isLogged: true } },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoItem video={singleVideo} editFavorites={false} isFavorite={false} />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
  });

  test('Should contain an "Add to favorites" button ', () => {
    const ChannelTitleElement = wrapper.getByText('Add to favorites');
    expect(ChannelTitleElement).toBeInTheDocument();
  });
});

describe('VideoItem when present on favorite videos screen', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState, auth: { ...demoState.auth, isLogged: true } },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <VideoItem video={singleVideo} editFavorites isFavorite />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
  });

  test('Should contain an "Delete favorites" button ', () => {
    const ChannelTitleElement = wrapper.getByText('Delete from favorites');
    expect(ChannelTitleElement).toBeInTheDocument();
  });
});
