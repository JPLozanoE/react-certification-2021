import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../App';

it('Renders without crashing', () => {
  const root = document.createElement('div');
  ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
});
