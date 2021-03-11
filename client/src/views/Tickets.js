/* eslint-disable no-undef */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';

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
import Modal from '../components/shared/Modal';
import ContentBanner from '../components/shared/ContentBanner';

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

  const paymentLink = isReferral
    ? `https://www.instamojo.com/@StudentActivityCenter/${referrals[3]}/`
    : /* eslint-disable-next-line */
      'https://www.instamojo.com/@StudentActivityCenter/l2819ae69330f4c8a8ee450758aa6b022/';

  // Component States
  const [modalOpen, setModalOpen] = useState(false);
  const [googleFormOpen, setGoogleFormOpen] = useState(false);
  // const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Button Handlers
  const handleYoutubeClick = () => {
    setModalOpen(false);
    setGoogleFormOpen(true);
  };
  const handleAirmeetClick = () => {
    setModalOpen(false);

    // Log Button Payment Event
    analytics().logEvent('Pay Button Clicked');

    if (Instamojo) Instamojo.open(paymentLink);
  };

  const classes = useStyles();

  useEffect(() => {
    analytics().logEvent('Tickets Page Loaded');
  }, []);

  const modalAction = (
    <div className={classes.actionsContainer}>
      <button
        onClick={handleYoutubeClick}
        onKeyDown={handleYoutubeClick}
        className={classes.button}
        type='button'
      >
        Register to watch YouTube Livestream (Free)
      </button>

      <button
        onClick={handleAirmeetClick}
        onKeyDown={handleAirmeetClick}
        className={classes.button}
        type='button'
      >
        Become a part of the event at Airmeet
      </button>
    </div>
  );

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
          <Ticket handlePayment={handleAirmeetClick} />

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
        <GoogleForm
          open={googleFormOpen}
          setOpen={setGoogleFormOpen}
          setModalOpen={setModalOpen}
        />
      </Container>

      <Typography className={classes.title} variant='h2'>
        Attendee Kit
      </Typography>

      <ContentBanner DATA={TICKETS.BANNER} />

      <div className={classes.carouselContainer}>
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

      <Modal
        title='NITR Student Registeration'
        content='Please choose the relevant option. Only registered IDs will get to see event live on YouTube'
        actions={modalAction}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 150px)',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    marginTop: '150px',
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
    marginTop: 30,
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    margin: 'auto 10px',
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    color: '#ffffff',
    minWidth: '150px',
    width: 'auto',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
}));
