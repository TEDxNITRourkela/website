import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import horizontalRectange from '../assets/img/v1/horizontal_rectangle.svg';
import logo from '../assets/img/logo.svg';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <div className={classes.container}>
        <h2 className={classes.content}>TECHNOLOGY . ENTERTAINMENT . DESIGN</h2>

        <img className={classes.logo} src={logo} alt='Logo' />

        <h2 className={classes.date}>13th March 2021</h2>
      </div>

      <a
        className={classes.contactUs}
        href='mailto:contact-us@tedxnitrourkela.com'
      >
        Contact Us
      </a>
    </div>
  );
}

export default App;

const useStyles = makeStyles((theme) => ({
  screen: {
    width: '100%',
    minHeight: window.innerHeight,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  container: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  logo: {
    marginBottom: 30,
    marginTop: 20,
    width: '82%',
    [theme.breakpoints.down('xs')]: {
      width: '75%',
    },
  },
  content: {
    width: '100%',
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.5)',
    fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Zilla Slab, serif',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  date: {
    width: '100%',
    textAlign: 'center',
    color: 'rgba(255,255,255, 0.5)',
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'Zilla Slab, serif',
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '300',
    marginTop: 20,
    color: '#fff',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  contactUs: {
    position: 'absolute',
    bottom: 80,
    textDecoration: 'underline',
    color: '#fff',
    fontSize: 24,
    [theme.breakpoints.down('xs')]: {
      fontSize: 20,
    },
  },
}));
