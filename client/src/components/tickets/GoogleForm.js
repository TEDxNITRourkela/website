import React, { useState } from 'react';

// Libraries
import { makeStyles, Typography, Modal } from '@material-ui/core';

function Tickets() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const FormBody = (
    <div className={classes.paper}>
      <iframe
        // eslint-disable-next-line
        src='https://docs.google.com/forms/d/e/1FAIpQLSclq2nZh3Y0-k5SocFnCZeXY5nJ_vwq6c9dGn8ivOFRV4dW9w/viewform?embedded=true'
        height='100%'
        width='100%'
        frameBorder='0'
        marginHeight='0'
        marginWidth='0'
        title='Google Form for NITR Students Application'
      />
      <span
        onClick={handleClose}
        onKeyDown={handleClose}
        className={classes.closeButton}
        role='button'
        tabIndex='0'
      >
        <i className='fas fa-times' />
      </span>
    </div>
  );

  return (
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
        {FormBody}
      </Modal>
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
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
