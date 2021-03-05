/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Utilities
import { analytics } from '../config/firebase';

// Components
import Ticket from '../components/tickets/Ticket';
import CustomTable from '../components/shared/Table';
import GoogleForm from '../components/tickets/GoogleForm';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { TICKETS } from '../assets/placeholder/tickets';

function Tickets() {
  // Logic to determine the type of ticket.
  const referrals = window.location.pathname.split('/');
  let isReferral;
  if (referrals && referrals[1] === 'tickets' && referrals[2] === 'referrals')
    isReferral = true;
  else isReferral = false;

  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Tickets Page Loaded');
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela | Tickets' />

        <meta name='description' content='TEDxNIRourkela 2021 Event Tickets.' />
      </Helmet>

      <img
        className={classes.topLeft}
        src={GRAPHICS.TOP_LEFT}
        alt='Top Left Graphics'
      />

      <Container className={classes.container}>
        <div className={classes.left}>
          <Ticket />

          <a href='https://files.tedxnitrourkela.com/Ticket_TnC.pdf'>
            <Typography variant='body2' className={classes.terms}>
              {/* eslint-disable-next-line */}
              {'* T&Cs Apply'}
            </Typography>
          </a>
        </div>

        <div className={classes.right}>
          <CustomTable
            title={TICKETS.TITLE}
            rows={isReferral ? TICKETS.TABLE.ROWS_REFERRAL : TICKETS.TABLE.ROWS}
            headings={TICKETS.TABLE.HEADINGS}
            columns={['column2', 'column3']}
            padding={false}
          />
        </div>
      </Container>
      <Container className={classes.bottom}>
        <GoogleForm />
      </Container>
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    marginTop: '100px',
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
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  left: {
    paddingTop: '60px',
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  right: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  bottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
  },
}));
