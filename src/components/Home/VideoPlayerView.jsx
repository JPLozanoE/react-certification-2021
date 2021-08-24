import React, { useContext } from 'react';
import {
  VideoContainer,
  ItemPlayerView,
  Videoiframe,
  Title,
  Description,
} from './styles/VideoPlayerView';
import { VideoSidebar } from './VideoSidebar';
import { AppContext } from '../../state/AppContext';

export const VideoPlayerView = () => {
  const {
    state: { videos, selectedVideo },
  } = useContext(AppContext);
  const {
    id: { videoId },
    snippet: { title, description },
  } = selectedVideo;
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
        <VideoSidebar videos={videos} />
      </ItemPlayerView>
    </VideoContainer>
  );
};
