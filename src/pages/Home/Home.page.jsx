import React, { useContext } from 'react';
import { VideoGrid } from '../../components/Home/VideoGrid';
import { AppContext } from '../../state/AppContext';

function HomePage() {
  const {
    state: { videos },
  } = useContext(AppContext);

  return <VideoGrid edit={false} items={videos} />;
}

export default HomePage;
