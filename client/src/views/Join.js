import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';

// Utilities
import { analytics } from '../config/firebase';

// Component
import Induction from '../components/join/Induction';
import Details from '../components/join/Details';

// Asset
import { GRAPHICS } from '../assets/img/graphics';

function Join() {
  useEffect(() => {
    analytics().logEvent('Join Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | join</title>
        <meta name='title' content='TEDxNITRourkela | Join' />
        <link rel='canonical' href='https://tedxnitrourkela.com/join' />
      </Helmet>

      <Container>
        <img
          src={GRAPHICS.TOP_LEFT}
          alt='circles'
          style={{ position: 'absolute', left: 0, top: 0, zIndex: 2 }}
        />
        <Induction />
        <Details />
      </Container>
    </>
  );
}

export default Join;
