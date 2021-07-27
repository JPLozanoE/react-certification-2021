/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { VideoGrid } from '../../components/Home/VideoGrid';

describe('VideoGrid', () => {
  test('Should render properly', () => {
    const component = render(<VideoGrid />);
    expect(component).toMatchSnapshot();
  });
});
