import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../../state/AppContext';

const Theme = ({ children }) => {
  const {
    state: { isDarkTheme },
  } = useContext(AppContext);
  const theme = {
    main: {
      ...(isDarkTheme ? { backgroundColor: '#181818' } : { backgroundColor: '#ffffff' }),
    },
    titles: {
      ...(isDarkTheme ? { color: '#ffffff' } : { color: '#00000' }),
    },
    subtitles: {
      ...(isDarkTheme ? { color: 'rgb(170,170,170)' } : { color: 'rgb(96,96,96)' }),
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
