import React, { useContext } from 'react';
import { VideoGrid } from '../../components/Home/VideoGrid';
// import { useVideos } from '../../hooks/fetchVideos';
import { AppContext } from '../../state/AppContext';

function HomePage() {
  // const [videos] = useVideos();
  const {
    state: { videos },
  } = useContext(AppContext);

  return <VideoGrid items={videos} />;
}

export default HomePage;
