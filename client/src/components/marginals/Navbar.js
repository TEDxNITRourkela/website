import React, { useState, useEffect } from 'react';

import {
  Typography,
  Hidden,
  Drawer,
  ListItem,
  makeStyles,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// Components
import Counter from '../homepage/Counter';

// Assets
import { tabs as TABS_NAV } from '../../assets/placeholder/common';
import { LOGOS } from '../../assets/img/logos';

const drawerWidth = 250;

function Navbar({ window: cWindow }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showBoxShadow, setShowBoxShadow] = useState(false);
  const classes = useStyles(showBoxShadow);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    cWindow !== undefined ? () => cWindow().document.body : undefined;

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setShowBoxShadow(true);
    } else {
      setShowBoxShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.alertContainer}>
        <Container className={classes.alertSubcontainer}>
          <Typography className={classes.timer} variant='body2'>
            {/* eslint-disable-next-line */}
            Reserve your seat now. Tickets closing in
          </Typography>
          <Counter />
          <Typography
            className={`${classes.timer} ${classes.bookNow}`}
            variant='body2'
          >
            <Link className={classes.alertLink} to='/tickets'>
              Book Now
            </Link>
          </Typography>
        </Container>
      </div>
      <Link to='/' className={classes.logoContainer}>
        <img
          className={classes.logo}
          src={LOGOS.TEDxNITRourkela.LIGHT}
          alt='TEDxNITRourkela'
          decoding='auto'
          loading='eager'
        />
      </Link>

      <i
        className={`fas fa-bars ${classes.menu}`}
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
        role='button'
        tabIndex='0'
        aria-label='Menu Button'
      />
      <div className={classes.tabsContainer}>
        {TABS_NAV.slice(0, 7).map(({ link, name }) => (
          <Link className={classes.tabLink} to={link} key={`navbar-${link}`}>
            <Typography className={classes.tab} variant='body1'>
              {name}
            </Typography>
          </Link>
        ))}
      </div>

      <Hidden mdUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor='right'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {TABS_NAV.slice(0, 7).map(({ link, name }) => (
            <Link
              className={classes.tabLink}
              to={link}
              key={`hidden-navbar-${link}`}
            >
              <ListItem>
                <Typography className={classes.tab} variant='body1'>
                  {name}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default Navbar;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100px',
    paddingTop: '20px',
    position: 'fixed',
    top: 30,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    boxShadow: (showBoxShadow) => (showBoxShadow ? '0px 3px 15px #080808' : ''),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-between',
    },
  },
  alertContainer: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#FF2B06',
    width: '100%',
    padding: '5px 10px',
    zIndex: 2,
  },
  alertSubcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  bookNow: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  timer: {
    color: '#232323',
    fontWeight: '600',
    fontFamily: 'Helvetica',
  },
  alertLink: {
    fontWeight: '700',
    color: '#232323',
    textDecoration: 'underline',
  },
  logoContainer: {
    width: '250px',
    height: 'auto',
    marginLeft: 30,
    marginTop: 10,
    [theme.breakpoints.down('sm')]: {
      width: '200px',
    },
  },
  logo: {
    width: '100%',
    height: 'auto',
  },
  tabsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 50,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  tabLink: {
    margin: 0,
    padding: 'auto 15px',
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  tab: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
  },
  menu: {
    color: '#fff',
    marginLeft: 50,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
