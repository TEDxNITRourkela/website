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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    zIndex: 1000,
  },
}));
