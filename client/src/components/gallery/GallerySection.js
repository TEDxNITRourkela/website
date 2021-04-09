/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

// Libraries
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function GallerySection({ DATA }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeImage, setImage] = useState(0);

  const handleOpen = (index) => {
    setImage(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderGrid1 = () => {
    const items1 = [];
    for (let i = 0; i < DATA.length - (DATA.length % 9); i += 9) {
      items1.push(
        <div>
          <div className={classes.box1}>
            {renderImage(i)}
            {renderImage(i + 1)}
            {renderImage(i + 2)}
          </div>
          <div className={classes.box1}>
            <div style={{ display: 'flex', flexBasis: '66.66%' }}>
              {renderImage(i + 3)}
            </div>
            <div style={{ flexBasis: '33.33%' }} className={classes.box2}>
              {renderImage(i + 4, 'true')}
              {renderImage(i + 5, 'true')}
            </div>
          </div>
          <div className={classes.box1}>
            <div style={{ flexBasis: '33.33%' }} className={classes.box2}>
              {renderImage(i + 6, 'true')}
              {renderImage(i + 7, 'true')}
            </div>
            <div style={{ display: 'flex', flexBasis: '66.66%' }}>
              {renderImage(i + 8)}
            </div>
          </div>
        </div>,
      );
    }
    return <div>{items1}</div>;
  };

  const renderGrid2 = () => {
    const items2 = [];
    for (let i = DATA.length - (DATA.length % 9); i < DATA.length; i += 1) {
      items2.push(
        <div style={{ display: 'flex', flexBasis: '33.33%' }}>
          {renderImage(i)}
        </div>,
      );
    }
    return <div className={classes.box0}>{items2}</div>;
  };

  const renderImage = (index, small = 'false') => {
    return (
      <div
        className={
          small === 'true' ? classes.imageContainer2 : classes.imageContainer1
        }
      >
        <img
          key={DATA[index].title}
          src={DATA[index].image}
          alt={DATA[index].title}
          className={classes.image}
          onClick={() => handleOpen(index)}
        />
      </div>
    );
  };

  return (
    <div className={classes.gridContainer}>
      {renderGrid1()}
      {renderGrid2()}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} timeout={500}>
          <div className={classes.paper}>
            <img
              src={DATA[activeImage].image}
              alt={DATA[activeImage].title}
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
            <div onClick={handleClose} className={classes.closeButton}>
              <i className='fas fa-times' />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default GallerySection;

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: '1000px',
    margin: '0px auto',
    [theme.breakpoints.between('md', 'xs')]: {
      padding: '20px 40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0px 10px',
    },
  },
  imageContainer1: {
    display: 'flex',
    width: 'inherit',
    margin: '10px',
    [theme.breakpoints.between('md', 'xs')]: {
      margin: '4px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1px',
    },
  },
  imageContainer2: {
    height: '50%',
    margin: '10px',
    [theme.breakpoints.between('md', 'xs')]: {
      margin: '4px',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1px',
    },
  },
  box0: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
  },
  box1: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  box2: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box3: {
    alignItems: 'stretch',
  },
  image: {
    cursor: 'pointer',
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down('md')]: {
    padding: '12px',
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    maxHeight: '90vh',
    maxWidth: '70vw',
    padding: '24px',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      maxHeight: '90vh',
      maxWidth: '100vw',
    },
  },
  closeButton: {
    color: theme.palette.common.white,
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    right: '4px',
  },
}));
