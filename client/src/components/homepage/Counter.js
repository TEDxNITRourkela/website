import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Countdown, { zeroPad } from 'react-countdown';

function Counter() {
  const classes = useStyles();
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <div />;
    }
    return (
      <div className={classes.counterContainer}>
        <div className={classes.counterSubContainer}>
          {/* eslint-disable-next-line */}
          <span className={classes.counter}>{zeroPad(days)}:</span>
          <span className={`${classes.counterLabel} ${classes.shiftLeftDays}`}>
            Days
          </span>
        </div>
        <div className={classes.counterSubContainer}>
          {/* eslint-disable-next-line */}
          <span className={classes.counter}>{zeroPad(hours)}:</span>
          <span
            className={`${classes.counterLabel}
                  ${classes.shiftLeftHours}`}
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
  };

  return (
    <div>
      <Countdown date='2021-03-13T10:30:00Z' renderer={renderer} />
    </div>
  );
}

export default Counter;

const useStyles = makeStyles((theme) => ({
  counterContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: '80px',
    marginBottom: '90px',
    padding: 0,
  },
  counterSubContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '28%',
    margin: 0,
    padding: 0,
  },
  counter: {
    color: '#FFFFFF',
    fontFamily: 'Digital',
    fontWeight: 'normal',
    fontSize: '120px',
    lineHeight: '120px',
    textShadow: '0px 0px 6px #0078BC',
    [theme.breakpoints.down('sm')]: {
      fontSize: '50px',
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
