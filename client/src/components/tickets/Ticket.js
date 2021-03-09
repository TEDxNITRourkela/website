/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Assets
import { TICKETS } from '../../assets/img/pages';

// Utilities
import createBrowserHistory from '../../utils/history';

const PAYMENT_STATUS = {
  SUCCESS: 'Payment Successful',
  FAIL: 'Payment Failure',
  CANCEL: 'Payment Cancelled',
  UNINITIATED: 'Payment un-initiated',
  INITIATED: 'Payment initiated',
};

function Tickets({ short, handlePayment }) {
  const imageURL = TICKETS.NOPRICE;

  // Snackbar functions
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.instamojo.com/v1/checkout.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  const handlePaymentClick = () => {
    if (Instamojo) {
      Instamojo.configure({
        handlers: {
          onOpen: onPayOpen,
          onClose: onPayClose,
          onSuccess: onPaySuccess,
          onFailure: onPayFail,
        },
      });
    }

    handlePayment();
  };

  return (
    <div className={classes.container}>
      <div className={classes.ticketContainer}>
        <img
          className={classes.ticket}
          src={imageURL}
          alt='TEDxNITRourkela 2021 Ticket'
        />

        <button
          onClick={
            short
              ? () => createBrowserHistory.push('/tickets')
              : handlePaymentClick
          }
          type='button'
          className={classes.button}
        >
          {short ? 'Know More' : 'Buy Now'}
        </button>
      </div>
    </div>
  );
}

export default function IntegratedTickets({ short = false, handlePayment }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <Tickets short={short} handlePayment={handlePayment} />
    </SnackbarProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.default,
    marginTop: (short) => (short ? '0px' : '100px'),
    [theme.breakpoints.up('md')]: {
      width: (short) => (short ? '60%' : '100%'),
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  ticketContainer: {
    position: 'relative',
    width: '95%',
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
    minWidth: (short) => (short ? '100px' : '120px'),
    minHeight: (short) => (short ? '30px' : '35px'),
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
