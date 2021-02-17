/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { makeStyles, Typography, Button } from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { TICKETS } from '../assets/img/pages';

const PAYMENT_STATUS = {
  SUCCESS: 'Payment Successful',
  FAIL: 'Payment Failure',
  CANCEL: 'Payment Cancelled',
  UNINITIATED: 'Payment un-initiated',
  INITIATED: 'Payment initiated',
};

function Tickets() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const classes = useStyles();

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
    <div className={classes.root}>
      <img
        className={classes.topLeft}
        src={GRAPHICS.TOP_LEFT}
        alt='Top Left Graphics'
      />

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

        <a href='https://files.tedxnitrourkela.com/Ticket_TnC.pdf'>
          <Typography variant='body2' className={classes.terms}>
            {/* eslint-disable-next-line */}
            {'* T&Cs Apply'}
          </Typography>
        </a>
      </div>
    </div>
  );
}

export default function IntegratedTickets() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Tickets />
    </SnackbarProvider>
  );
}

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
    minWidth: '150px',
    minHeight: '40px',
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
  terms: {
    color: theme.palette.common.white,
    opacity: '80%',
    marginBottom: 60,
    marginTop: 15,
    fontSize: '10px',
  },
}));
