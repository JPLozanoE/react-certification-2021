/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { LoginScreen } from '../../../components/Auth/LoginScreen';
import { demoState } from '../../fixtures/demoState';
import { AppContext } from '../../../state/AppContext';

describe('LoginScreen', () => {
  const providerValues = {
    state: { ...demoState },
    dispatch: jest.fn(),
  };
  const wrapper = render(
    <AppContext.Provider value={providerValues}>
      <Router>
        <LoginScreen />
      </Router>
    </AppContext.Provider>
  );

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
