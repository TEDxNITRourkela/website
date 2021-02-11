import React from 'react';

import { makeStyles, Container } from '@material-ui/core';

// Components
import GuestCard from '../components/speakers/GuestCard';

// Assets
import { GUESTS } from '../assets/placeholder/speakers';

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>guest speaker page</h1>

      <div className={classes.guestsContainer}>
        {GUESTS.map(({ name, description, shortDescription, image, links }) => (
          <GuestCard
            name={name}
            description={description}
            shortDescription={shortDescription}
            image={image}
            links={links}
          />
        ))}
      </div>
    </Container>
  );
}

export default About;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
    marginTop: '100px',
  },
  guestsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
