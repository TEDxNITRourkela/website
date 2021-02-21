import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';

// Assets
import { PARTICIPATE } from '../../assets/placeholder/participate';

function Participate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {PARTICIPATE.INTRO.TITLE}
      </Typography>
      <Typography className={classes.content} variant='body2'>
        {PARTICIPATE.INTRO.CONTENT}
      </Typography>

      <div className={classes.horizontalLine} />
    </div>
  );
}

export default Participate;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '250px',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Zilla Slab',
    textAlign: 'center',
  },
  content: {
    fontFamily: 'Zilla Slab',
    width: '55%',
    marginTop: '20px',
    textAlign: 'center',
  },
  horizontalLine: {
    width: '40%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.3,
    marginTop: '50px',
  },
}));
