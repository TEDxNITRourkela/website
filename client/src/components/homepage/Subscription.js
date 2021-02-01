import React, { useState } from 'react';

// Libraries
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import topLeftEllipse from '../../assets/img/homepage/topLeftEllipse.png';

function Subscribe() {
  const [email, setEmail] = useState('');
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  const handleChange = (event) => setEmail(event.target.value);

  return (
    <div className={classes.container}>
      <img
        src={topLeftEllipse}
        alt='Top Left Ellipse'
        className={classes.img}
      />

      <Typography variant='h2' className={`${classes.heading}`}>
        Subscribe to Newsletter
      </Typography>

      <input
        value={email}
        onChange={handleChange}
        className={classes.input}
        placeholder='example@email.com'
      />

      <Button type='submit' className={classes.submitButton}>
        <Typography
          variant='body1'
          className={classes.buttonText}
          onClick={handleSubmit}
        >
          Subscribe
        </Typography>
      </Button>
    </div>
  );
}

export default Subscribe;

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '250px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heading: {
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  input: {
    outline: 0,
    border: 0,
    width: '300px',
    backgroundColor: 'unset',
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.common.white,
    borderBottom: '1px solid white',
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '230px',
    },
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
      backgroundColor: '#FF0000',
    },
  },
  buttonText: {
    fontSize: '16px',
    color: '#F7F7FF',
    fontFamily: 'Inter',
    textTransform: 'none',
  },
}));
