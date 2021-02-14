import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';

export const limitString = (str, n) =>
  // eslint-disable-next-line
  str ? (str.length >= n ? `${str.substr(0, n)}...` : str) : null;

const Image = ({
  member,
  dark = true,
  showDesignation = true,
  small = false,
}) => {
  const classes = useStyles({ dark, small });
  return (
    <div className={classes.imgContainer}>
      <div className={classes.img}>
        <img className={classes.img} src={member.IMG} alt={member.NAME} />
      </div>
      <Typography variant={small ? 'body2' : 'body1'} className={classes.name}>
        {limitString(member.NAME, 22)}
      </Typography>
      {showDesignation && (
        <Typography variant='body2' className={classes.designation}>
          {member.DESIGNATION}
        </Typography>
      )}
    </div>
  );
};

export default Image;

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    width: ({ small }) => (small ? 110 : 180),
    height: ({ small }) => (small ? 140 : 220),
    margin: '0px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  img: {
    width: ({ small }) => (small ? 90 : 120),
    height: ({ small }) => (small ? 90 : 120),
    borderRadius: '100%',
    backgroundColor: theme.palette.secondary.darkGrey,
  },
  name: {
    fontStyle: 'bold',
    marginBottom: 0,
    marginTop: 15,
    textAlign: 'center',
    color: ({ dark }) =>
      dark ? theme.palette.common.white : theme.palette.common.black,
  },
  designation: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: ({ dark }) =>
      dark ? theme.palette.common.white : theme.palette.common.black,
  },
}));
