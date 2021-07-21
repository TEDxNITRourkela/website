import React, { useEffect, useRef } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Widget } from '@typeform/embed-react';

// Utilities
import { analytics } from '../config/firebase';

// Component
import Details from '../components/join/Details';
import Terms from '../components/join/Terms';
import Team from '../components/join/Team';

// Asset
import image1 from '../assets/img/images/image1.png';
import image2 from '../assets/img/images/image2.png';

function Join() {
  const classes = useStyles();
  useEffect(() => {
    analytics().logEvent('Join Page Loaded');
  }, []);
  const ref = useRef();
  function scrollFun() {
    ref.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Join</title>
        <meta name='title' content='TEDxNITRourkela | Join' />
        <link rel='canonical' href='https://tedxnitrourkela.com/join' />
      </Helmet>

      <div>
        <img src={image1} alt='circles' className={classes.image1} />
        <img src={image2} alt='circles' className={classes.image2} />
        <Container>
          <Details scrollFun={scrollFun} />
        </Container>
        <hr color='red' style={{ margin: '30px 0px' }} />
        <Container>
          <Team />
          <Container ref={ref}>
            <Widget id='VytpJUSE' style={{ height: '70vh' }} />
          </Container>
          <Terms />
        </Container>
      </div>
    </>
  );
}

export default Join;

const useStyles = makeStyles((theme) => ({
  image1: {
    position: 'absolute',
    left: 0,
    top: 0,
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
  image2: {
    position: 'absolute',
    right: 0,
    top: 0,
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
}));
