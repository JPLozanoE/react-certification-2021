import React from 'react';
import { BoxContainer, Main } from './styles/Auth';

export const AuthPage = ({ children }) => {
  return (
    <Main>
      <BoxContainer>{children}</BoxContainer>
    </Main>
  );
};
