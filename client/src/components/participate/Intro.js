import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';

function Participate({ title, content }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h2'>
        {title}
      </Typography>

      {typeof content === 'string' ? (
        <Typography className={classes.content} variant='body2'>
          {content}
        </Typography>
      ) : (
        content.map((point) => (
          <Typography
            className={classes.content}
            variant='body2'
            style={{ marginTop: 20 }}
          >
            {point}
          </Typography>
        ))
      )}

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
    fontFamily: 'Helvetica',
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
