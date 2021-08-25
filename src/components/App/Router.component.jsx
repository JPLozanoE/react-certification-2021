import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../pages/Home';
import Layout from '../Layout';
import GlobalStyles, { FullWidthContainer } from '../../__globalStyles';
import { Navbar } from '../Home/Navbar';
import { AppContext } from '../../state/AppContext';
import { searchYouTube } from '../../utils/searchYoutube';
import { types } from '../../types/types';
import { VideoPage } from '../../pages/Video/Video.page';

function Router() {
  const [error, setError] = useState(false);
  const {
    state: { selectedVideo, search },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await searchYouTube(search);
      if (res.error) setError(true);
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
          {error ? (
            <p>Imposible mostrar en este momento</p>
          ) : (
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/video/:videoId">
                {selectedVideo !== null ? <VideoPage /> : <Redirect to="/" />}
              </Route>
            </Switch>
          )}
        </FullWidthContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
