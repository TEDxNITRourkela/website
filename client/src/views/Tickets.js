/* eslint-disable no-undef */
import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Components
import Ticket from '../components/tickets/Ticket';

// Assets
import { GRAPHICS } from '../assets/img/graphics';

function Tickets() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
      </Helmet>

      <img
        className={classes.topLeft}
        src={GRAPHICS.TOP_LEFT}
        alt='Top Left Graphics'
      />

      <Ticket />

      <a href='https://files.tedxnitrourkela.com/Ticket_TnC.pdf'>
        <Typography variant='body2' className={classes.terms}>
          {/* eslint-disable-next-line */}
          {'* T&Cs Apply'}
        </Typography>
      </a>
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'calc(100vh - 100px)',
    // marginTop: '100px',
    position: 'relative',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  terms: {
    color: theme.palette.common.white,
    opacity: '80%',
    marginBottom: 30,
    marginTop: 15,
    fontSize: '10px',
    textAlign: 'center',
  },
}));
