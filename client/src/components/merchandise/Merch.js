import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

function Product({ imgSrc, title, price, description, paymentLink }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.img}
        src={imgSrc}
        alt='TEDxNITRourkela Merchandise'
      />

      <div className={classes.details}>
        <div className={classes.titleContainer}>
          <Typography variant='h3' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='body1' className={classes.price}>
            {`₹ ${price}`}
          </Typography>
        </div>
        <Typography variant='body2' className={classes.description}>
          {description}
        </Typography>
      </div>

      {/* eslint-disable-next-line */}
      <a
        // eslint-disable-next-line
        href={paymentLink}
        data-store-name='studentactivitycenter'
        data-domain='https://studentactivitycenter.stores.instamojo.com'
        data-id='291144'
        rel='im-new-checkout'
        data-text='Buy'
        // eslint-disable-next-line
        data-css-style='background:#181818; border:1px solid #FF2B06; color:#ffffff; width:100px; border-radius:8px; padding: 5px;  margin-right: 0px'
        data-layout='vertical'
        className={classes.buy}
      />
    </div>
  );
}

export default Product;

const useStyles = makeStyles(() => ({
  root: {
    width: '360px',
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
    backgroundColor: '#232323',
    margin: 5,
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  details: {
    margin: 20,
    marginBottom: 10,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '10px auto',
  },
  title: {
    fontFamily: 'Zilla Slab',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '29px',
  },
  price: {
    fontFamily: 'Helvetica',
    fontWeight: '700',
    color: '#ffffff',
    opacity: 0.7,
  },
  description: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    color: '#ffffff',
    opacity: 0.5,
  },
  buy: {
    backgroundColor: '#181818',
    border: '1px solid #FF2B06',
    color: '#ffffff',
    width: '100px',
    borderRadius: '7px',
    padding: '5px',
    '&:hover': {
      backgroundColor: '#FF2B06',
    },
  },
}));
