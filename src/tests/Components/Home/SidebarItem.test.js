/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState, singleVideo } from '../../fixtures/demoState';
import { SidebarItem } from '../../../components/Home/SidebarItem';

describe('SidebarItem', () => {
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
            <SidebarItem video={singleVideo} editFavorites={false} isFavorite={false} />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
  });

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
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
