/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoContainer, VideoTitle, VideoText } from './styles/VideoItem';
import { Button } from '../../__globalStyles';

export const VideoItem = ({ video, editFavorites, isFavorite }) => {
  const {
    dispatch,
    state: {
      auth: { isLogged },
    },
  } = useContext(AppContext);
  const history = useHistory();

  const handleVideoClick = (videoPayload) => {
    dispatch({
      type: types.setSelectedVideo,
      payload: videoPayload,
    });
    if (editFavorites) {
      history.push(`/video/favorites/${video.id.videoId}`);
    } else {
      history.push(`/video/${video.id.videoId}`);
    }
  };

  const handleAddFavorite = (videoPayload) => {
    if (editFavorites) {
      dispatch({
        type: types.deleteFavoriteVideo,
        payload: videoPayload.id.videoId,
      });
    } else {
      dispatch({
        type: types.addFavoriteVideo,
        payload: videoPayload,
      });
      dispatch({
        type: types.updateRecommendedVideos,
        payload: videoPayload.id.videoId,
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
          {isLogged && (
            <Button
              disabled={isFavorite && !editFavorites}
              onClick={() => handleAddFavorite(video)}
              type="button"
            >
              {editFavorites ? 'Delete from favorites' : 'Add to favorites'}
            </Button>
          )}
        </div>
        <VideoText>{video.snippet.channelTitle}</VideoText>
        <VideoText>Publicado el {video.snippet.publishTime}</VideoText>
      </div>
    </VideoContainer>
  );
};
