import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Countdown, { zeroPad } from 'react-countdown';

import vector from '../assets/img/v1/vector.svg';
import network from '../assets/img/v1/network.svg';
import leftSemi from '../assets/img/v1/left_semi.svg';
import rightSemi from '../assets/img/v1/right_semi.svg';
import verticalRectangle from '../assets/img/v1/vertical_rectangle.svg';
import horizontalRectangle from '../assets/img/v1/horizontal_rectangle.svg';
import logo from '../assets/img/logo.png';

function App() {
  const classes = useStyles();

  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return;
    } else {
      return (
        <div className={classes.counterContainer}>
          <div className={classes.counterSubContainer}>
            <span className={classes.counter}>{zeroPad(days)}:</span>
            <span
              className={`${classes.counterLabel} ${classes.shiftLeftDays}`}
            >
              Days
            </span>
          </div>
          <div className={classes.counterSubContainer}>
            <span className={classes.counter}>{zeroPad(hours)}:</span>
            <span
              className={`${classes.counterLabel} ${classes.shiftLeftHours}`}
            >
              Hours
            </span>
          </div>
          <div className={classes.counterSubContainer}>
            <span className={classes.counter}>{zeroPad(minutes)}</span>
            <span className={classes.counterLabel}>Minutes</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={classes.screen}>
      <div className={classes.container}>
        <h2 className={classes.content}>TECHNOLOGY . ENTERTAINMENT . DESIGN</h2>

        <img className={classes.logo} src={logo} alt='Logo' />

        <h2 className={classes.date}>13th March 2021</h2>

        <Countdown date={'2021-03-13T00:00:00'} renderer={renderer} />
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
    width: '35%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '170px',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: '30px',
    },
  },
  logo: {
    marginBottom: 30,
    marginTop: 20,
    width: '85%',
    [theme.breakpoints.down('xs')]: {
      width: '77%',
    },
  },
  content: {
    width: '100%',
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.5)',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Zilla Slab, serif',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 12,
      letterSpacing: 1,
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
    [theme.breakpoints.down('xs')]: {
      top: '-10px',
    },
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
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  right: {
    right: 0,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
    [theme.breakpoints.down('xs')]: {
      width: '55%',
      marginTop: 100,
    },
  },
  counterSubContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '33%',
  },
  counter: {
    color: '#FFFFFF',
    fontFamily: 'Digital',
    fontWeight: 'normal',
    fontSize: '120px',
    lineHeight: '120px',
    textShadow: '0px 0px 6px #0078BC',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
      lineHeight: '50px',
    },
  },
  counterLabel: {
    fontFamily: 'Zilla Slab',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '24px',
    lineHeight: '29px',
    color: '#FF2B06',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '16px',
      fontSize: '12px',
      lineHeight: '20px',
    },
  },
  shiftLeftHours: {
    marginRight: 30,
  },
  shiftLeftDays: {
    marginRight: 50,
    [theme.breakpoints.down('xs')]: {
      marginRight: '40px',
    },
  },
}));
