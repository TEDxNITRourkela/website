/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { makeStyles, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Utilities
import { analytics } from '../config/firebase';

// Components
import Index from '../components/homepage/index';
import Subscribe from '../components/homepage/Subscription';
import TedContent from '../components/homepage/TedContent';
import Partners from '../components/partner/Partners';
import ContentBanner from '../components/shared/ContentBanner';
import Incentives from '../components/participate/Incentives';

// Placeholder
import { PARTNER } from '../assets/placeholder/partner';
import { CONTENT2 } from '../assets/placeholder/homepage';

function Home() {
  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Home Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
      </Helmet>

      {/* <Ticket short /> */}

      <Index />

      <ContentBanner DATA={CONTENT2.TWO} smallLogo wrapContainer />
      <ContentBanner DATA={CONTENT2.ONE} wrapContainer />

      <Partners DATA={PARTNER.FIVE} home main />

      {/* <Subscribe /> */}
    </>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: theme.palette.background.default,
    marginTop: '100px',
    position: 'relative',
  },
}));
