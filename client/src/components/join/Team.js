/* eslint-disable max-len */
import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import { INDUCTION } from '../../assets/placeholder/induction';
import image3 from '../../assets/img/images/image3.png';

function Details() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant='h3'>Responsibilities of Various Teams</Typography>
        <div className={classes.contentBody} style={{ position: 'relative' }}>
          <img
            src={image3}
            alt='circles'
            style={{ position: 'absolute', left: 0, top: 0, zIndex: 0 }}
          />
          <img
            src={image3}
            alt='circles'
            style={{ position: 'absolute', right: 0, bottom: 350, zIndex: 0 }}
          />
          {INDUCTION.TEAMS.map((teams) => (
            <div key={teams.team} className={classes.contentItem}>
              <div className={classes.imgContainer}>
                {teams.images.map((image) => (
                  <img
                    className={classes.img}
                    src={image}
                    alt={teams.team}
                    decoding='auto'
                    loading='eager'
                  />
                ))}
              </div>
              <Typography variant='body1' className={classes.contentText}>
                {teams.work}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  content: {
    margin: '60px 20px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px',
    },
  },
  heading: {
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  subHeading: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    opacity: 0.4,
  },
  contentBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contentItem: {
    margin: '10px',
    padding: '20px',
    width: '45%',
    backgroundColor: '#2E2E2E',
    opacity: '0.8',
    borderRadius: '20%',
    zIndex: 0.5,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    margin: '20px',
    width: 100,
    height: 100,
    borderRadius: '100%',
    backgroundColor: theme.palette.secondary.darkGrey,
    [theme.breakpoints.down('sm')]: {
      width: 80,
      height: 80,
    },
  },
  contentText: {
    margin: '20px',
    fontWeight: theme.typography.fontWeightBold,
  },
}));
