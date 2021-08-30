/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act, fireEvent, render } from '@testing-library/react';
import { demoState } from '../../fixtures/demoState';
import { AppContext } from '../../../state/AppContext';
import { RegisterScreen } from '../../../components/Auth/RegisterScreen';

describe('RegisterScreen', () => {
  let wrapper;
  beforeEach(() => {
    const providerValues = {
      state: { ...demoState },
      dispatch: jest.fn(),
    };
    wrapper = render(
      <AppContext.Provider value={providerValues}>
        <Router>
          <RegisterScreen />
        </Router>
      </AppContext.Provider>
    );
  });

  test('Should render properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Elements should be in the Component', () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(password2).toBeInTheDocument();
  });

  test('Testing register', async () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    const submit = wrapper.getByRole('button', { name: 'Register', type: 'submit' });
    const form = wrapper.getByRole('form');
    fireEvent.change(name, { target: { value: 'Pablo Lozano' } });
    fireEvent.change(email, { target: { value: 'juanpa92008@gmail.com' } });
    fireEvent.change(password, { target: { value: 'pablo123' } });
    fireEvent.change(password2, { target: { value: 'pablo123' } });
    fireEvent.click(submit);
    await act(async () => {
      fireEvent.submit(form);
    });
  });

  test('If the password is too short a label should appear', () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    const submit = wrapper.getByRole('button', { name: 'Register', type: 'submit' });
    fireEvent.change(name, { target: { value: 'Pablo Lozano' } });
    fireEvent.change(email, { target: { value: 'juanpa92008@gmail.com' } });
    fireEvent.change(password, { target: { value: 'pa' } });
    fireEvent.change(password2, { target: { value: 'pa' } });

    fireEvent.click(submit);
    expect(
      wrapper.getByText('Password should be at least 6 characters and match each other')
    ).toBeInTheDocument();
  });

  test('If the password inputs dont match, a label should appear', () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    const submit = wrapper.getByRole('button', { name: 'Register', type: 'submit' });
    fireEvent.change(name, { target: { value: 'Pablo Lozano' } });
    fireEvent.change(email, { target: { value: 'juanpa92008@gmail.com' } });
    fireEvent.change(password, { target: { value: 'pablo123456789' } });
    fireEvent.change(password2, { target: { value: 'pablo1234567890' } });

    fireEvent.click(submit);
    expect(
      wrapper.getByText('Password should be at least 6 characters and match each other')
    ).toBeInTheDocument();
  });

  test('If the email isnt valid, a label should appear', () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    const submit = wrapper.getByRole('button', { name: 'Register', type: 'submit' });
    fireEvent.change(name, { target: { value: 'Pablo Lozano' } });
    fireEvent.change(email, { target: { value: 'juanpa92008@' } });
    fireEvent.change(password, { target: { value: 'pablo123456789' } });
    fireEvent.change(password2, { target: { value: 'pablo1234567890' } });

    fireEvent.click(submit);
    expect(wrapper.getByText('Email is not valid')).toBeInTheDocument();
  });

  test('There should be a name', () => {
    const name = wrapper.getByLabelText('Name');
    const email = wrapper.getByLabelText('Email');
    const password = wrapper.getByLabelText('Password');
    const password2 = wrapper.getByLabelText('Confirm password');
    const submit = wrapper.getByRole('button', { name: 'Register', type: 'submit' });
    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(email, { target: { value: 'juanpa92008@gmail.com' } });
    fireEvent.change(password, { target: { value: 'pablo123456789' } });
    fireEvent.change(password2, { target: { value: 'pablo1234567890' } });

    fireEvent.click(submit);
    expect(wrapper.getByText('Name is required')).toBeInTheDocument();
  });
});
