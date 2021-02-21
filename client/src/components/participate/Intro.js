import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';

// Assets
import { PARTICIPATE } from '../../assets/placeholder/participate';

function Participate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2'>{PARTICIPATE.INTRO.TITLE}</Typography>
      <Typography variant='body1'>{PARTICIPATE.INTRO.CONTENT}</Typography>
    </div>
  );
}

export default Participate;

const useStyles = makeStyles((theme) => ({
  root: {
    // width: '100%',
    maxHeight: '200px',
    color: theme.palette.common.white,
  },
}));
