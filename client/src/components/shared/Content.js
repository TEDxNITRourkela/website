import React from 'react';

// Libraries
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Content({ DATA, big }) {
  const classes = useStyles();

  const renderImageContainer = (
    <Grid item md={6} xs={12} className={classes.titleContainer}>
      <Typography variant='h1' className={classes.question}>
        {DATA.title}
      </Typography>
      <img className={classes.logo} src={DATA.logo} alt='Logo' />
    </Grid>
  );

  const renderContentContainer = (
    <Grid item md={6} xs={12} className={classes.contentContainer}>
      <Typography variant='body2' className={classes.content}>
        {DATA.content}
      </Typography>
      <a href={DATA.link} className={classes.link}>
        <Typography variant='body2'>{DATA.linkText}</Typography>
      </a>
    </Grid>
  );

  return (
    <div
      className={classes.container}
      style={{ minHeight: big ? '350px' : '300px' }}
    >
      <Grid container>
        {renderImageContainer}
        {renderContentContainer}
      </Grid>
    </div>
  );
}

export default Content;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
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
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
    fontWeight: theme.typography.fontWeightBold,
    marginTop: 30,
    opacity: 0.5,
  },
  logo: {
    width: '70%',
    marginBottom: 30,
  },
  contentContainer: {
    padding: '40px 0px 0px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    width: '80%',
    color: theme.palette.common.white,
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
  link: {
    width: '100%',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Roboto',
    fontSize: '16px',
    lineHeight: '18.75px',
    textDecoration: 'underline',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));
