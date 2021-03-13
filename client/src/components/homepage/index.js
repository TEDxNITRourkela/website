import React, { useState } from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
// import Counter from './Counter';
// import Ticket from '../tickets/Ticket';
import SpeakerCard from '../speakers/SpeakerCard';
import Modal from '../shared/Modal';

// Assets
import { VIDEOS } from '../../assets/img/gifs';
import { GRAPHICS } from '../../assets/img/graphics';
import { GUESTS } from '../../assets/placeholder/speakers';
import { shuffleArray } from '../../utils/shuffleArray';
// import { LOGOS } from '../../assets/img/logos';
import { HOME } from '../../assets/img/pages';

const GUEST_LIST = GUESTS;
shuffleArray(GUEST_LIST);

function Index() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const modalAction = (
    <div className={classes.actionsContainer}>
      <a
        href='https://live.tedxnitrourkela.com'
        className={classes.button}
        type='button'
      >
        Join the event on Airmeet
      </a>

      <a
        href='https://youtu.be/4H43JgLkx8Q'
        className={classes.button}
        type='button'
      >
        Watch the event on YouTube
      </a>
    </div>
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.someContainer}>
          <Typography variant='body2' className={classes.content}>
            TECHNOLOGY . ENTERTAINMENT . DESIGN
          </Typography>
          {/* <img
            className={classes.logo}
            src={LOGOS.TEDxNITRourkela.LIGHT}
            alt='Logo'
            decoding='auto'
            loading='eager'
          /> */}
          <Typography variant='h3' className={classes.topic}>
            &#8220;Learning from the Past&#8221;
          </Typography>
          {/* <Counter /> */}

          <div className={classes.eventContainer}>
            <img
              className={classes.liveEvent}
              src={HOME.EVENT_LIVE}
              alt='Logo'
              decoding='auto'
              loading='eager'
            />

            <div className={classes.buttonContainer}>

              <button
                type='button'
                onClick={handleClick}
                onKeyDown={handleClick}
                className={classes.button}
              >
                Join the Event (NITR Students)
              </button>

              <a
                href='https://live.tedxnitrourkela.com'
                className={classes.button}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '2px solid #FF2B06',
                }}
              >
                Join the Event
              </a>

              <a
                href='https://meet.google.com/jqa-xeed-xjc'
                className={classes.button}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Get Support
              </a>
            </div>
          </div>

          {/* <Ticket short /> */}
        </div>

        <div className={classes.carousel}>
          {GUEST_LIST.map(
            ({
              name,
              description,
              shortDescription,
              image,
              links,
              isLongCard,
            }) => (
              <div key={name} className={classes.speakerContainer}>
                <SpeakerCard
                  key={name}
                  name={name}
                  description={description}
                  shortDescription={shortDescription}
                  image={image}
                  links={links}
                  isLongCard={isLongCard}
                />
              </div>
            ),
          )}
        </div>

        <div className={classes.scrollDown}>
          <video autoPlay loop muted playsInline className={classes.scrollIcon}>
            <source src={VIDEOS.SCROLL_DOWN} type='video/mp4' />
          </video>

          <Typography variant='body1' className={classes.scrContent}>
            Scroll Down
          </Typography>
        </div>
      </div>

      <img
        className={`${classes.topRight} `}
        src={GRAPHICS.TOP_RIGHT}
        alt='ellipse'
      />
      <img
        className={`${classes.bottomLeft} `}
        src={GRAPHICS.BOTTOM_LEFT}
        alt='ellipse'
      />

      <Modal
        title='NITR Student Event Join'
        // eslint-disable-next-line
        content='Please choose the relevant option. The students who bought the ticket can join the event on Airmeet.'
        actions={modalAction}
        open={modalOpen}
        setOpen={setModalOpen}
      />
    </div>
  );
}

export default Index;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100% - 150px)',
    minHeight: '100vh',
  },
  container: {
    marginTop: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    marginTop: '10px',
    color: theme.palette.common.white,
    opacity: 0.2,
    fontFamily: 'Zilla Slab',
    letterSpacing: 3,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
  },
  logo: {
    marginTop: '20px',
    width: '20%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  topic: {
    marginTop: '10px',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  scroll: {
    marginBottom: '50px',
  },
  scrContent: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    fontWeight: 400,
  },
  topRight: {
    position: 'absolute',
    top: '100px',
    right: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      height: 'auto',
    },
  },
  bottomLeft: {
    position: 'absolute',
    bottom: '-140px',
    left: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '30%',
      height: 'auto',
    },
  },
  scrollDown: {
    width: '100%',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollIcon: {
    width: 36,
    height: 36,
    marginBottom: 10,
  },
  carousel: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // padding: '40px 20px',
    overflowX: 'scroll',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  someContainer: {
    width: '70%',
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  speakerContainer: {
    margin: '50px 10px',
  },
  button: {
    margin: '5px 10px',
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    color: '#ffffff',
    minWidth: '220px',
    width: 'auto',
    fontSize: '14px',
    height: '45px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
  liveEvent: {
    width: '70%',
    height: 'auto',
    marginBottom: 50,
    marginTop: '50px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  eventContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '50px',
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));
