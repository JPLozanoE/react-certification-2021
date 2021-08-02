import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/App/Router.component';

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
