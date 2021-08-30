import React from 'react';
import { VideoContainer } from './styles/VideoContainer';
import { VideoItem } from './VideoItem';

export const VideoGrid = ({ items, editFavorites }) => {
  return (
    <VideoContainer>
      {items.map((video) => (
        <VideoItem
          video={video}
          isFavorite={video?.isFavorite}
          editFavorites={editFavorites}
          key={video.etag}
        />
      ))}
    </VideoContainer>
  );
};
