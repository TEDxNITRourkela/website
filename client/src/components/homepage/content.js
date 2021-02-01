import React from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import topLeftPolygon from '../../assets/img/homepage/topLeftPolygon.png';
// eslint-disable-next-line
import bottomRightPolygon from '../../assets/img/homepage/bottomRightPolygon.png';
import logo from '../../assets/img/logo.png';
import { CONTENT } from '../../assets/placeholder/homepage';

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant='h1' className={classes.question}>
          What is
        </Typography>
        <img className={classes.logo} src={logo} alt='Logo' />
      </div>

      <div className={classes.contentContainer}>
        <Typography variant='body2' className={classes.content}>
          {CONTENT.content}
        </Typography>
      </div>

      <img
        className={classes.topLeft}
        src={topLeftPolygon}
        alt='Top Left Polygon'
      />
      <img
        className={classes.bottomRight}
        src={bottomRightPolygon}
        alt='Bottom Right Polygon'
      />
    </div>
  );
}

export default Content;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '350px',
    display: 'flex',
    backgroundColor: theme.palette.secondary.darkGrey,
    position: 'relative',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  question: {
    width: '70%',
    float: 'left',
    fontFamily: 'Zilla Slab',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.secondary.lightGrey,
    marginTop: 30,
  },
  logo: {
    width: '70%',
    marginBottom: 30,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  content: {
    width: '70%',
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '18.75px',
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));
