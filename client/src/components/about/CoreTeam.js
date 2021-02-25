import React from 'react';

import { makeStyles, Typography, Container } from '@material-ui/core';

// Components
import Profile from '../shared/Profile';

// Assets
import { ABOUT } from '../../assets/placeholder/about';

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant='h2' className={classes.title}>
        Team
      </Typography>

      <div className={classes.row} style={{ justifyContent: 'center' }}>
        {ABOUT.TEAM.ROW1.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </div>

      <div className={classes.row}>
        {ABOUT.TEAM.ROW2.map((member) => (
          <Profile key={`core-team-${member.NAME}`} member={member} />
        ))}
      </div>
    </Container>
  );
}

export default About;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '500px',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    margin: '30px 0',
    color: theme.palette.common.white,
  },
  row: {
    width: '100%',
    margin: '20px 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
