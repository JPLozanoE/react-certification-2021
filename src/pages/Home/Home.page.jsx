import React, { useEffect, useState } from 'react';
import { Navbar } from '../../components/Home/Navbar';
import { FullWidthContainer } from '../../__globalStyles';
import { VideoGrid } from '../../components/Home/VideoGrid';
import { videoData } from '../../__mock__/videoData';
import { VideoPlayerView } from '../../components/Home/VideoPlayerView';

function HomePage() {
  const { items } = videoData;
  const [search, setSearch] = useState('');
  const [videos, setVideos] = useState(items);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchYouTube = async (q) => {
    let query = '';
    query = encodeURIComponent(q);
    const response = await fetch(
      `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&type=video&q=${query}&maxResults=25&key=AIzaSyAOhX3R0u9yahjGtevwS34WiCfQ6kR1YAM`
    );
    const body = await response.json();
    return body;
  };
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
        <Navbar setSelectedVideo={setSelectedVideo} setSearch={setSearch} />
        {!selectedVideo && (
          <VideoGrid setSelectedVideo={setSelectedVideo} items={videos} />
        )}
        {selectedVideo && (
          <VideoPlayerView
            setSelectedVideo={setSelectedVideo}
            videos={videos}
            item={selectedVideo}
          />
        )}
      </FullWidthContainer>
    </>
  );
}

export default HomePage;
