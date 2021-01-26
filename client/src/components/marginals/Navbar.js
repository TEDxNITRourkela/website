import React, { useState } from 'react';

import { Typography, Hidden, Drawer, ListItem, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/img/logo.png';

const drawerWidth = 250;
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

function Navbar({ window, children }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <i className={`${classes.menu} fas fa-bars`} onClick={handleDrawerToggle} />

      <Link to='/' className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt='TEDxNITRourkela' />
      </Link>

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
          anchor='left'
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
    height: '100px',
    position: 'fixed',
    top: 0,
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: 30,
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      paddingLeft: 30,
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
