import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles();

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      onClick={scrollToTop}
      onKeyDown={scrollToTop}
      role='button'
      tabIndex='0'
      aria-label='Scroll To Top Button'
    >
      {isVisible && (
        <div className={classes.root}>
          <i className={`fas fa-2x fa-chevron-up ${classes.icon}`} />
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
    borderRadius: '100%',
    position: 'fixed',
    bottom: 50,
    right: 50,
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 40,
      height: 40,
      bottom: 15,
      right: 15,
    },
  },
  icon: {
    color: theme.palette.common.white,
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },
}));
