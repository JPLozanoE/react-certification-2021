/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import { firebase } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { StyledLink } from '../../pages/Auth/styles/Auth';
import { Input, Title } from './styles/AuthStyles';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { Button } from '../../__globalStyles';

export const RegisterScreen = () => {
  const { dispatch } = useContext(AppContext);
  const [msgError, msgSetError] = useState('');

  const [{ name, email, password, password2 }, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const isFormValid = () => {
    let error = false;

    if (name.trim().length === 0) {
      error = true;
      msgSetError('Name is required');
      return false;
    }

    if (!validator.isEmail(email)) {
      error = true;
      msgSetError('Email is not valid');

      return false;
    }

    if (password !== password2 || password.length < 5) {
      error = true;
      msgSetError('Password should be at least 6 characters and match each other');

      return false;
    }
    msgSetError('');
    return error === false;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          await user.updateProfile({ displayName: name });
          dispatch({
            type: types.login,
            payload: { displayName: user.displayName, uid: user.uid },
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  };

  return (
    <>
      <Title className="auth__title">Register</Title>
      <form data-testid="form" aria-label="form" onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <label htmlFor="name">
          {' '}
          Name
          <Input
            id="name"
            className="auth__input"
            type="text"
            placeholder="Juan Pablo Lozano"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          {' '}
          Email
          <Input
            className="auth__input"
            type="text"
            id="email"
            placeholder="example@example.com"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="password">
          {' '}
          Password
          <Input
            className="auth__input"
            type="password"
            id="password"
            placeholder="●●●●●"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password2">
          {' '}
          Confirm password
          <Input
            className="auth__input"
            type="password"
            placeholder="●●●●●"
            name="password2"
            id="password2"
            value={password2}
            onChange={handleInputChange}
          />
        </label>

        <Button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </Button>
        <div>
          <StyledLink to="/auth/login" className="link">
            Already registered?
          </StyledLink>
        </div>
      </form>
    </>
  );
};
