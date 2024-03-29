import React from 'react';

// Libraries
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Placeholder
import { CONTENT2 } from '../../assets/placeholder/homepage';

function TedContent() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={6} xs={12} className={classes.titleContainer}>
          <Typography variant='h1' className={classes.question}>
            {CONTENT2.TWO.TITLE}
          </Typography>
          <img className={classes.logo} src={CONTENT2.TWO.LOGO} alt='Logo' />
        </Grid>
        <Grid item md={6} xs={12} className={classes.contentContainer}>
          <Typography variant='body2' className={classes.content}>
            {CONTENT2.TWO.CONTENT}
          </Typography>
          <a
            href={CONTENT2.TWO.LINK}
            className={classes.link}
            target='_blank'
            rel='noreferrer'
          >
            <Typography variant='body2'>{CONTENT2.TWO.LINKTEXT}</Typography>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default TedContent;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  question: {
    width: '40%',
    float: 'left',
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
    fontWeight: theme.typography.fontWeightBold,
    marginTop: 30,
    opacity: 0.5,
  },
  logo: {
    width: '40%',
    float: 'left',
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
    fontFamily: 'Helvetica',
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
    fontFamily: 'Helvetica',
    fontSize: '16px',
    lineHeight: '18.75px',
    textDecoration: 'underline',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));
