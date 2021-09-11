import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Components
import GuestCard from '../components/speakers/SpeakerCard';

// Utilities
import { analytics } from '../config/firebase';

// Assets
import { GUESTS, LIVEGUESTS } from '../assets/placeholder/speakers';
import { GRAPHICS } from '../assets/img/graphics';

function About() {
  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Speakers Page Loaded');
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela | Speakers</title>
        <meta name='title' content='TEDxNITRourkela | Speakers' />
        <link rel='canonical' href='https://tedxnitrourkela.com/speakers' />
        {GUESTS.map(({ description, name }) => (
          <meta
            key={name}
            name='description'
            content={`TEDxNITRourkela Speaker | ${name} |${description}`}
          />
        ))}
      </Helmet>

      <Container>
        <Typography variant='h1' className={classes.title}>
          TEDxNITRourkelaLIVE 2021
        </Typography>

        <div className={classes.guestsContainer}>
          {LIVEGUESTS.map(
            ({
              name,
              description,
              shortDescription,
              image,
              links,
              isLongCard,
            }) => (
              <GuestCard
                key={name}
                name={name}
                description={description}
                shortDescription={shortDescription}
                image={image}
                links={links}
                isLongCard={isLongCard}
              />
            ),
          )}
        </div>
        <Typography variant='h1' className={classes.title}>
          TEDxNITRourkela 2021
        </Typography>

        <div className={classes.guestsContainer}>
          {GUESTS.map(
            ({
              name,
              description,
              shortDescription,
              image,
              links,
              isLongCard,
            }) => (
              <GuestCard
                key={name}
                name={name}
                description={description}
                shortDescription={shortDescription}
                image={image}
                links={links}
                isLongCard={isLongCard}
              />
            ),
          )}
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
    fontFamily: 'Zilla Slab',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 40,
    marginBottom: 30,
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));
