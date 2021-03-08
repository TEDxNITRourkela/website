import React, { useEffect } from 'react';

// Libraries
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';

// Utilities
import { analytics } from '../config/firebase';

// Components
import GallerySection from '../components/gallery/GallerySection';

// Placeholder
import { GALLERY } from '../assets/img/pages';

function Gallery() {
  const classes = useStyles();
  useEffect(() => {
    analytics().logEvent('About Page Loaded');
  }, []);

  return (
    <div>
      <Helmet>
        <title>TEDxNITRourkela | Gallery</title>
        <meta name='title' content='TEDxNITRourkela | Gallery' />
      </Helmet>
      <div className={classes.wrapper}>
        <div className={classes.titleContainer}>
          <Typography variant='h2' className={classes.title}>
            Gallery
          </Typography>
          <div className={classes.horizontalLine} />
        </div>
      </div>
      <GallerySection DATA={GALLERY} />
    </div>
  );
}

export default Gallery;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '100px',
    marginBottom: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: '24px',
    },
  },
  titleContainer: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '24px',
    },
  },
  title: {
    marginBottom: '10px',
    fontFamily: 'Zilla Slab',
    fontWeight: 700,
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  horizontalLine: {
    width: '50%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.3,
  },
}));
