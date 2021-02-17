/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { TICKETS } from '../assets/img/pages';

function Tickets() {
  const classes = useStyles();

  const onPayOpen = () => {};
  const onPayClose = () => {};

  const onPaySuccess = () => {};
  const onPayFail = () => {};

  const handlePayment = () => {
    if (Instamojo) {
      /* Configuring Handlers */
      Instamojo.configure({
        handlers: {
          onOpen: onPayOpen,
          onClose: onPayClose,
          onSuccess: onPaySuccess,
          onFailure: onPayFail,
        },
      });

      Instamojo.open(
        /* eslint-disable-next-line */
        'https://www.instamojo.com/@StudentActivityCentre/l934b8e36f56b4793a666ff3a3ae2f959/',
      );
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.instamojo.com/v1/checkout.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className={classes.root}>
      <img
        className={classes.topLeft}
        src={GRAPHICS.TOP_LEFT}
        alt='Top Left Graphics'
      />

      <div className={classes.container}>
        <img
          className={classes.ticket}
          src={TICKETS.TICKET}
          alt='TEDxNITRourkela 2021 Ticket'
        />

        <button
          onClick={handlePayment}
          type='button'
          className={classes.button}
        >
          Buy Now
        </button>

        <Typography variant='body2' className={classes.terms}>
          {/* eslint-disable-next-line */}
          {'* T&Cs Apply'}
        </Typography>
      </div>
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100% - 100px)',
    minHeight: '90vh',
    marginTop: '100px',
    position: 'relative',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  ticket: {
    width: '65%',
    height: 'auto',
    margin: '50px auto',
    // backgroundColor: 'white',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  button: {
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    color: '#ffffff',
    minWidth: '100px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
  terms: {
    color: theme.palette.common.white,
    opacity: '80%',
    marginBottom: 60,
    marginTop: 15,
    fontSize: '10px',
  },
}));
