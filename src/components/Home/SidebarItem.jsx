import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { Button } from '../../__globalStyles';
import { VideoBox, DescriptionBox } from './styles/SidebarItem';

export const SidebarItem = ({ video, isFavorite }) => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
    history.push(`/video/${video.id.videoId}`);
  };

  const handleAddFavorite = (videoPayload) => {
    dispatch({
      type: types.addFavoriteVideo,
      payload: videoPayload,
    });
    dispatch({
      type: types.updateRecommendedVideos,
      payload: videoPayload.id.videoId,
    });
  };

  const {
    snippet: { title, thumbnails },
  } = video;
  return (
    <>
      <VideoBox onClick={handleClick}>
        <img src={thumbnails.default.url} alt="Imagen" />
        <DescriptionBox>
          {title}
          <div>
            <Button
              disabled={isFavorite}
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
