/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoItem } from '../../components/Home/VideoItem';
import { videoData } from '../../__mock__/videoData';

const { items } = videoData;

beforeEach(() => {
  render(<VideoItem snippet={items[1].snippet} />);
});

describe('VideoItem elements', () => {
  test('Should contain a channel title', () => {
    const ChannelTitleElement = screen.queryByText(items[1].snippet.channelTitle);
    expect(ChannelTitleElement).toBeInTheDocument();
  });

  test('Should contain a title', () => {
    const TitleElement = screen.queryByText(items[1].snippet.title);
    expect(TitleElement).toBeInTheDocument();
  });

  test('Should contain an Image', () => {
    const ImageElement = screen.getByRole('img', { name: items[1].snippet.title });
    expect(ImageElement).toBeInTheDocument();
  });
});
