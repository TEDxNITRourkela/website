import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

// assets
// import { PARTNERS } from '../../assets/img/pages';

function Partners() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.title}>
        Partners
      </Typography>

      {/* <div className={classes.partners}>
        <img
          src={PARTNERS.EVERWALL}
          alt='everwall'
          className={classes.logo}
          decoding='auto'
          loading='eager'
        />
        <img
          src={PARTNERS.FLICKR}
          alt='flickr'
          className={classes.logo}
          decoding='auto'
          loading='eager'
        />
        <img
          src={PARTNERS.MAILCHIMP}
          alt='mailchimp'
          className={classes.logo}
          decoding='auto'
          loading='eager'
        />
        <img
          src={PARTNERS.SHUTTERSTOCK}
          alt='shutterstock'
          className={classes.logo}
          decoding='auto'
          loading='eager'
        />
      </div> */}
    </div>
  );
}

export default Partners;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Zilla Slab',
  },
  partners: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    width: '200px',
    height: 'auto',
    margin: '20px 40px',
  },
}));
