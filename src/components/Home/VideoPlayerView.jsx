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

export const VideoPlayerView = ({ favorites }) => {
  const {
    state: { videos, selectedVideo, favoriteVideos },
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
        <button type="button">Add to favorites</button>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ItemPlayerView>
      <ItemPlayerView>
        <VideoSidebar
          videos={favorites ? favoriteVideos : videos}
          editFavorites={false}
        />
      </ItemPlayerView>
    </VideoContainer>
  );
};
