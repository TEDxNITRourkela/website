/* eslint-disable */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Countdown, { zeroPad } from 'react-countdown';

function Counter() {
  const classes = useStyles();
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div />;
    }
    return (
      <span className={classes.counterContainer}>
        {/* <div className={classes.counterSubContainer}> */}
        {/* eslint-disable-next-line */}
        <span className={classes.counter}>{zeroPad(days)}:</span>
        {/* <span className={`${classes.counterLabel} 
          ${classes.shiftLeftDays}`}>
            Days
          </span> */}
        {/* </div> */}
        {/* <div className={classes.counterSubContainer}> */}
        {/* eslint-disable-next-line */}
        <span className={classes.counter}>{zeroPad(hours)}:</span>
        {/* <span
            className={`${classes.counterLabel}
                  ${classes.shiftLeftHours}`}
          >
            Hours
          </span> */}
        {/* </div> */}
        {/* <div className={classes.counterSubContainer}> */}
        <span className={classes.counter}>{zeroPad(minutes)}:</span>
        {/* <span className={classes.counterLabel}>Minutes</span> */}
        {/* </div> */}
        <span className={classes.counter}>{zeroPad(seconds)}</span>
      </span>
    );
  };

  return (
    <div style={{ display: 'inlineBlock', width: '100px', margin: 'auto 5px' }}>
      <Countdown date={new Date(1615581000000)} renderer={renderer} />
    </div>
  );
}

export default Counter;

const useStyles = makeStyles((theme) => ({
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100px',
    // marginTop: '80px',
    // marginBottom: '90px',
    // padding: 0,
  },
  counterSubContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // width: '28%',
    margin: 0,
    padding: 0,
  },
  counter: {
    color: '#232323',
    fontFamily: 'Helvetica',
    fontWeight: '600',
    fontSize: '1rem',
    lineHeight: '1.25rem',
    // textShadow: '0px 0px 6px #0078BC',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  counterLabel: {
    fontFamily: 'Zilla Slab',
    fontStyle: 'normal',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: '24px',
    lineHeight: '29px',
    color: '#FF2B06',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  shiftLeftHours: {
    marginRight: 30,
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
  shiftLeftDays: {
    marginRight: 50,
    [theme.breakpoints.down('sm')]: {
      marginRight: 20,
    },
  },
}));
