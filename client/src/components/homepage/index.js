import React from 'react';

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Counter from './counter';

import telp1 from '../../assets/img/homepage/tellipse1.png';
import telp2 from '../../assets/img/homepage/tellipse2.png';
import telp3 from '../../assets/img/homepage/tellipse3.png';
import telp4 from '../../assets/img/homepage/tellipse4.png';
import belp1 from '../../assets/img/homepage/bellipse1.png';
import belp2 from '../../assets/img/homepage/bellipse2.png';
import belp3 from '../../assets/img/homepage/bellipse3.png';
import belp4 from '../../assets/img/homepage/bellipse4.png';
import belp5 from '../../assets/img/homepage/bellipse5.png';
import mouse from '../../assets/img/homepage/mouse.png';
import logo from '../../assets/img/logo.png';

function Index() {
  const classes = useStyles();
  return (
    <div className={`${classes.wrapper}`}>
      <div className={`${classes.container}`}>
        <Typography variant='body2' className={`${classes.content}`}>
          TECHNOLOGY . ENTERTAINMENT . DESIGN
        </Typography>
        <img className={classes.logo} src={logo} alt='Logo' />
        <Typography variant='h1' className={`${classes.topic}`}>
          &#8220; Learning from the past &#8221;
        </Typography>
        <Counter />
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
          className={`${classes.scroll}`}
        >
          <Grid item>
            <img src={mouse} alt='Mouse' />
          </Grid>
          <Grid item>
            <Typography variant='body1' className={`${classes.scrContent}`}>
              Scroll Down
            </Typography>
          </Grid>
        </Grid>
      </div>
      <img className={`${classes.telp} `} src={telp1} alt='ellipse' />
      <img className={`${classes.telp} `} src={telp2} alt='ellipse' />
      <img className={`${classes.telp} `} src={telp3} alt='ellipse' />
      <img className={`${classes.telp} `} src={telp4} alt='ellipse' />
      <img className={`${classes.belp} `} src={belp1} alt='ellipse' />
      <img className={`${classes.belp} `} src={belp2} alt='ellipse' />
      <img className={`${classes.belp} `} src={belp3} alt='ellipse' />
      <img className={`${classes.belp} `} src={belp4} alt='ellipse' />
      <img className={`${classes.belp} `} src={belp5} alt='ellipse' />
    </div>
  );
}

export default Index;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 'calc(100% - 100px)',
    minHeight: '100vh',
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: theme.palette.common.white,
    opacity: 0.2,
    fontFamily: 'Zilla Slab',
    letterSpacing: 3,
  },
  logo: {
    marginTop: '20px',
    marginBottom: '30px',
    width: '30%',
  },
  topic: {
    marginTop: '10px',
    marginBottom: '20px',
    fontSize: '48px',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.white,
    fontFamily: 'zila slab',
  },
  scroll: {
    marginBottom: '50px',
  },
  scrContent: {
    color: theme.palette.common.white,
    fontFamily: 'Helvetica',
    fontWeight: 400,
  },
  telp: {
    position: 'absolute',
    top: '100px',
    right: '0px',
  },
  belp: {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
  },
}));
