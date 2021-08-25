/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { Button } from '../../__globalStyles';
import { VideoBox, DescriptionBox } from './styles/SidebarItem';

export const SidebarItem = ({ video, isFavorite = false, edit = false }) => {
  console.log('isFavorite', isFavorite);
  console.log('edit', edit);
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
    if (edit) {
      history.push(`/video/favorites/${video.id.videoId}`);
    } else {
      history.push(`/video/${video.id.videoId}`);
    }
    // history.push(`/video/${video.id.videoId}`);
  };

  const handleAddFavorite = (videoPayload) => {
    if (isFavorite) {
      dispatch({
        type: types.deleteFavoriteVideo,
        payload: videoPayload.id.videoId,
      });
      history.push('/favorites');
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

  const {
    snippet: { title, thumbnails },
  } = video;
  return (
    <>
      <VideoBox>
        <img onClick={handleClick} src={thumbnails.default.url} alt="Imagen" />
        <DescriptionBox>
          {title}
          <div>
            <Button
              // disabled={isFavorite && !edit}
              onClick={() => handleAddFavorite(video)}
              type="button"
            >
              {isFavorite ? 'Delete from favorites' : 'Add to Favorites'}
            </Button>
          </div>
        </DescriptionBox>
      </VideoBox>
      <hr />
    </>
  );
};
