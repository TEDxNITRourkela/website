import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Container } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ReactTypeformEmbed } from 'react-typeform-embed';

// Utilities
import { analytics } from '../config/firebase';

// Assets
import { GRAPHICS } from '../assets/img/graphics';

function About() {
  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Campus Ambassador Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Campus Ambassador</title>
        <meta name='title' content='TEDxNITRourkela | Campus Ambassador' />
      </Helmet>

      <Container className={classes.root}>
        <div>
          <ReactTypeformEmbed
            hideHeaders
            autoOpen
            url='https://form.typeform.com/to/sSMmZcrG'
          />
        </div>
      </Container>
      <img src={GRAPHICS.TOP_LEFT} alt='top left' className={classes.topLeft} />
    </>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    marginTop: '100px',
    paddingTop: '50px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '20px',
    },
  },
  title: {
    width: '100%',
    textAlign: 'center',
    font: 'Zilla Slab',
    weight: '700',
    fontSize: '36px',
    lineHeight: '43px',
    color: '#ffffff',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
