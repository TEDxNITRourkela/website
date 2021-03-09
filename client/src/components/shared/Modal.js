import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    minHeight: '200px',
    backgroundColor: theme.palette.background.default,
    border: '2px solid #1a1a1a',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    fontFamily: 'Zilla Slab',
    color: '#fff',
  },
  content: {
    fontFamily: 'Helvetica',
    color: '#fff',
    marginBottom: '50px',
  },
}));

export default function TransitionsModal({
  open,
  setOpen,
  title,
  content,
  actions,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography
            className={`${classes.title} transition-modal-title`}
            variant='h2'
          >
            {title}
          </Typography>
          <Typography
            className={`${classes.content} transition-modal-description`}
            variant='body1'
          >
            {content}
          </Typography>
          {actions}
        </div>
      </Fade>
    </Modal>
  );
}
