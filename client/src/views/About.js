import React from 'react';

import { makeStyles } from '@material-ui/core';

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
      <InfoSection direction='right-left' first DATA={ABOUT.SECTION.ONE} />
      <InfoSection direction='left-right' DATA={ABOUT.SECTION.TWO} link />
      <Content DATA={CONTENT} />
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
