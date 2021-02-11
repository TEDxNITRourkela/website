import React from 'react';

import { makeStyles, Container } from '@material-ui/core';

// Components
import GuestCard from '../components/speakers/GuestCard';
import defaultSpeaker from '../assets/img/guests/defaultGuest.png';

// Assets

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h1>guest speaker page</h1>

      <GuestCard
        name='John Doe'
        // eslint-disable-next-line
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores iure possimus vitae eveniet reprehenderit dicta neque natus laudantium, itaque labore hic quaerat recusandae cumque quis omnis molestias enim impedit?'
        shortDescription='Design Guru'
        image={defaultSpeaker}
        links={[
          {
            link: '',
            link_type: 'fab fa-linkedin-in',
            link_name: 'linkedin',
          },
          {
            link: '',
            link_type: 'fab fa-twitter',
            link_name: 'twitter',
          },
          {
            link: '',
            link_type: 'fab fa-instagram',
            link_name: 'instagram',
          },
          {
            link: '',
            link_type: 'fab fa-facebook-f',
            link_name: 'facebook',
          },
        ]}
      />
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
}));
