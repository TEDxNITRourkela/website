import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Root from './Root';

import configureFirebase, { analytics } from './config/firebase';

import('./index.css');

// configureFirebase()
//   .then(() => {
//     ReactDOM.render(
//       <Root>
//         <App />
//       </Root>,
//       document.querySelector('#root'),
//     );
//   })
//   .then(() => {
//     analytics();
//   })
//   .catch((error) => {
//     // eslint-disable-next-line
//     console.log('Firebase Initialization Error: ', error);
//   });

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'),
);
