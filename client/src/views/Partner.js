/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';
import { Container, Typography, makeStyles } from '@material-ui/core';

// Utilities
import { analytics } from '../config/firebase';

// Component
import Partners from '../components/partner/Partners';
import ContentBanner from '../components/shared/ContentBanner';

// Placeholder
import { PARTNER } from '../assets/placeholder/partner';

function Partner() {
  const classes = useStyles();
  useEffect(() => {
    analytics().logEvent('Partner Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Partners</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />
        <link rel='canonical' href='https://tedxnitrourkela.com/partners' />

        {PARTNER.ONE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
        {PARTNER.TWO.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.THREE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.FOUR.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.FIVE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
      </Helmet>

      <Container style={{ marginTop: '150px' }}>
        <div className={classes.titleContainer}>
          <Typography variant='h2' className={classes.title}>
            TedxNITRourkelaLive 2021
          </Typography>
          <div className={classes.horizontalLine} />
        </div>
        <Partners DATA={PARTNER.LIVE.ONE} />

        <div className={classes.titleContainer}>
          <Typography variant='h2' className={classes.title}>
            TedxNITRourkela 2021
          </Typography>
          <div className={classes.horizontalLine} />
        </div>
        <Partners DATA={PARTNER.ONE} main />
        <Partners DATA={PARTNER.TWO} />
        <Partners DATA={PARTNER.THREE} />
        <Partners DATA={PARTNER.FOUR} />
        <Partners DATA={PARTNER.FIVE} />

        <ContentBanner DATA={PARTNER.CONTENT} wrapContainer />
      </Container>
    </>
  );
}

export default Partner;

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '10px 0',
  },
  title: {
    marginBottom: '10px',
    fontFamily: 'Zilla Slab',
    fontWeight: 800,
    paddingTop: 40,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  horizontalLine: {
    width: '80%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.3,
  },
}));
