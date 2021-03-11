import React, { useEffect, useRef } from 'react';

// Libraries
import { Container, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { ReactTypeformEmbed } from 'react-typeform-embed';

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
  const typeform = useRef();

  useEffect(() => {
    analytics().logEvent('Campus Ambassador Page Loaded');
  }, []);

  const openForm = () => typeform.current.typeform.open();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela | Campus Ambassador</title>
        <meta name='title' content='TEDxNITRourkela | Campus Ambassador' />
        <meta name='description' content={PARTICIPATE.INTRO.CONTENT} />
        <link rel='canonical' href='https://tedxnitrourkela.com/participate' />
      </Helmet>

      <Container>
        <Intro
          title={PARTICIPATE.INTRO.TITLE}
          content={PARTICIPATE.INTRO.CONTENT}
        />
        <ContentBanner DATA={PARTICIPATE.BANNER} />
        <Incentives />

        <ReactTypeformEmbed
          ref={typeform}
          hideHeaders
          url='https://form.typeform.com/to/sSMmZcrG'
          mode='pop_up'
          popup
          autoOpen={false}
          buttonText='Apply Now!'
        />

        <div className={classes.buttonContainer}>
          <button onClick={openForm} type='button' className={classes.button}>
            Apply Now
          </button>
        </div>
      </Container>
      <img src={GRAPHICS.TOP_LEFT} alt='top left' className={classes.topLeft} />
    </div>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 150px)',
    backgroundColor: theme.palette.background.default,
    marginTop: '150px',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  buttonContainer: {
    width: '100%',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    border: '1px solid rgba(255,255,255,0.5)',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '0px 20px',
    color: '#ffffff',
    minWidth: '150px',
    minHeight: '50px',
    width: 'auto',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
}));
