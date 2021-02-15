import React, { useEffect, useState } from 'react';

// Libraries
import { Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import MessengerCustomerChat from 'react-messenger-customer-chat';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';
import ScrollToTopOnMount from '../components/shared/ScrollToTopOnMount';
import ScrollToTop from '../components/shared/ScrollToTop';
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
const AsyncPartner = AsyncRoute('./Partner');
const AsyncSpeakers = AsyncRoute('./Speakers.js');
const AsyncDevelopment = AsyncRoute('./Development.js');
const AsyncLoader = AsyncRoute('../components/shared/ActivityIndicator');

function App() {
  const [showBoxShadow, setShowBoxShadow] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShowBoxShadow(true);
    } else {
      setShowBoxShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <ScrollToTopOnMount />
        <Navbar showBoxShadow={showBoxShadow} />

        <Switch>
          <Route path='/' exact component={AsyncHome} />
          <Route path='/about' exact component={AsyncAbout} />
          <Route path='/partners' exact component={AsyncPartner} />
          <Route path='/speakers' exact component={AsyncSpeakers} />

          <Route path='/loader' exact component={AsyncLoader} />
          <Route path='*' component={AsyncDevelopment} />
        </Switch>

        <MessengerCustomerChat
          pageId='201042233253912'
          appId='424924968660862'
          themeColor='#FF2B06'
        />

        <ScrollToTop />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
