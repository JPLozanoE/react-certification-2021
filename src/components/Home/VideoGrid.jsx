import React from 'react';
import { VideoContainer } from './styles/VideoContainer';
import { VideoItem } from './VideoItem';

export const VideoGrid = ({ items, setSelectedVideo }) => {
  return (
    <VideoContainer>
      {items.map((video) => (
        <VideoItem setSelectedVideo={setSelectedVideo} {...video} key={video.etag} />
      ))}
    </VideoContainer>
  );
};
