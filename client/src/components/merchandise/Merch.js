import React, { useRef } from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import { ReactTypeformEmbed } from 'react-typeform-embed';

function Product({
  imgSrc,
  title,
  price,
  description,
  tshirtCode,
  discountedPrice,
}) {
  // Logic to determine the type of ticket.
  const referrals = window.location.pathname.split('/');
  let isReferral;
  if (
    referrals &&
    referrals[1] === 'merchandise' &&
    referrals[2] === 'referrals'
  )
    isReferral = true;
  else isReferral = false;

  const classes = useStyles();
  const typeform = useRef();

  const openForm = () => {
    typeform.current.typeform.open();
  };

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
            {isReferral ? (
              <>
                <strike>{`₹ ${price}`}</strike>
                {` ₹ ${discountedPrice}`}
              </>
            ) : (
              `₹ ${price}`
            )}
          </Typography>
        </div>
        <Typography variant='body2' className={classes.description}>
          {description}
        </Typography>
      </div>

      <ReactTypeformEmbed
        ref={typeform}
        hideHeaders
        hideFooter
        url={
          isReferral
            ? // eslint-disable-next-line
              `https://form.typeform.com/to/RbLawI6g?tshirt=${tshirtCode}&is_referral=true&referral_code=${referrals[3]}&`
            : // eslint-disable-next-line
              `https://form.typeform.com/to/RbLawI6g?tshirt=${tshirtCode}&is_referral=false`
        }
        mode='pop_up'
        popup
        autoOpen={false}
        autoClose={100000000}
        buttonText='Buy'
      />

      <div className={classes.buttonContainer}>
        <button onClick={openForm} type='button' className={classes.button}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;

const useStyles = makeStyles(() => ({
  root: {
    width: '360px',
    height: '550px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#232323',
    margin: 5,
    position: 'relative',
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    border: '1px solid #FF2B06',
    borderRadius: '6px',
    backgroundColor: '#1a1a1a',
    padding: '10px 20px',
    color: '#ffffff',
    minWidth: '100px',
    width: 'auto',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#FF2B06',
      cursor: 'pointer',
    },
  },
}));
