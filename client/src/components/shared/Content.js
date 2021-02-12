import React from 'react';

// Libraries
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import logo from '../../assets/img/logo.png';
import darkLogo from '../../assets/img/logo_dark.png';

function Content({ type = 'Dark', DATA }) {
  const classes = useStyles();

  const styles =
    type === 'Dark'
      ? {
          logo,
          text: '#ffffff',
        }
      : {
          logo: darkLogo,
          text: '#000000',
        };

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item md={6} xs={12} className={classes.titleContainer}>
          <Typography
            variant='h1'
            className={classes.question}
            style={{ color: styles.text }}
          >
            {DATA.title}
          </Typography>
          <img className={classes.logo} src={styles.logo} alt='Logo' />
        </Grid>
        <Grid item md={6} xs={12} className={classes.contentContainer}>
          <Typography
            variant='body2'
            className={classes.content}
            style={{ color: styles.text }}
          >
            {DATA.content}
          </Typography>
          <a
            href={DATA.link}
            className={classes.link}
            style={{ color: styles.text }}
          >
            <Typography variant='body2'>{DATA.linkText}</Typography>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '350px',
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
