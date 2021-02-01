import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

// Assets
import { ABOUT } from '../../assets/placeholder/about';

const Image = ({ member }) => {
  const classes = useStyles();

  return (
    <div className={classes.imgContainer}>
      <img className={classes.img} src={member.IMG} alt={member.NAME} />
      <Typography variant='body1' className={classes.name}>
        {member.NAME}
      </Typography>
      <Typography variant='body2' className={classes.designation}>
        {member.DESIGNATION}
      </Typography>
    </div>
  );
};

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.title}>
        Team
      </Typography>

      <div className={classes.row}>
        {ABOUT.TEAM.ROW1.map((member) => (
          <Image key={member.NAME} member={member} />
        ))}
      </div>

      <div className={classes.row}>
        {ABOUT.TEAM.ROW2.map((member) => (
          <Image key={member.NAME} member={member} />
        ))}
      </div>
    </div>
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
  imgContainer: {
    width: 180,
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: '100%',
  },
  name: {
    fontStyle: 'bold',
    marginBottom: 0,
    marginTop: 15,
    color: theme.palette.common.white,
  },
  designation: {
    fontStyle: 'italic',
    color: theme.palette.common.white,
  },
}));
