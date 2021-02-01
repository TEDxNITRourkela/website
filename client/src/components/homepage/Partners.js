import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

// assets
import mailchimp from '../../assets/img/partners/mailchimp.png';
import flickr from '../../assets/img/partners/flickr.png';
import shutterstock from '../../assets/img/partners/shutterstock.png';
import everwall from '../../assets/img/partners/everwall.png';

function Partners() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.title}>
        Partners
      </Typography>

      <div className={classes.partners}>
        <img src={mailchimp} alt='mailchimp' className={classes.logo} />
        <img src={shutterstock} alt='mailchimp' className={classes.logo} />
        <img src={everwall} alt='mailchimp' className={classes.logo} />
        <img src={flickr} alt='mailchimp' className={classes.logo} />
      </div>
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
