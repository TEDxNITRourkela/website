import React , { useState } from 'react';

import { Typography , Grid , Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import elp1 from '../../assets/img/homepage/sellipse1.png';
import elp2 from '../../assets/img/homepage/sellipse2.png';
import elp3 from '../../assets/img/homepage/sellipse3.png';
import elp4 from '../../assets/img/homepage/sellipse4.png';

function Subscribe(){
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    };
    const classes = useStyles();
    return(
      <div className={`${classes.wrapper}`}>
        <Grid container>
          <Grid item md={3} className={`${classes.headingWrapper}`}>
            <Typography variant='h1' className={`${classes.heading}`}>
              Subscribe to Newsletter
            </Typography>
            <img className={`${classes.elp} `} src={elp1} alt='ellipse' />
            <img className={`${classes.elp} `} src={elp2} alt='ellipse' />
            <img className={`${classes.elp} `} src={elp3} alt='ellipse' />
            <img className={`${classes.elp} `} src={elp4} alt='ellipse' />
          </Grid>
          <Grid item md={9} className={`${classes.subscribeWrapper}`}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid item md={9} className={`${classes.emailContainer}`}>
                  <div className={`${classes.emailWrapper}`}>
                    <input
                      className={classes.emailInput}
                      name='email'
                      type='text'
                      placeholder='example@gmail.com'
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </Grid>
                <Grid item md={3}>
                  <Button
                    type='submit'
                    className={`${classes.submitButton}`}
                  >
                    <Typography
                      variant='body1'
                      className={`${classes.buttonText}`}
                    >
                      Subscribe
                    </Typography>
                  </Button> 
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
}

export default Subscribe;

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'relative',
        height: '250px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headingWrapper: {
        paddingLeft: '120px',
    },
    subscribeWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    elp: {
        position: 'absolute',
        top: '0px',
        left: '0px',
    },
    heading: {
        color: theme.palette.common.white,
        fontFamily: 'Zilla Slab',
        fontWeight: theme.typography.fontWeightBold,
    },
    emailContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    emailWrapper: {
        marginLeft: '20px',
        width: '80%',
        borderBottom: '2px solid #FFFFFF',
        paddingLeft: '8px',
    },
    emailInput: {
        outline: 0,
        border: 0,
        width: '100%',
        backgroundColor: 'unset',
        fontSize: '24px',
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.common.white,
    },
    submitButton: {
        padding: '4px 32px 4px 32px',
        backgroundColor: 'unset',
        display: 'flex',
        justifyContent: 'center',
        alignmentItems: 'center',
        borderRadius: 5,
        border: '1px solid #FF0000',
        '&:hover': {
        cursor: 'pointer',
        },
    },
    buttonText: {
        fontSize: '16px',
        color: '#F7F7FF',
        fontFamily: 'Inter',
        textTransform: 'none',
    },
}));