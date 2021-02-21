import React, { useEffect } from 'react';

// Libraries
import { Container, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
// import { ReactTypeformEmbed } from 'react-typeform-embed';

// Utilities
import { analytics } from '../config/firebase';

// Components
import Intro from '../components/participate/Intro';
import Incentives from '../components/participate/Incentives';
import ContentBanner from '../components/shared/ContentBanner';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { PARTICIPATE } from '../assets/placeholder/participate';

function About() {
  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Campus Ambassador Page Loaded');
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela | Campus Ambassador</title>
        <meta name='title' content='TEDxNITRourkela | Campus Ambassador' />
      </Helmet>

      <Container>
        <Intro />
        <ContentBanner DATA={PARTICIPATE.BANNER} />
        <Incentives />

        {/* <div style={{ marginTop: 500 }}>
          <ReactTypeformEmbed
            hideHeaders
            autoOpen
            url='https://form.typeform.com/to/sSMmZcrG'
          />
        </div> */}
      </Container>
      <img src={GRAPHICS.TOP_LEFT} alt='top left' className={classes.topLeft} />
    </div>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    backgroundColor: theme.palette.background.default,
    marginTop: '100px',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
