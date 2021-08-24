/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginScreen } from '../components/Auth/LoginScreen';
import { RegisterScreen } from '../components/Auth/RegisterScreen';
import { AuthPage } from '../pages/Auth/Auth.page';

export const AuthRouter = () => {
  return (
    <AuthPage>
      <div className="auth__box-container animate__animated animate__fadeIn animate__faster">
        <Switch>
          <Route path="/auth/login" component={LoginScreen} />
          <Route path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </AuthPage>
  );
};
