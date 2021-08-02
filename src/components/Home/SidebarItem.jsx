import React from 'react';
import styled from 'styled-components';

const VideoBox = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px;
`;

const DescriptionBox = styled.div`
  padding: 8px;
  color: white;
`;

export const SidebarItem = ({ setSelectedVideo, video }) => {
  const handleClick = () => {
    setSelectedVideo(video);
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
