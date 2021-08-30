/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { LoginScreen } from '../../../components/Auth/LoginScreen';
import { demoState } from '../../fixtures/demoState';
import { AppContext } from '../../../state/AppContext';

describe('LoginScreen', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Router>
          <LoginScreen />
        </Router>
      </AppContext.Provider>
    );
  });

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Elements should be in the Component', () => {
    const input = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const submit = wrapper.getByRole('button', { name: 'Login', type: 'submit' });
    const form = wrapper.getByRole('form');
    expect(input).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  test('Testing login', async () => {
    const input = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const submit = wrapper.getByRole('button', { name: 'Login', type: 'submit' });
    const form = wrapper.getByRole('form');
    fireEvent.change(input, { target: { value: 'juanpa92008@hotmail.com' } });
    fireEvent.change(password, { target: { value: 'pablo123' } });
    fireEvent.click(submit);
    await act(async () => {
      fireEvent.submit(form);
    });
  });

  test('If the email input is incorrect a label should appear', () => {
    const input = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const submit = wrapper.getByRole('button', { name: 'Login', type: 'submit' });
    fireEvent.change(input, { target: { value: 'juanpa92008@' } });
    fireEvent.change(password, { target: { value: 'pablo123' } });
    fireEvent.click(submit);
    expect(wrapper.getByText('Email is not valid')).toBeInTheDocument();
  });

  test('if the password input is incorrect a label should appear', () => {
    const input = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const submit = wrapper.getByRole('button', { name: 'Login', type: 'submit' });
    fireEvent.change(input, { target: { value: 'juanpa92008@hotmail.com' } });
    fireEvent.change(password, { target: { value: 'pa' } });
    fireEvent.click(submit);
    expect(wrapper.getByText('Invalid password')).toBeInTheDocument();
  });
});
