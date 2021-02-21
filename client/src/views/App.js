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
const AsyncSpeakers = AsyncRoute('./Speakers');
const AsyncTickets = AsyncRoute('./Tickets');
const AsyncCA = AsyncRoute('./Participate.js');
const AsyncWall = AsyncRoute('./Wall.js');
const Async404 = AsyncRoute('./404.js');
const AsyncDevelopment = AsyncRoute('./Development.js');

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
          <Route path='/tickets' exact component={AsyncTickets} />
          <Route path='/campus_ambassadors' exact component={AsyncCA} />
          <Route path='/wall' exact component={AsyncWall} />

          {/* Under Development */}
          <Route path='/events' component={AsyncDevelopment} />
          <Route path='/community' component={AsyncDevelopment} />
          <Route path='/gallery' component={AsyncDevelopment} />

          <Route path='*' component={Async404} />
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
