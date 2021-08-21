import React, { useReducer } from 'react';
import Router from './components/App/Router.component';
import { appReducer } from './state/appReducer';
import { AppContext } from './state/AppContext';
import Theme from './components/Layout/Theme';

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    darkTheme: true,
    search: '',
    selectedVideo: null,
  });

  return (
    <div>
      <AppContext.Provider value={{ state, dispatch }}>
        <Theme>
          <Router />
        </Theme>
      </AppContext.Provider>
    </div>
  );
};
