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
import Partners from '../components/homepage/Partners';
import ContentBanner from '../components/shared/ContentBanner';
import Incentives from '../components/participate/Incentives';

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
      <Container className={classes.container}>
        <Incentives title='Campus Representative Program' />

        <Link to='/campus_ambassadors' className={classes.link}>
          <button type='button' className={classes.button}>
            Know More
          </button>
        </Link>
      </Container>

      {/* <Subscribe /> */}
      {/* <Partners /> */}
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    marginTop: 50,
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: 'auto 20px',
    color: '#ffffff',
    minWidth: '150px',
    minHeight: '30px',
    width: 'auto',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
}));
