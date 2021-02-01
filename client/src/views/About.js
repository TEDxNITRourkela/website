import React from 'react';

import { makeStyles } from '@material-ui/core';

// Components
import InfoSection from '../components/about/InfoSection';
import Content from '../components/homepage/Content';
import CoreTeam from '../components/about/CoreTeam';

// Assets
import { ABOUT } from '../assets/placeholder/about';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <InfoSection direction='right-left' first DATA={ABOUT.SECTION.ONE} />
      <InfoSection direction='left-right' DATA={ABOUT.SECTION.TWO} />
      <Content type='light' />
      <CoreTeam />
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
