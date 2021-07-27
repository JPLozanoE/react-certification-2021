/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import Router from '../components/App/Router.component';

describe('Router should render properly', () => {
  test('App debe renderizarse', () => {
    const component = render(<Router />);
    expect(component).toMatchSnapshot();
  });
});
