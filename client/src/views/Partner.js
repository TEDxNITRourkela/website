import React from 'react';

// Libraries
import { makeStyles, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import { GRAPHICS } from '../assets/img/graphics';

function Partner({ DATA, home, main = false }) {
  const classes = useStyles(main);

  const renderPartnerContainer = (
    <div className={classes.wrapper}>
      <div className={classes.titleContainer}>
        <Typography variant='h2' className={classes.title}>
          {home ? 'Partners' : DATA.title}
        </Typography>
        <div className={classes.horizontalLine} />
      </div>

      <div className={classes.partnerContainer}>
        {DATA.partners.map((sponsor) => (
          <a
            target='_blank'
            rel='noreferrer'
            href={sponsor.href}
            title={sponsor.hrefTitle}
            key={sponsor.href}
            className={classes.imgContainer}
            style={{
              width: `${sponsor.size}`,
            }}
          >
            <img src={sponsor.img} alt='Sponsor' className={classes.sponsor} />
          </a>
        ))}
      </div>

      {home && (
        <div className={classes.navigator}>
          <Link to='/partners' style={{ color: '#ffffff' }}>
            View all Partners
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <Container
      style={{
        marginTop: home ? '20px' : '120px',
      }}
    >
      {!home && (
        <img src={GRAPHICS.TOP_LEFT} alt='ellipses' className={classes.image} />
      )}
      {renderPartnerContainer}
    </Container>
  );
}

export default Partner;

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  partnerContainer: {
    margin: '20px 0px',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    height: 'auto',
    margin: '10px 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sponsor: {
    opacity: (main) => (main ? 0.9 : 0.5),
    width: '90%',
    height: 'auto',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '10px',
    fontFamily: 'Zilla Slab',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  horizontalLine: {
    width: '20%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.3,
  },
  navigator: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: '#ffffff',
  },
}));
