import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Root from './Root';

import('./index.css');

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'),
);
