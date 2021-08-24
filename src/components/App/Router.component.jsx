import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import GlobalStyles, { FullWidthContainer } from '../../__globalStyles';
import { Navbar } from '../Home/Navbar';
import { AppContext } from '../../state/AppContext';
import { VideoPlayerView } from '../Home/VideoPlayerView';
import { useVideos } from '../../hooks/fetchVideos';

function Router() {
  const {
    state: { selectedVideo },
  } = useContext(AppContext);

  const [videos] = useVideos();

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
              <VideoPlayerView videos={videos} item={selectedVideo} />
            </Route>
          </Switch>
        </FullWidthContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
