import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import vector from '../assets/img/v1/vector.svg';
import network from '../assets/img/v1/network.svg';
import leftSemi from '../assets/img/v1/left_semi.svg';
import rightSemi from '../assets/img/v1/right_semi.svg';
import verticalRectangle from '../assets/img/v1/vertical_rectangle.svg';
import horizontalRectangle from '../assets/img/v1/horizontal_rectangle.svg';
import logo from '../assets/img/logo.svg';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <div className={classes.container}>
        <h2 className={classes.content}>TECHNOLOGY . ENTERTAINMENT . DESIGN</h2>

        <img className={classes.logo} src={logo} alt='Logo' />

        <h2 className={classes.date}>13th March 2021</h2>
      </div>

      {/* <a
        className={classes.contactUs}
        href='mailto:contact-us@tedxnitrourkela.com'
      >
        Contact Us
      </a> */}

      <img className={`${classes.vector} `} src={vector} alt='vector' />
      <img className={`${classes.network} `} src={network} alt='network' />
      <img className={`${classes.leftSemi} `} src={leftSemi} alt='leftSemi' />
      <img
        className={`${classes.rightSemi} `}
        src={rightSemi}
        alt='rightSemi'
      />
      <img
        className={`${classes.verticalRectangle} `}
        src={verticalRectangle}
        alt='vertical rectangle'
      />
      <img
        className={`${classes.verticalRectangle} ${classes.leftside}`}
        src={verticalRectangle}
        alt='vertical rectangle'
      />
      <img
        className={`${classes.horizontalRectangle} ${classes.left}`}
        src={horizontalRectangle}
        alt='horizontal rectangle'
      />
      <img
        className={`${classes.horizontalRectangle} ${classes.right}`}
        src={horizontalRectangle}
        alt='horizontal rectangle'
      />

      <MessengerCustomerChat
        pageId='201042233253912'
        appId='424924968660862'
        themeColor='#FF2B06'
      />
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  screen: {
    width: '100%',
    minHeight: window.innerHeight,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  container: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  logo: {
    marginBottom: 30,
    marginTop: 20,
    width: '82%',
    [theme.breakpoints.down('xs')]: {
      width: '75%',
    },
  },
  content: {
    width: '100%',
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.5)',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Zilla Slab, serif',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      letterSpacing: 2,
    },
  },
  date: {
    width: '100%',
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.5)',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Zilla Slab, serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '300',
    marginTop: 20,
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  contactUs: {
    position: 'absolute',
    bottom: 80,
    textDecoration: 'underline',
    color: '#fff',
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  vector: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    margin: 0,
    [theme.breakpoints.down('xs')]: {
      width: '250%',
    },
  },
  network: {
    position: 'absolute',
    top: 100,
    zIndex: 0,
    width: '40%',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  },
  leftSemi: {
    position: 'absolute',
    top: '55%',
    left: 0,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      width: '18%',
    },
  },
  rightSemi: {
    position: 'absolute',
    top: '55%',
    right: 0,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      width: '18%',
    },
  },
  verticalRectangle: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '95%',
    zIndex: 0,
  },
  leftside: {
    left: 0,
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'inline',
    },
  },
  horizontalRectangle: {
    position: 'absolute',
    top: 0,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
}));
