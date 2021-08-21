import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from '../../components/Home/Navbar';
import { FullWidthContainer } from '../../__globalStyles';
import { VideoGrid } from '../../components/Home/VideoGrid';
import { videoData } from '../../__mock__/videoData';
import { VideoPlayerView } from '../../components/Home/VideoPlayerView';
import { AppContext } from '../../state/AppContext';
import { searchYouTube } from '../../utils/searchYoutube';

function HomePage() {
  const { items } = videoData;
  const {
    state: { search, selectedVideo },
  } = useContext(AppContext);
  const [videos, setVideos] = useState(items);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await searchYouTube(search);
      setVideos(res.items);
    };
    if (search !== '') {
      fetchVideos();
    }
  }, [search]);

  return (
    <>
      <FullWidthContainer>
        <Navbar />
        {!selectedVideo && <VideoGrid items={videos} />}
        {selectedVideo && <VideoPlayerView videos={videos} item={selectedVideo} />}
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
