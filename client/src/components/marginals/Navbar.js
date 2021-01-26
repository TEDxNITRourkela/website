import React from 'react';

import { Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/img/logo.png';

function Navbar() {
  const classes = useStyles();

  const tabs = [
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Events',
      link: '/events',
    },
    {
      name: 'Speakers',
      link: '/speakers',
    },
    {
      name: 'Partners',
      link: '/partners',
    },
    {
      name: 'Participate',
      link: '/participate',
    },
    {
      name: 'Our Community',
      link: '/community',
    },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt='TEDxNITRourkela' />
      </div>

      <div className={classes.tabsContainer}>
        {tabs.map(({ link, name }) => (
          <Link className={classes.tabLink} to={link}>
            <Typography className={classes.tab} variant='body1'>
              {name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    width: '250px',
    height: 'auto',
  },
  logo: {
    width: '100%',
    height: 'auto',
  },
  tabsContainer: {
    // marginRight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLink: {
    margin: 0,
    padding: 'auto 15px',
    paddingLeft: 15,
    paddingRight: 15,
  },
  tab: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
  },
}));
