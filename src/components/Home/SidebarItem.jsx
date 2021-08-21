import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../state/AppContext';
import { types } from '../../types/types';

const VideoBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px;
`;

const DescriptionBox = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.titles.color};
`;

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
