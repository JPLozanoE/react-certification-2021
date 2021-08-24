import React, { useContext } from 'react';
import { VideoGrid } from '../../components/Home/VideoGrid';
import { VideoPlayerView } from '../../components/Home/VideoPlayerView';
import { AppContext } from '../../state/AppContext';
import { useVideos } from '../../hooks/fetchVideos';

function HomePage() {
  const {
    state: { selectedVideo },
  } = useContext(AppContext);
  const [videos] = useVideos();

  return (
    <>
      {!selectedVideo && <VideoGrid items={videos} />}
      {selectedVideo && <VideoPlayerView videos={videos} item={selectedVideo} />}
    </>
  );
}

export default HomePage;
