import React, { useEffect, useReducer } from 'react';
import { appReducer } from './state/appReducer';
import { AppContext } from './state/AppContext';
import Theme from './components/Layout/Theme';
import MainRouter from './routers/MainRouter';

const init = () => {
  return {
    isDarkTheme: true,
    search: '',
    selectedVideo: null,
    videos: [],
    auth: JSON.parse(localStorage.getItem('auth')) || {
      isLogged: false,
      displayName: '',
      uid: null,
    },
    favoriteVideos: JSON.parse(localStorage.getItem('favoriteVideos')) || [],
  };
};
export const App = () => {
  const [state, dispatch] = useReducer(appReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(state.auth));
  }, [state.auth]);

  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <Theme>
          <MainRouter />
        </Theme>
      </AppContext.Provider>
    </div>
  );
};
