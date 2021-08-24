import { useContext, useEffect, useState } from 'react';
import { searchYouTube } from '../utils/searchYoutube';
import { AppContext } from '../state/AppContext';

export function useVideos() {
  const [videos, setVideos] = useState([]);
  const {
    state: { search },
  } = useContext(AppContext);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await searchYouTube(search);
      setVideos(res.items);
    };
    fetchVideos();
  }, [search]);

  return [videos];
}
