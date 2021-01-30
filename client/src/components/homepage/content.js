import React from 'react';

import { Typography , Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { CONTENT } from '../../assets/placeholder/homepage';

import poly1 from '../../assets/img/homepage/polygon1.png';
import poly2 from '../../assets/img/homepage/polygon2.png';
import poly3 from '../../assets/img/homepage/polygon3.png';
import poly4 from '../../assets/img/homepage/polygon4.png';
import logo from '../../assets/img/logo_dark.png';

function Content(){
    const classes = useStyles();
    return(
      <div>
        <Grid container>
          <Grid item md={5} className={`${classes.questionWrapper}`}>
            <Typography variant='h1' className={`${classes.question}`}>
              What is
            </Typography>
            <img className={classes.logo} src={logo} alt='Logo' />
            <img className={classes.tpoly} src={poly1} alt='' />
            <img className={classes.bpoly} src={poly2} alt='' />
            <img className={classes.bpoly} src={poly3} alt='' />
            <img className={classes.tpoly} src={poly4} alt='' />
          </Grid>
          <Grid item md={7} className={`${classes.contentWrapper}`}>
            <Typography variant='body2' className={`${classes.content}`}>
              {CONTENT.content}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
}

export default Content;

const useStyles = makeStyles((theme) => ({
    questionWrapper: {
        position: 'relative',
        backgroundColor: theme.palette.secondary.lightGrey,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '120px',
    },
    question: {
        float: 'left',
        fontFamily: 'Zilla Slab',
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.primary.main,
        opacity: 0.5,
    },
    tpoly: {
        position: 'absolute',
        top: '0px',
        left: '0px',
    },
    bpoly: {
        position: 'absolute',
        bottom: '0px',
        right: '0px',
    },
    logo: {
        width: '70%',
    },
    contentWrapper: {
        backgroundColor: theme.palette.common.white,
        padding: '80px 120px 80px 100px',
    },
    content: {
        fontWeight: theme.typography.fontWeightRegular,
        fontFamily: 'Roboto',
        fontSize: '16px',
        lineHeight: '18.75px',
    },
}));

