import React, { useReducer } from 'react';
import { appReducer } from './state/appReducer';
import { AppContext } from './state/AppContext';
import Theme from './components/Layout/Theme';
import MainRouter from './routers/MainRouter';

export const App = () => {
  const init = () => {
    return {
      darkTheme: true,
      search: '',
      selectedVideo: null,
      videos: [],
      auth: {
        isLogged: true,
        displayName: 'Pablo Lozano',
        uid: 'LNMUgAl5pXaGAjwXwINnyStBowD2',
      },
      favoriteVideos: JSON.parse(localStorage.getItem('favoriteVideos')) || [],
    };
  };
  const [state, dispatch] = useReducer(appReducer, {}, init);

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
