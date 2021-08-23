import React from 'react';
import {
  VideoContainer,
  ItemPlayerView,
  Videoiframe,
  Title,
  Description,
} from './styles/VideoPlayerView';
import { VideoSidebar } from './VideoSidebar';

export const VideoPlayerView = ({ item, videos, setSelectedVideo }) => {
  const {
    id: { videoId },
    snippet: { title, description },
  } = item;
  return (
    <VideoContainer>
      <ItemPlayerView>
        <Videoiframe
          width="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ItemPlayerView>
      <ItemPlayerView>
        <VideoSidebar setSelectedVideo={setSelectedVideo} videos={videos} />
      </ItemPlayerView>
    </VideoContainer>
  );
};
