import React, { useContext } from 'react';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';
import { VideoBox, DescriptionBox } from './styles/SidebarItem';

export const SidebarItem = ({ video }) => {
  const { dispatch } = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: types.setSelectedVideo,
      payload: video,
    });
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
