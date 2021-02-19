import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Container } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Components
import GuestCard from '../components/speakers/SpeakerCard';

// Utilities
import { analytics } from '../config/firebase';

// Assets
import { GUESTS } from '../assets/placeholder/speakers';
import { GRAPHICS } from '../assets/img/graphics';

function About() {
  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Speakers Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Speakers</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />
      </Helmet>

      <Container className={classes.root}>
        <h1 className={classes.title}>Speakers & Performers</h1>

        <div className={classes.guestsContainer}>
          {GUESTS.map(
            ({ name, description, shortDescription, image, links }, index) => (
              <GuestCard
                // eslint-disable-next-line
                key={index}
                name={name}
                description={description}
                shortDescription={shortDescription}
                image={image}
                links={links}
              />
            ),
          )}
        </div>
      </Container>
      <img src={GRAPHICS.TOP_LEFT} alt='top left' className={classes.topLeft} />
    </>
  );
}

export default About;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
    marginTop: '100px',
    paddingTop: '50px',
    position: 'relative',
  },
  guestsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
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
