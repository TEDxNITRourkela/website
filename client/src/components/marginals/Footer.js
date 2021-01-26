import React from 'react';

import { Typography, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// assets
import logoDark from '../../assets/img/logo_dark.png';

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.row1}>
          <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
            <img className={classes.logoDark} src={logoDark} alt='TEDxNITRourkela' />
          </Link>

          <Typography className={classes.primaryText} variant='body2'>
            This independent TEDx event is operated under licence from TED
          </Typography>
          <Typography className={classes.secondaryText} variant='body2'>
            © 2021 TEDxNITRourkela. All rights reserved.
          </Typography>
        </div>

        <div className={classes.row2}>
          <div className={classes.row2column1}>
            <Link to='/about' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                About
              </Typography>
            </Link>
            <Link to='/events' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Events
              </Typography>
            </Link>
            <Link to='/speakers' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Speakers
              </Typography>
            </Link>
          </div>
          <div className={classes.row2column2}>
            <Link to='/partners' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Partners
              </Typography>
            </Link>
            <Link to='/participate' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Participate
              </Typography>
            </Link>
            <Link to='/community' className={classes.linkContainer}>
              <Typography variant='body1' className={classes.link}>
                Our Community
              </Typography>
            </Link>
          </div>
        </div>

        <div className={classes.row3}>
          <Typography className={classes.contact} variant='h3'>
            Contact Us:
          </Typography>
          <Typography className={classes.email} variant='body1'>
            info@tedxnitrourkela
          </Typography>

          <div className={classes.iconsContainer}>
            <i className={`${classes.icon} fab fa-facebook-f`} />
            <i className={`${classes.icon} fab fa-twitter`} />
            <i className={`${classes.icon} fab fa-youtube`} />
            <i className={`${classes.icon} fab fa-linkedin-in`} />
            <i className={`${classes.icon} fab fa-instagram`} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '265px',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  row1: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: 50,
      width: '100%',
    },
  },
  logoDark: {
    width: 390,
    height: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      maxWidth: 390,
    },
  },
  primaryText: {
    width: 390,
    alignText: 'left',
    fontWeight: 'bold',
    color: theme.palette.primary,
    fontFamily: 'Helvetica',
    marginTop: '30px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      alignText: 'center',
      maxWidth: 390,
    },
  },
  secondaryText: {
    width: 390,
    alignText: 'left',
    fontWeight: 'normal',
    color: theme.palette.primary,
    fontFamily: 'Helvetica',
    marginTop: '5px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      alignText: 'center',
      maxWidth: 390,
    },
  },
  row2: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  row2column1: {
    minWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row2column2: {
    minWidth: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkContainer: {
    width: '100%',
  },
  link: {
    width: '100%',
    fontWeight: 'bold',
    fontFamily: 'helvetica',
    color: theme.palette.primary.main,
    alignText: 'left',
  },
  row3: {
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 390,
      margin: '50px auto',
    },
  },
  contact: {
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  email: {
    width: '70%',
    fontWeight: 'normal',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  iconsContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingRight: 30,
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  icon: {
    color: theme.palette.secondary.darkGrey,
    // margin: '10px 15px'
  },
}));
