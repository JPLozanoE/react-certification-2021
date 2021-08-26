import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../state/AppContext';
import { VideoGrid } from '../Home/VideoGrid';
import { Title } from './styles/Favorites';

export const Favorites = () => {
  const {
    state: { favoriteVideos },
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos));
  }, [favoriteVideos]);

  return (
    <>
      <Title>Videos favoritos</Title>
      <VideoGrid edit items={favoriteVideos} />
    </>
  );
};
