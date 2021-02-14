import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Counter from './Counter';

// Assets
import { GIFS } from '../../assets/img/gifs';
import { GRAPHICS } from '../../assets/img/graphics';
import { LOGOS } from '../../assets/img/logos';

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
        <Counter />

        <div className={classes.scrollDown}>
          <img
            src={GIFS.SCROLL_DOWN}
            alt='Mouse'
            className={classes.scrollIcon}
          />
          <Typography variant='body1' className={classes.scrContent}>
            Scroll Down
          </Typography>
        </div>
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
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
    // width: '100%',
  },
  container: {
    marginTop: '100px',
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
  scroll: {
    marginBottom: '50px',
  },
  scrContent: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    fontWeight: 400,
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
    bottom: '-140px',
    left: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      height: 'auto',
    },
  },
  scrollDown: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollIcon: {
    width: 36,
    height: 36,
    marginBottom: 10,
  },
}));
