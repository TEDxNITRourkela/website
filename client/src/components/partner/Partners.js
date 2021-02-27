import React from 'react';

// Libraries
import { makeStyles, Container } from '@material-ui/core';

// Assets
import { GRAPHICS } from '../../assets/img/graphics';

function Partner({ DATA, home, main = false }) {
  const classes = useStyles(main);

  const renderPartnerContainer = (
    <div className={classes.wrapper}>
      <div className={classes.title}>{DATA.title}</div>
      <div className={classes.partnerContainer}>
        {DATA.partners.map((sponsor) => (
          <a
            target='_blank'
            rel='noreferrer'
            href={sponsor.href}
            title={sponsor.hrefTitle}
            key={sponsor.href}
          >
            <img src={sponsor.img} alt='Sponsor' className={classes.sponsor} />
          </a>
        ))}
      </div>
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
  title: {
    marginBottom: '40px',
    fontFamily: 'Zilla Slab',
    fontWeight: 700,
    fontSize: '36px',
    lineHeight: '43.2px',
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  partnerContainer: {
    margin: '20px 0px',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sponsor: {
    margin: '15px 35px',
    opacity: (main) => (main ? 1 : 0.5),
    width: 200,
    height: 'auto',
  },
}));
