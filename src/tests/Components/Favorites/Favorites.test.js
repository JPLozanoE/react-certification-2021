/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState } from '../../fixtures/demoState';
import { Favorites } from '../../../components/Favorites/Favorites';

describe('Favorite videos section', () => {
  let wrapper;

  test('Should render properly when recommended videos are in the sidebar', () => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Theme>
          <Router>
            <Favorites />
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
