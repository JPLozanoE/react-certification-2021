import React from 'react';
import styled from 'styled-components';
import { videoData } from '../../__mock__/videoData';
import { VideoItem } from './VideoItem';

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: auto auto auto;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;

export const VideoGrid = () => {
  const { items } = videoData;
  return (
    <VideoContainer>
      {items.map((video) => (
        <VideoItem {...video} key={video.etag} />
      ))}
    </VideoContainer>
  );
};
