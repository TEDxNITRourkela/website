import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Components
// import Counter from './Counter';
import Ticket from '../tickets/Ticket';
import SpeakerCard from '../speakers/SpeakerCard';

// Assets
import { VIDEOS } from '../../assets/img/gifs';
import { GRAPHICS } from '../../assets/img/graphics';
import { GUESTS } from '../../assets/placeholder/speakers';
import { shuffleArray } from '../../utils/shuffleArray';
// import { LOGOS } from '../../assets/img/logos';

const GUEST_LIST = GUESTS;
shuffleArray(GUEST_LIST);

function Index() {
  const classes = useStyles();

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

          <Ticket short />
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
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
  },
  container: {
    marginTop: '100px',
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
}));
