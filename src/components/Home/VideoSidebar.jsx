import React from 'react';
import styled from 'styled-components';
import { SidebarItem } from './SidebarItem';

const SidebarLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const VideoSidebar = ({ videos, setSelectedVideo }) => {
  return (
    <SidebarLayout>
      {videos.map((video) => {
        if (video.id.videoId) {
          return (
            <SidebarItem
              setSelectedVideo={setSelectedVideo}
              key={video.etag}
              video={video}
            />
          );
        }
        return false;
      })}
    </SidebarLayout>
  );
};
