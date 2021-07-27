/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Navbar } from '../../components/Home/Navbar';

describe('Navbar', () => {
  test('Should render properly', () => {
    const component = render(<Navbar />);
    expect(component).toMatchSnapshot();
  });
});
