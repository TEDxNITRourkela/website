import React from 'react';

import { makeStyles, Container } from '@material-ui/core';

// Components
import GuestCard from '../components/speakers/SpeakerCard';

// Assets
import { GUESTS } from '../assets/placeholder/speakers';
import topLeft from '../assets/img/homepage/topLeft2.png';

function About() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <h1 className={classes.title}>Speakers & Performers</h1>

        <div className={classes.guestsContainer}>
          {GUESTS.map(
            ({ name, description, shortDescription, image, links }) => (
              <GuestCard
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
      <img src={topLeft} alt='top left' className={classes.topLeft} />
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
