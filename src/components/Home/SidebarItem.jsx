import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoBox, DescriptionBox } from './styles/SidebarItem';

export const SidebarItem = ({ video }) => {
  const { dispatch } = useContext(AppContext);
  const history = useHistory();

  const handleClick = () => {
    console.log(video.id.videoId);
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
    history.push(`/video/${video.id.videoId}`);
  };
  const {
    snippet: { title, thumbnails },
  } = video;
  return (
    <>
      <VideoBox onClick={handleClick}>
        <img src={thumbnails.default.url} alt="Imagen" />
        <DescriptionBox>{title}</DescriptionBox>
      </VideoBox>
      <hr />
    </>
  );
};
