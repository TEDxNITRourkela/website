import React from 'react';

// Libraries
import { makeStyles, Typography, Container } from '@material-ui/core';

import { GRAPHICS } from '../../assets/img/graphics';

function About({ direction, first, DATA, link, columnReverse = false }) {
  const classes = useStyles(columnReverse);

  const renderImgContainer = (
    <div className={classes.imgContainer}>
      <img src={DATA.IMG} alt='People' className={classes.img} />
    </div>
  );

  const renderContentContainer = (
    <div className={classes.contentContainer}>
      <Typography variant='h2' className={classes.question}>
        {DATA.QUESTION}
        <span className={classes.highlight}>{` ${DATA.HIGHLIGHT}`}</span>
      </Typography>
      <Typography variant='body2' className={classes.content}>
        {DATA.CONTENT}
        {!link &&
          DATA.links.map((Social) => (
            <span key={Social.link}>
              <a
                className={classes.link}
                href={Social.link}
                target='_blank'
                rel='noreferrer'
              >
                {Social.text}
                {/* eslint-disable-next-line */}
              </a>{' '}
            </span>
          ))}
      </Typography>
      {link && (
        <a href={DATA.LINK}>
          <Typography
            variant='body2'
            className={classes.link}
            target='_blank'
            rel='noreferrer'
          >
            {DATA.HIGHLIGHT
              ? `Learn More about ${DATA.HIGHLIGHT}`
              : 'Learn More about TEDxNITRourkela'}
          </Typography>
        </a>
      )}
    </div>
  );

  return (
    <Container
      className={classes.root}
      style={{ marginTop: first ? '100px' : '50px' }}
    >
      <img src={GRAPHICS.TOP_LEFT} alt='ellipses' className={classes.image1} />
      <img
        src={GRAPHICS.BOTTOM_RIGHT}
        alt='ellipses'
        className={classes.image2}
      />
      {direction === 'left-right' ? (
        <>
          {renderImgContainer}
          {renderContentContainer}
        </>
      ) : (
        <>
          {renderContentContainer}
          {renderImgContainer}
        </>
      )}
    </Container>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  image1: {
    position: 'absolute',
    top: 100,
    left: 0,
  },
  image2: {
    opacity: 0.4,
    position: 'absolute',
    bottom: -570,
    right: 0,
  },
  root: {
    marginTop: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: theme.palette.common.white,
    height: '100%',
    minHeight: '300px',
    margin: '30px auto',
    [theme.breakpoints.down('md')]: {
      flexDirection: (reverse) => (reverse ? 'column-reverse' : 'column'),
    },
  },
  imgContainer: {
    margin: '30px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  contentContainer: {
    margin: '30px',
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  question: {
    fontFamily: 'Zilla Slab',
    color: 'rgba(255,255,255,0.5)',
  },
  content: {
    fontFamily: 'Helvetica',
    marginTop: '20px',
  },
  link: {
    fontFamily: 'Helvetica',
    marginTop: '40px',
    color: theme.palette.common.white,
    textDecoration: 'underline',
  },
  highlight: {
    color: theme.palette.secondary.main,
    fontSize: '2.5rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
  },
  img: {
    width: '100%',
    height: 'auto',
  },
}));
