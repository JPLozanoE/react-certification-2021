import React from 'react';
import { VideoContainer } from './styles/VideoContainer';
import { VideoItem } from './VideoItem';

export const VideoGrid = ({ items, edit }) => {
  console.log(edit);
  return (
    <VideoContainer>
      {items.map((video) => (
        <VideoItem
          video={video}
          isFavorite={video?.isFavorite}
          edit={edit}
          key={video.etag}
        />
      ))}
    </VideoContainer>
  );
};
