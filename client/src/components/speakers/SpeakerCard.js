/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';

function GuestCard({
  name,
  description,
  image,
  shortDescription,
  links,
  isLongCard: isLong,
}) {
  const isSpeaker = name !== '';
  const classes = useStyles({ isSpeaker, isLong });
  const [showFront, setShowFront] = useState(true);
  const [cardStyle, setCardStyle] = useState(classes.card);

  const onClick = () => {
    const css = showFront
      ? `${classes.card} ${classes.isFlipped}`
      : classes.card;
    setCardStyle(css);
    setShowFront((current) => !current);
  };

  return (
    <div className={classes.root}>
      <div className={cardStyle}>
        <div className={`${classes.common} ${classes.front}`}>
          <div
            className={classes.imgDiv}
            style={{
              // eslint-disable-next-line
              backgroundImage: `linear-gradient(to bottom, transparent, transparent, #232323), url(${image})`,
            }}
          />
          {isSpeaker && (
            <>
              <Typography className={classes.frontName} variant='h3'>
                {name}
              </Typography>
              <Typography className={classes.frontDescription} variant='body1'>
                {shortDescription}
              </Typography>
            </>
          )}

          {showFront && name !== '' && (
            <i
              className={`${classes.flipSymbol} fas fa-info-circle`}
              onClick={onClick}
              onKeyDown={onClick}
              role='button'
              tabIndex='0'
              aria-label='Rotate Button'
            />
          )}
        </div>

        <div className={`${classes.common} ${classes.back}`}>
          <div className={classes.infoContainer}>
            <Typography className={classes.name} variant='h3'>
              {name}
            </Typography>
            <Typography className={classes.description} variant='body1'>
              {description.map((item) =>
                typeof item === 'string' ? (
                  <span key={item}>{item}</span>
                ) : (
                  <a
                    key={item.content}
                    className={`${classes.description} ${classes.dsLinks}`}
                    href={item.href}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {item.content}
                  </a>
                ),
              )}
            </Typography>
          </div>

          <div className={classes.linksContainer}>
            {links.map((link, index) => (
              <a
                key={link.link}
                href={link.link}
                target='_blank'
                rel='noreferrer'
                aria-label={link.aria_label}
              >
                <i className={`${classes.icons} ${link.link_type}`} />
              </a>
            ))}
          </div>

          <i
            className={`${classes.flipSymbol} far fa-times-circle`}
            onClick={onClick}
            onKeyDown={onClick}
            role='button'
            tabIndex='0'
            aria-label='Rotate Button'
          />
        </div>
      </div>
    </div>
  );
}

export default GuestCard;

const useStyles = makeStyles(() => ({
  root: {
    height: 350,
    width: (_) => (_.isLong ? 530 : 250),
    backgroundColor: 'transparent',
    borderRadius: '8px',
    perspective: '600px',
    overflow: 'hidden',
    margin: 15,
  },
  card: {
    width: '100%',
    height: '100%',
    transition: 'transform 1s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  isFlipped: {
    transform: 'rotateY(180deg)',
  },
  common: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'white',
    '-webkit-backface-visibility': 'hidden',
    'backface-visibility': 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  front: {
    backgroundColor: '#232323',
  },
  back: {
    backgroundColor: '#232323',
    transform: 'rotateY(180deg)',
    alignItems: 'flex-start',
    padding: 25,
  },
  // Html Elements Styling
  image: {
    width: '75%',
    height: 'auto',
    // minHeight: 200,
  },
  imgDiv: {
    width: (_) => (_.isLong ? 400 : 190),
    // eslint-disable-next-line
    height: (_) => (_.isSpeaker ? (_.isLong ? 225 : 190) : 230),
    backgroundColor: '#232323',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  frontName: {
    width: '90%',
    textAlign: 'center',
    fontFamily: 'Zilla Slab',
    fontWeight: '700',
    fontSize: '22px',
    lineHeight: '29px',
    marginTop: 20,
  },
  frontDescription: {
    width: '90%',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: 5,
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '50%',
  },
  icons: {
    color: 'white',
    margin: 10,
  },
  infoContainer: {
    height: '85%',
  },
  name: {
    fontFamily: 'Zilla Slab',
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '34px',
    width: '90%',
    textAlign: 'left',
  },
  description: {
    fontFamily: 'Helvetica',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '16px',
    width: '90%',
    textAlign: 'left',
  },
  flipSymbol: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  dsLinks: {
    color: '#ffffff',
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
}));
