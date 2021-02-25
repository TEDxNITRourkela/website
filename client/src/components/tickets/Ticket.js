/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

// Libraries
import { makeStyles, Typography, Button, Modal } from '@material-ui/core';
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
  // Logic to determine the type of ticket.
  const referrals = window.location.pathname.split('/');
  let isReferral;
  if (referrals && referrals[1] === 'tickets' && referrals[2] === 'referrals')
    isReferral = true;
  else isReferral = false;

  const paymentLink = isReferral
    ? `https://www.instamojo.com/@StudentActivityCenter/${referrals[3]}/`
    : /* eslint-disable-next-line */
      'https://www.instamojo.com/@StudentActivityCenter/l2819ae69330f4c8a8ee450758aa6b022/';
  const imageURL = isReferral ? TICKETS.DISCOUNTED : TICKETS.TICKET;

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

  // Main Payment function
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

      Instamojo.open(paymentLink);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <iframe
        src='https://docs.google.com/forms/d/e/1FAIpQLSclq2nZh3Y0-k5SocFnCZeXY5nJ_vwq6c9dGn8ivOFRV4dW9w/viewform?embedded=true'
        height='100%'
        width='100%'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
      >
        Loading…
      </iframe>
      <div onClick={handleClose} className={classes.closeButton}>
        <i className='fas fa-times' />
      </div>
    </div>
  );

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
          src={imageURL}
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
      <div className={classes.studentContainer}>
        <Typography variant='h3' className={classes.question}>
          Are you an NITR student? Apply here!!
        </Typography>
        <button
          onClick={handleOpen}
          type='button'
          className={classes.studentButton}
        >
          Apply Now
        </button>
        <Modal open={open} onClose={handleClose}>
          {body}
        </Modal>
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
  studentContainer: {
    minHeight: '100px',
    marginTop: 20,
    marginBottom: (short) => (short ? '20px' : '0px'),
    padding: '24px',
    width: '70%',
    backgroundColor: '#232323',
    borderRadius: '16px',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
      marginTop: 10,
      minHeight: '120px',
      padding: '12px',
      flexDirection: 'column',
    },
  },
  studentButton: {
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: 'auto 20px',
    color: '#ffffff',
    minWidth: (short) => (short ? '100px' : '150px'),
    minHeight: (short) => (short ? '30px' : '40px'),
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
    [theme.breakpoints.down('md')]: {
      minWidth: '120px',
      minHeight: '40px',
    },
  },
  question: {
    textAlign: 'center',
    fontFamily: 'Zilla Slab',
    color: 'rgba(255,255,255,0.5)',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    backgroundColor: '#ede7f6',
    height: '90vh',
    width: '70vw',
    padding: '24px',
    [theme.breakpoints.down('xs')]: {
      width: '100vw',
    },
  },
  closeButton: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: '4px',
  },
}));
