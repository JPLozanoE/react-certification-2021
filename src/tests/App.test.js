/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';

describe('<App/> Testing', () => {
  test('should render properly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
