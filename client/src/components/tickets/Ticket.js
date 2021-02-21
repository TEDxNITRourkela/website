/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Assets
import { TICKETS } from '../../assets/img/pages';

// Utilities
import { analytics } from '../../config/firebase';

const PAYMENT_STATUS = {
  SUCCESS: 'Payment Successful',
  FAIL: 'Payment Failure',
  CANCEL: 'Payment Cancelled',
  UNINITIATED: 'Payment un-initiated',
  INITIATED: 'Payment initiated',
};

function Tickets({ short }) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles(short);

  const action = (key) => (
    <Button
      onClick={() => {
        closeSnackbar(key);
      }}
    >
      Dismiss
    </Button>
  );

  const onPayOpen = () =>
    enqueueSnackbar(PAYMENT_STATUS.INITIATED, {
      variant: 'info',
      persist: true,
      action,
    });
  const onPayClose = () =>
    enqueueSnackbar(PAYMENT_STATUS.CANCEL, {
      variant: 'info',
      persist: true,
      action,
    });
  const onPaySuccess = () =>
    enqueueSnackbar(PAYMENT_STATUS.SUCCESS, {
      variant: 'success',
      persist: true,
      action,
    });
  const onPayFail = () =>
    enqueueSnackbar(PAYMENT_STATUS.FAIL, {
      variant: 'error',
      persist: true,
      action,
    });

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

      // Log Button Payment Event
      analytics().logEvent('Pay Button Clicked');

      Instamojo.open(
        /* eslint-disable-next-line */
        'https://www.instamojo.com/@StudentActivityCenter/l2819ae69330f4c8a8ee450758aa6b022/',
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
    <div className={classes.container}>
      <div className={classes.ticketContainer}>
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
      </div>
    </div>
  );
}

export default function IntegratedTickets({ short = false }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Tickets short={short} />
    </SnackbarProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: (short) => (short ? '70%' : '100%'),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    marginTop: (short) => (short ? '0px' : '100px'),
  },
  ticketContainer: {
    position: 'relative',
    width: '65%',
    minHeight: '25vh',
    margin: '50px auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  ticket: {
    width: '100%',
    height: 'auto',
  },
  button: {
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: 'auto 20px',
    color: '#ffffff',
    minWidth: (short) => (short ? '100px' : '150px'),
    minHeight: (short) => (short ? '30px' : '40px'),
    position: 'absolute',
    bottom: '15%',
    right: '15%',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'translate(-50%, -50%)',
      top: '110%',
      left: '50%',
      minWidth: '120px',
      minHeight: '40px',
    },
  },
}));
