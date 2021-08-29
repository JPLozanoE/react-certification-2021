import React, { useContext } from 'react';
import {
  VideoContainer,
  ItemPlayerView,
  Videoiframe,
  Title,
  Description,
} from './styles/VideoPlayerView';
import { VideoSidebar } from './VideoSidebar';
import { AppContext } from '../../state/AppContext';
import { Button } from '../../__globalStyles';
import { types } from '../../types/types';

export const VideoPlayerView = ({ favorites }) => {
  // const [addedAsFavorite, setAddedAsFavorite] = useState(false);
  const {
    state: {
      videos,
      selectedVideo,
      favoriteVideos,
      auth: { isLogged },
    },
    dispatch,
  } = useContext(AppContext);

  const handleAddFavorite = (videoPayload) => {
    // setAddedAsFavorite((prevState) => !prevState);
    if (selectedVideo?.isFavorite) {
      dispatch({
        type: types.deleteFavoriteVideo,
        payload: videoPayload.id.videoId,
      });
      dispatch({
        type: types.deleteCurrentVideo,
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
      dispatch({
        type: types.addCurrentVideo,
      });
    }
  };

  const {
    id: { videoId },
    snippet: { title, description },
  } = selectedVideo;
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
        {isLogged && (
          <Button onClick={() => handleAddFavorite(selectedVideo)} type="button">
            {selectedVideo?.isFavorite ? 'Delete from favorites' : 'Add to favorites'}
          </Button>
        )}
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ItemPlayerView>
      <ItemPlayerView>
        <VideoSidebar
          videos={favorites ? favoriteVideos : videos}
          editFavorites={favorites}
        />
      </ItemPlayerView>
    </VideoContainer>
  );
};
