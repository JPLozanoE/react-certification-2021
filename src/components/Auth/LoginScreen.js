/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react';
import validator from 'validator';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';
import { useForm } from '../../hooks/useForm';
import { StyledLink } from '../../pages/Auth/styles/Auth';
import { Input, SocialNetworksDiv, Title, GoogleDiv } from './styles/AuthStyles';
import { Button } from '../../__globalStyles';

import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

export const LoginScreen = () => {
  const { dispatch } = useContext(AppContext);
  const [msgError, setMsgError] = useState('');

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;
  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      setMsgError('Email is not valid');
      return false;
    }

    if (password.length < 5) {
      setMsgError('Invalid password');
      return false;
    }

    setMsgError('');
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(({ user }) => {
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

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch({
          type: types.login,
          payload: { displayName: user.displayName, uid: user.uid },
        });
      });
  };

  return (
    <>
      <Title>Login</Title>
      <form data-testid="form" onSubmit={handleLogin} aria-label="form">
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <label htmlFor="email">
          {' '}
          Email
          <Input
            className="auth__input"
            type="text"
            placeholder="example@example.com"
            name="email"
            id="email"
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
            placeholder=""
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
          />
        </label>

        <Button disabled={false} className="btn btn-primary btn-block mb-1" type="submit">
          Login
        </Button>

        <SocialNetworksDiv className="auth__social-networks mt-1">
          <p>Login with Social Networks</p>
          <GoogleDiv className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </GoogleDiv>
        </SocialNetworksDiv>
        <StyledLink to="/auth/register" className="link">
          Create new account
        </StyledLink>
      </form>
    </>
  );
};
