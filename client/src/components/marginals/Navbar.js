import React, { useState } from 'react';

import {
  Typography,
  Hidden,
  Drawer,
  ListItem,
  makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import { tabs } from '../../assets/placeholder/common';
import { LOGOS } from '../../assets/img/logos';

const drawerWidth = 250;

function Navbar({ window }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Link to='/' className={classes.logoContainer}>
        <img
          className={classes.logo}
          src={LOGOS.TEDxNITRourkela.LIGHT}
          alt='TEDxNITRourkela'
        />
      </Link>

      <i
        className={`${classes.menu} fas fa-bars`}
        onClick={handleDrawerToggle}
        onKeyDown={handleDrawerToggle}
        role='button'
        tabIndex='0'
        aria-label='Menu Button'
      />

      <div className={classes.tabsContainer}>
        {tabs.map(({ link, name }) => (
          <Link className={classes.tabLink} to={link} key={link}>
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
          {tabs.map(({ link, name }) => (
            <Link className={classes.tabLink} to={link} key={link}>
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
    maxWidth: window.innerWidth,
    height: '100px',
    position: 'fixed',
    top: 0,
    background: 'none',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
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
    [theme.breakpoints.down('sm')]: {
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
    marginLeft: '50px',
    [theme.breakpoints.up('md')]: {
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
