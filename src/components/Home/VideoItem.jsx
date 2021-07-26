import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  /* width: calc((100% / 4) - 60px); */
  /* border: 1px solid gray; */
  margin: 10px;
`;
const VideoTitle = styled.h3`
  color: #ffffff;
`;

const VideoText = styled.p`
  color: rgb(170, 170, 170);
`;

export const VideoItem = (props) => {
  // console.log(props);
  return (
    <VideoContainer>
      <img
        width="100%"
        height="200px"
        style={{ objectFit: 'cover' }}
        src={props.snippet.thumbnails.high.url}
        alt="img"
      />
      <div style={{ padding: '10px' }}>
        <VideoTitle>{props.snippet.title}</VideoTitle>
        <VideoText>{props.snippet.channelTitle}</VideoText>
        <VideoText>Publicado el {props.snippet.publishTime}</VideoText>
      </div>
    </VideoContainer>
  );
};
