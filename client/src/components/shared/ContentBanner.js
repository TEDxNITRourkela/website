import React from 'react';

// Libraries
import { makeStyles, Container, Typography } from '@material-ui/core';

function ContentBanner({ DATA, smallLogo = false, wrapContainer = false }) {
  const classes = useStyles(smallLogo);

  const renderContent = (
    <>
      <div className={classes.column1}>
        <Typography variant='h2' className={classes.question}>
          {DATA.TITLE}
        </Typography>
        <div className={classes.imgWrapper}>
          <img
            className={classes.img}
            src={DATA.LOGO}
            alt='TEDxNITRourkela Logo'
          />
        </div>
      </div>

      <div className={classes.column2}>
        <Typography variant='body2' className={classes.content}>
          {DATA.CONTENT}
        </Typography>
        <a href={DATA.LINK} className={classes.link}>
          <Typography variant='body2'>{DATA.LINKTEXT}</Typography>
        </a>
      </div>
    </>
  );
  return (
    <div className={classes.wrapper}>
      {wrapContainer ? (
        <Container className={classes.root}>{renderContent}</Container>
      ) : (
        <div className={classes.root}>{renderContent}</div>
      )}
    </div>
  );
}

export default ContentBanner;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '50px 0',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  column1: {
    width: '50%',
    minHeight: 200,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      minHeight: 100,
      justifyContent: 'center',
    },
  },
  column2: {
    width: '50%',
    minHeight: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      minHeight: 100,
      justifyContent: 'center',
    },
  },
  imgWrapper: {
    width: '85%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  img: {
    width: (smallLogo) => (smallLogo ? '40%' : '85%'),
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxHeight: 100,
    },
  },
  question: {
    width: '85%',
    textAlign: 'left',
    fontFamily: 'Zilla Slab',
    fontWeight: theme.typography.fontWeightBold,
    marginTop: 30,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  content: {
    width: '80%',
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Roboto',
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      textAlign: 'center',
    },
  },
  link: {
    width: '80%',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Roboto',
    textDecoration: 'underline',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      textAlign: 'center',
    },
  },
}));
