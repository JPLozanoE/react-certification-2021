import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  margin: 10px;
  cursor: pointer;
`;
const VideoTitle = styled.h3`
  color: #ffffff;
`;

const VideoText = styled.p`
  color: rgb(170, 170, 170);
`;

export const VideoItem = (props) => {
  const { setSelectedVideo } = props;
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    // console.log(video);
  };
  return (
    <VideoContainer onClick={() => handleVideoClick(props)}>
      <img
        width="100%"
        height="200px"
        style={{ objectFit: 'cover' }}
        src={props.snippet.thumbnails.high.url}
        alt="img"
        aria-label={props.snippet.title}
      />
      <div style={{ padding: '10px' }}>
        <VideoTitle>{props.snippet.title}</VideoTitle>
        <VideoText>{props.snippet.channelTitle}</VideoText>
        <VideoText>Publicado el {props.snippet.publishTime}</VideoText>
      </div>
    </VideoContainer>
  );
};
