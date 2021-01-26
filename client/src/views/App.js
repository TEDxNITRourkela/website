import React from 'react';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Helpers
import createBrowserHistory from '../utils/history';

// Theme
import theme from '../config/theme';

const AsyncRoute = (route) =>
  Loadable({
    loader: () => import(`${route}`),
    loading: ActivityIndicator,
  });

const AsyncHome = AsyncRoute('./Home');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Switch>
          <Route path='/' exact component={AsyncHome} />

          <Redirect to='/' />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
