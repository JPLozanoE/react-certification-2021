import React from 'react';
import { SidebarItem } from './SidebarItem';
import { SidebarLayout } from './styles/VideoSidebar';

export const VideoSidebar = ({ videos, setSelectedVideo }) => {
  return (
    <SidebarLayout>
      {videos.map((video) => {
        if (video.id.videoId) {
          return (
            <SidebarItem
              setSelectedVideo={setSelectedVideo}
              key={video.id.videoId}
              video={video}
              isFavorite={video?.isFavorite}
            />
          );
        }
        return false;
      })}
    </SidebarLayout>
  );
};
