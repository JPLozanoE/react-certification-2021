/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState } from '../../fixtures/demoState';
import HomePage from '../../../pages/Home/Home.page';

describe('Home Page', () => {
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
            <HomePage />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper.getByText(demoState.videos[0].snippet.channelTitle)
    ).toBeInTheDocument();
  });
});
