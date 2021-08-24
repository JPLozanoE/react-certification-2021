import React, { useReducer } from 'react';
import { appReducer } from './state/appReducer';
import { AppContext } from './state/AppContext';
import Theme from './components/Layout/Theme';
import MainRouter from './routers/MainRouter';

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    darkTheme: true,
    search: '',
    selectedVideo: null,
    videos: [],
    auth: {
      isLogged: false,
      displayName: '',
      uid: null,
    },
  });

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
