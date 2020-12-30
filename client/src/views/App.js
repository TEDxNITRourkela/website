import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from '../config/history';

import Home from './Home';
import Inductions from './Inductions';
// import Error from './Error'

const areWeInducting = false;

function App() {
  return (
    <Router history={createBrowserHistory}>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        {areWeInducting && (
          <Route path='/inductions' exact>
            <Inductions />
          </Route>
        )}
        {/* <Route path="*">
        <Error />
      </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
