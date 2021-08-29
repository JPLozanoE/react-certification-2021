/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { demoState } from '../../fixtures/demoState';
import { AppContext } from '../../../state/AppContext';
import { RegisterScreen } from '../../../components/Auth/RegisterScreen';

describe('LoginScreen', () => {
  const providerValues = {
    state: { ...demoState },
    dispatch: jest.fn(),
  };
  const wrapper = render(
    <AppContext.Provider value={providerValues}>
      <Router>
        <RegisterScreen />
      </Router>
    </AppContext.Provider>
  );

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
