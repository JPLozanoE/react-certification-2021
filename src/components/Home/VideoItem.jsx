import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

const VideoContainer = styled.div`
  margin: 10px;
  cursor: pointer;
`;
const VideoTitle = styled.h3`
  color: ${(props) => props.theme.titles.color};
`;

const VideoText = styled.p`
  color: ${(props) => props.theme.subtitles.color};
`;

export const VideoItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleVideoClick = (video) => {
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
  };
  return (
    <VideoContainer onClick={() => handleVideoClick(props)}>
      <img
        width="100%"
        height="150px"
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
