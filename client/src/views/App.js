import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import svg from '../assets/logo.svg';
import leftCenter from '../assets/leftCenter.svg';
import rightCenter from '../assets/rightCenter.svg';
import leftTriangle from '../assets/leftTriangle.svg';
import rightTriangle from '../assets/rightTriangle.svg';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.screen}>
      <div className={classes.container}>
        <img src={svg} alt='logo' className={classes.logo} />

        <div className={classes.content}>
          <h3 className={classes.text}>
            TEDxNITRourkela is inducting for the Tech, Design and Management
            Teams. We need capable and confident individuals who can deliver the
            best, to make this event fruitful one.{' '}
          </h3>

          <h3 className={classes.textBold}>
            If you think you got what it takes, fill out the gived form*.
          </h3>

          <h3 className={classes.text}>
            The form will remain open till{' '}
            <span className={classes.textBold}>30th Nov, 2020 11:59 PM</span>{' '}
            and there will be no late submissions. <br /> If you have any
            queries whatsoever feel free to contact:{' '}
            <span className={classes.textBold}>Abel</span> and{' '}
            <span className={classes.textBold}>Rutaj</span>
          </h3>

          <h3 className={classes.text}>
            *(unless it's due to unavoidable circumstances)
          </h3>
        </div>

        <div className={classes.buttonsContainer}>
          <h3 className={classes.textBold}>
            Click on the team that you want to apply
          </h3>

          <div className={classes.buttons}>
            <button className={classes.button}>Technical</button>
            <button className={classes.button}>Design</button>
            <button className={classes.button}>Management</button>
          </div>
        </div>
      </div>
      <img src={leftCenter} alt='left center' className={classes.leftCenter} />
      <img
        src={rightCenter}
        alt='right center'
        className={classes.rightCenter}
      />
      <img
        src={rightTriangle}
        alt='right center'
        className={classes.rightTriangle}
      />
      <img
        src={leftTriangle}
        alt='right center'
        className={classes.leftTriangle}
      />
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
  },
  container: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 80,
    marginTop: 50,
  },
  content: {
    width: '70%',
    display: 'flew',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '300',
    marginTop: 20,
    color: '#fff',
  },
  textBold: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '700',
    marginTop: 20,
    color: '#fff',
  },
  buttonsContainer: {
    marginTop: 50,
    marginBottom: 30,
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      display: 'column',
    },
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#000000',
    color: '#fff',
    borderRadius: 7,
    border: '1px solid #FF2B06',
    width: 120,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#FF2B06',
      color: '#fff',
    },
  },
  leftCenter: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    position: 'absolute',
    width: '30%',
    height: '100%',
    right: 0,
    top: 0,
    margin: 0,
    padding: 0,
  },
  rightCenter: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    position: 'absolute',
    width: '30%',
    height: '100%',
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
  },
  leftTriangle: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    position: 'absolute',
    width: '30%',
    height: '100%',
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    marginLeft: '-12%',
  },
  rightTriangle: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    position: 'absolute',
    width: '30%',
    height: '100%',
    right: 0,
    top: 0,
    margin: 0,
    padding: 0,
    marginRight: '-12%',
  },
}));
