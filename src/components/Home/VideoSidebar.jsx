import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarLayout } from './styles/VideoSidebar';

export const VideoSidebar = ({ videos, edit }) => {
  return (
    <SidebarLayout>
      {videos.map((video) => {
        if (video.id.videoId) {
          return (
            <SidebarItem
              key={video.id.videoId}
              video={video}
              isFavorite={video?.isFavorite}
              edit={edit}
            />
          );
        }
        return false;
      })}
    </SidebarLayout>
  );
};
