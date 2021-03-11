/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { makeStyles, Container, Typography } from '@material-ui/core';
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
import { HOME } from '../assets/img/pages';

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
        <link rel='canonical' href='https://tedxnitrourkela.com' />
      </Helmet>

      {/* <Ticket short /> */}

      <Index />

      <Container>
        <Typography variant='h2' className={classes.title}>
          TEDxNITRourkela Virtual Stage
        </Typography>
        <img
          src={HOME.STAGE}
          alt='TEDxNITRourkela Virtual Stage'
          className={classes.image}
        />
      </Container>

      <ContentBanner DATA={CONTENT2.TWO} smallLogo wrapContainer />
      <ContentBanner DATA={CONTENT2.ONE} wrapContainer />

      <Partners DATA={PARTNER.ONE} home main />

      <Container className={classes.videoContainer}>
        <video autoPlay loop muted playsInline className={classes.video}>
          <source src={HOME.LOGO_REVEAL} type='video/mp4' />
        </video>
      </Container>

      {/* <Subscribe /> */}
    </>
  );
}

export default Home;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 150px)',
    backgroundColor: theme.palette.background.default,
    marginTop: '100px',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    marginTop: '100px',
    marginBottom: '50px',
    fontFamily: 'Zilla Slab',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '100px auto',
    marginBottom: '50px',
  },
  video: {
    width: '70%',
    height: 'auto',
    borderRadius: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
