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
          {DATA.LOGO && (
            <img
              className={classes.img}
              src={DATA.LOGO}
              alt='TEDxNITRourkela Logo'
            />
          )}
        </div>
      </div>

      <div className={classes.column2}>
        {typeof DATA.CONTENT === 'string' ? (
          <Typography
            variant='body2'
            className={`${classes.content} ${classes.contentOveride}`}
          >
            {DATA.CONTENT}
          </Typography>
        ) : (
          <ul className={classes.orderedList}>
            {DATA.CONTENT.map((point) => (
              <li key={point} className={classes.content}>
                {point}
              </li>
            ))}
          </ul>
        )}
        {DATA.LINK && (
          <a
            href={DATA.LINK}
            className={classes.link}
            target='_blank'
            rel='noreferrer'
          >
            <Typography variant='body2'>{DATA.LINKTEXT}</Typography>
          </a>
        )}
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
    marginTop: 20,
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
    fontFamily: 'Helvetica',
    marginTop: 5,
    marginBottom: 5,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      textAlign: 'center',
    },
  },
  contentOveride: {
    marginTop: 30,
    marginBottom: 30,
  },
  link: {
    width: '80%',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    fontFamily: 'Helvetica',
    textDecoration: 'underline',
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      textAlign: 'center',
    },
  },
  orderedList: {
    marginLeft: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      justifyContent: 'center',
    },
  },
}));
