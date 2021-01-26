import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Root from './Root';

import('./index.css');

import configureFirebase from './config/firebase';

console.log(process.env.TRIAL);

configureFirebase()
  .then(() => {
    ReactDOM.render(
      <Root>
        <App />
      </Root>,
      document.querySelector('#root'),
    );
  })
  .catch((error) => {
    console.log('Firebase Initialization Error: ', error);
  });
