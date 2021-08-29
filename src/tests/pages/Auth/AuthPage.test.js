/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContext } from '../../../state/AppContext';
import Theme from '../../../components/Layout/Theme';
import { demoState } from '../../fixtures/demoState';
import { AuthPage } from '../../../pages/Auth/Auth.page';
import { LoginScreen } from '../../../components/Auth/LoginScreen';

describe('Auth Page', () => {
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
            <AuthPage>
              <LoginScreen />
            </AuthPage>
          </Router>
        </Theme>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.debug();
    expect(wrapper.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  });
});
