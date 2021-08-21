import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from '../../state/AppContext';

const Theme = ({ children }) => {
  const {
    state: { darkTheme },
  } = useContext(AppContext);
  const theme = {
    main: {
      ...(darkTheme ? { backgroundColor: '#181818' } : { backgroundColor: '#fffff' }),
    },
    titles: {
      ...(darkTheme ? { color: '#ffffff' } : { color: '#00000' }),
    },
    subtitles: {
      ...(darkTheme ? { color: 'rgb(170,170,170)' } : { color: 'rgb(96,96,96)' }),
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
