import React from 'react';

// Libraries
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import Navbar from '../components/marginals/Navbar';
import Footer from '../components/marginals/Footer';

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
const AsyncAbout = AsyncRoute('./About');
const AsyncLoader = AsyncRoute('../components/shared/ActivityIndicator');
const AsyncDevelopment = AsyncRoute('./Development.js');

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Navbar />
        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/about' exact component={AsyncAbout} />
          <Route path='/loader' exact component={AsyncLoader} />

          <Route component={AsyncDevelopment} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
