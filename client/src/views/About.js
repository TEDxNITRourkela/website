import React from 'react';

import { makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Components
import InfoSection from '../components/about/InfoSection';
import Content from '../components/shared/Content';
import CoreTeam from '../components/about/CoreTeam';
import Team from '../components/about/Team';
import FAQ from '../components/about/FAQ';

// Assets
import { ABOUT } from '../assets/placeholder/about';
import { CONTENT } from '../assets/placeholder/homepage';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela | About Us</title>
        <meta name='title' content='TEDxNITRourkela | About Us' />
        <meta
          name='description'
          // eslint-disable-next-line
          content="TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss. "
        />
      </Helmet>

      <InfoSection direction='right-left' first DATA={ABOUT.SECTION.ONE} />
      <InfoSection direction='left-right' DATA={ABOUT.SECTION.TWO} link />
      <Content DATA={CONTENT.ONE} big />
      <CoreTeam />
      <Team />
      <FAQ />
    </div>
  );
}

export default About;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
  },
}));
