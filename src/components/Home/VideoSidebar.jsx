import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarLayout } from './styles/VideoSidebar';

export const VideoSidebar = ({ videos, editFavorites }) => {
  return (
    <SidebarLayout>
      {videos.map((video) => {
        return (
          <SidebarItem
            key={video.id.videoId}
            video={video}
            isFavorite={video?.isFavorite}
            editFavorites={editFavorites}
          />
        );
      })}
    </SidebarLayout>
  );
};
