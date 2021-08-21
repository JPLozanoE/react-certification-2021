import React from 'react';
import styled from 'styled-components';
import { VideoSidebar } from './VideoSidebar';

const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 16px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const ItemPlayerView = styled.div`
  padding: 8px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.titles.color};
`;

const Description = styled.p`
  color: ${(props) => props.theme.subtitles.color};
`;

const Videoiframe = styled.iframe`
  height: 700px;
  @media only screen and (max-width: 1200px) {
    height: 300px;
  }
`;

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
