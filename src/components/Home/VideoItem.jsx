import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoContainer, VideoTitle, VideoText } from './styles/VideoItem';

export const VideoItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const handleVideoClick = (video) => {
    console.log(video.id.videoId);
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
    history.push(`/video/${video.id.videoId}`);
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
