import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// Assets
import { LOGOS } from '../assets/img/logos';
import { GRAPHICS } from '../assets/img/graphics';
import { VIDEOS } from '../assets/img/gifs';

function Index() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography variant='body2' className={classes.content}>
          TECHNOLOGY . ENTERTAINMENT . DESIGN
        </Typography>
        <img
          className={classes.logo}
          src={LOGOS.TEDxNITRourkela.LIGHT}
          alt='Logo'
        />
        <Typography variant='h1' className={classes.topic}>
          &#8220;Learning from the Past&#8221;
        </Typography>

        <video autoPlay loop muted playsInline className={classes.commingSoon}>
          <source src={VIDEOS.PEAK} type='video/mp4' />
        </video>
        <Typography variant='h2' className={classes.commingSoonContent}>
          This page is under development.
        </Typography>

        <Link to='/'>
          {/** eslint-disable-next-line */}
          <button type='button' className={classes.button}>
            Go to Home
          </button>
        </Link>
      </div>

      <img
        className={`${classes.topRight} `}
        src={GRAPHICS.TOP_RIGHT}
        alt='ellipse'
      />
      <img
        className={`${classes.bottomLeft} `}
        src={GRAPHICS.BOTTOM_LEFT}
        alt='ellipse'
      />
    </div>
  );
}

export default Index;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 'calc(100vh - 150px)',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    marginTop: '150px',
  },
  container: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: theme.palette.common.white,
    opacity: 0.2,
    fontFamily: 'Zilla Slab',
    letterSpacing: 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  logo: {
    marginTop: '20px',
    marginBottom: '30px',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  topic: {
    marginTop: '10px',
    marginBottom: '20px',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  topRight: {
    position: 'absolute',
    top: '100px',
    right: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      height: 'auto',
    },
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      height: 'auto',
    },
  },
  commingSoon: {
    width: 220,
    height: 220,
    marginTop: 40,
    [theme.breakpoints.down('sm')]: {
      width: 170,
      height: 170,
    },
  },
  commingSoonContent: {
    marginBottom: 20,
    marginTop: 20,
    color: '#ffffff',
    fontFamily: 'Zilla Slab',
  },
  button: {
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    color: '#ffffff',
    marginBottom: 60,
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
}));
