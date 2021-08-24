import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import GlobalStyles, { FullWidthContainer } from '../../__globalStyles';
import { Navbar } from '../Home/Navbar';
import { AppContext } from '../../state/AppContext';
import { VideoPlayerView } from '../Home/VideoPlayerView';
// import { useVideos } from '../../hooks/fetchVideos';
import { searchYouTube } from '../../utils/searchYoutube';
import { types } from '../../types/types';

function Router() {
  const {
    state: { selectedVideo, search },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await searchYouTube(search);
      dispatch({ type: types.setRecommendedVideos, payload: res.items });
    };
    fetchVideos();
  }, [search, dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Navbar />
        <FullWidthContainer>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/video/:videoId">
              {selectedVideo !== null ? (
                <VideoPlayerView item={selectedVideo} />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
        </FullWidthContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
