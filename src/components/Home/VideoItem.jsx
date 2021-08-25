/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoContainer, VideoTitle, VideoText } from './styles/VideoItem';

export const VideoItem = ({ video, edit }) => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();
  const [isFavorite, setIsFavorite] = useState(edit);

  const handleVideoClick = (videoPayload) => {
    dispatch({
      type: types.setSelectedVideo,
      payload: videoPayload,
    });
    history.push(`/video/${video.id.videoId}`);
  };

  const handleAddFavorite = (videoPayload) => {
    if (edit) {
      console.log('eliminar video con el Id', videoPayload.id.videoId);
      dispatch({
        type: types.deleteFavoriteVideo,
        payload: videoPayload.id.videoId,
      });
    } else {
      setIsFavorite(true);
      dispatch({
        type: types.addFavoriteVideo,
        payload: videoPayload,
      });
    }
  };

  return (
    <VideoContainer>
      <img
        width="100%"
        height="150px"
        style={{ objectFit: 'cover' }}
        src={video.snippet.thumbnails.high.url}
        alt="img"
        aria-label={video.snippet.title}
        onClick={() => handleVideoClick(video)}
      />
      <div style={{ padding: '10px' }}>
        <div>
          <VideoTitle onClick={() => handleVideoClick(video)}>
            {video.snippet.title}
          </VideoTitle>
          <button
            disabled={isFavorite && !edit}
            onClick={() => handleAddFavorite(video)}
            type="button"
          >
            {edit ? 'Eliminar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
        <VideoText>{video.snippet.channelTitle}</VideoText>
        <VideoText>Publicado el {video.snippet.publishTime}</VideoText>
      </div>
    </VideoContainer>
  );
};
