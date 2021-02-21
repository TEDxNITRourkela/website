import React from 'react';

import { Typography, Container, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// assets
import { LOGOS } from '../../assets/img/logos';
import { tabs } from '../../assets/placeholder/common';

const TABS1 = tabs.slice(0, 3);
const TABS2 = tabs.slice(4, 7);

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.row1}>
          <Link to='/' style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              className={classes.logoDark}
              src={LOGOS.TEDxNITRourkela.LIGHT}
              alt='TEDxNITRourkela'
              decoding='auto'
              loading='eager'
            />
          </Link>

          <Typography className={classes.primaryText} variant='body2'>
            This independent TEDx event is operated under licence from TED
          </Typography>
          <Typography className={classes.secondaryText} variant='body2'>
            © 2021 TEDxNITRourkela. All rights reserved.
          </Typography>
        </div>

        <div className={classes.row2}>
          <div className={classes.row2row1}>
            <div className={classes.row2column1}>
              {TABS1.map(({ link, name }) => (
                <Link key={link} to={link} className={classes.linkContainer}>
                  <Typography variant='body1' className={classes.link}>
                    {name}
                  </Typography>
                </Link>
              ))}
            </div>
            <div className={classes.row2column2}>
              {TABS2.map(({ link, name }) => (
                <Link key={link} to={link} className={classes.linkContainer}>
                  <Typography variant='body1' className={classes.link}>
                    {name}
                  </Typography>
                </Link>
              ))}
            </div>
          </div>

          <div className={classes.row2row2}>
            <Typography className={classes.addressTitle} variant='body1'>
              {/* eslint-disable-next-line */}
              Address{' '}
            </Typography>
            <Typography className={classes.address} variant='body2'>
              Student Activity Centre, Sector 1, National Institute of
              Technology, Rourkela. Odisha-India PIN:769008
            </Typography>
          </div>
        </div>

        <div className={classes.row3}>
          <Typography className={classes.contact} variant='h3'>
            Contact Us:
          </Typography>
          <a href='mailto:info@tedxnitrourkela.com'>
            <Typography className={classes.email} variant='body1'>
              info@tedxnitrourkela.com
            </Typography>
          </a>

          <a
            className={classes.privacy}
            href='https://files.tedxnitrourkela.com/Privacy_Policy.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Privacy Policy
          </a>
          <a
            className={classes.privacy}
            href='https://files.tedxnitrourkela.com/Tersm_of_Service.pdf'
            target='_blank'
            rel='noreferrer'
            style={{ marginTop: 0 }}
          >
            Terms of Service
          </a>

          <div className={classes.iconsContainer}>
            <a
              href='https://www.facebook.com/tedxnitrourkela/'
              target='_blank'
              rel='noreferrer'
            >
              <i className={`${classes.icon} fab fa-facebook-f`} />
            </a>
            <a
              href='https://twitter.com/tedxnitr'
              target='_blank'
              rel='noreferrer'
            >
              <i className={`${classes.icon} fab fa-twitter`} />
            </a>
            <a
              href='https://www.youtube.com/channel/UCsY55AEkwUHJnbc6TLRB-7g'
              target='_blank'
              rel='noreferrer'
            >
              <i className={`${classes.icon} fab fa-youtube`} />
            </a>
            <a
              href='https://in.linkedin.com/company/tedxnitrourkela'
              target='_blank'
              rel='noreferrer'
            >
              <i className={`${classes.icon} fab fa-linkedin-in`} />
            </a>
            <a
              href='https://www.instagram.com/tedxnitrourkela/'
              target='_blank'
              rel='noreferrer'
            >
              <i className={`${classes.icon} fab fa-instagram`} />
            </a>
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
    height: '365px',
    backgroundColor: theme.palette.background.default,
    borderTop: '1px solid rgba(255,255,255,0.4)',
    marginTop: 50,
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
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
      maxHeight: 100,
    },
  },
  primaryText: {
    width: 390,
    textAlign: 'left',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    marginTop: '30px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '80%',
      textAlign: 'center',
      maxWidth: 390,
    },
  },
  secondaryText: {
    width: 390,
    textAlign: 'left',
    fontWeight: 'normal',
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    marginTop: '5px',
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
      maxWidth: 390,
    },
  },
  row2: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '25%',
    minHeight: '200px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      minHeight: '100px',
      marginTop: 20,
    },
  },
  row2row1: {
    width: '100%',
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
    fontWeight: '400',
    fontFamily: 'helvetica',
    color: theme.palette.common.white,
    alignText: 'left',
  },
  row2row2: {
    width: '85%',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
      width: '80%',
      maxWidth: 390,
    },
  },
  addressTitle: {
    color: 'white',
    marginTop: 10,
    fontWeight: '600',
    fontFamily: 'Helvetica',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  address: {
    color: 'white',
    marginTop: 5,
    fontWeight: '400',
    fontFamily: 'Helvetica',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  row3: {
    width: '25%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '200px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: 390,
      margin: '50px auto',
      minHeight: '100px',
    },
  },
  contact: {
    width: '75%',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  email: {
    width: '70%',
    fontWeight: 'normal',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
  iconsContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingRight: 30,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: 0,
      paddingRight: 0,
    },
  },
  icon: {
    color: theme.palette.common.white,
    margin: '10px 15px',
  },
  privacy: {
    fontSize: '16px',
    marginTop: '20px',
    width: '72%',
    color: 'white',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));
