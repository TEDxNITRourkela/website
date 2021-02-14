import React from 'react';

import { LinearProgress, makeStyles } from '@material-ui/core';

function ActivityIndicator() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <LinearProgress color='secondary' />
      </div>
    </>
  );
}

export default ActivityIndicator;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    zIndex: 1000,
    height: window.innerHeight - 265 - 100,
    marginTop: 100,
  },
}));
