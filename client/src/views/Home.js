/* eslint-disable no-unused-vars */
import React from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core';

// Components
import Index from '../components/homepage/index';
import Subscribe from '../components/homepage/Subscription';
import TedContent from '../components/homepage/TedContent';
import Partners from '../components/homepage/Partners';
import ContentBanner from '../components/shared/ContentBanner';

import { CONTENT2 } from '../assets/placeholder/homepage';

function Home() {
  const classes = useStyles();

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
      {/* <Subscribe /> */}
      {/* <Partners /> */}
    </>
  );
}

export default Home;

const useStyles = () => () => ({
  root: {
    width: '100%',
    height: 'calc(100% - 100px)',
    minHeight: '90vh',
    marginTop: '100px',
    position: 'relative',
  },
});
