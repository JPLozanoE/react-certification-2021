/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles, { FullWidthContainer } from '../__globalStyles';
import { AppContext } from '../state/AppContext';
import { searchYouTube } from '../utils/searchYoutube';
import Layout from '../components/Layout/Layout.component';
import HomePage from '../pages/Home/Home.page';
import { Navbar } from '../components/Home/Navbar';
import { types } from '../types/types';
import { VideoPage } from '../pages/Video/Video.page';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthRouter } from './AuthRouter';
// import { Favorites } from '../components/Favorites/Favorites';
import { FavoritesPage } from '../pages/Favorites/Favorites.page';
import { FavoritesPlayerPage } from '../pages/FavoritesPlayer/FavoritesPlayer.page';

const RedirectImprov = () => <Redirect to="/" />;

function MainRouter() {
  const [error, setError] = useState(false);
  const {
    state: {
      selectedVideo,
      search,
      auth: { isLogged },
    },
    dispatch,
  } = useContext(AppContext);

  console.log(isLogged);

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
          <Switch>
            <PublicRoute path="/auth" component={AuthRouter} isAuth={isLogged} />
            {error ? (
              <p>Imposible mostrar en este momento</p>
            ) : (
              <>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/video/:videoId">
                  {selectedVideo !== null ? <VideoPage /> : <Redirect to="/" />}
                </Route>
                <PrivateRoute
                  exact
                  path="/favorites"
                  component={FavoritesPage}
                  isAuth={isLogged}
                />
                <PrivateRoute
                  exact
                  path="/video/favorites/:videoId"
                  component={
                    selectedVideo !== null ? FavoritesPlayerPage : RedirectImprov
                  }
                  isAuth={isLogged}
                />
              </>
            )}
          </Switch>
        </FullWidthContainer>
      </Layout>
    </BrowserRouter>
  );
}

export default MainRouter;
