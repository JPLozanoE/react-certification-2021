import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoContainer, VideoTitle, VideoText } from './styles/VideoItem';

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
