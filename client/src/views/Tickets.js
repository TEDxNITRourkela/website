/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import Carousel from 'react-material-ui-carousel';

// Utilities
import { analytics } from '../config/firebase';

// Components
import Ticket from '../components/tickets/Ticket';
import CustomTable from '../components/shared/Table';
import GoogleForm from '../components/tickets/GoogleForm';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { TICKETS as TICKETS_IMG } from '../assets/img/pages';
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
        <link rel='canonical' href='https://tedxnitrourkela.com/tickets' />
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

      <div className={classes.carouselContainer}>
        <Typography className={classes.title} variant='h2'>
          Attendee Kit
        </Typography>
        <Container>
          <Carousel
            indicators={false}
            animation='slide'
            className={classes.carousel}
          >
            {TICKETS_IMG.ATTENDEE_KIT.map((at, index) => (
              <div
                // eslint-disable-next-line
                key={`attendee-kit-${index}`}
                className={classes.imgContainer}
              >
                <img className={classes.img} src={at} alt='Attendee Kit' />
              </div>
            ))}
          </Carousel>
        </Container>
      </div>
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
  carouselContainer: {
    width: '100%',
    margin: '50px 0px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: '50px 0',
  },
  carousel: {
    width: '100%',
  },
  imgContainer: {
    width: '100%',
    opacity: 0.8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '50%',
    height: 'auto',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  title: {
    fontFamily: 'Zilla Slab',
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
}));
