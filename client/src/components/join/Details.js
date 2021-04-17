import React from 'react';

// Libraries
import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Assets
import { INDUCTION } from '../../assets/placeholder/induction';

function Induction() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.content}>
        <Typography variant='h3'>Terms and Conditions:</Typography>
        <ul className={classes.contentBody}>
          {INDUCTION.TERMS.map((term) => (
            <li key={`${term}`}>
              {typeof term === 'string' ? (
                <Typography variant='body2' className={classes.contentText}>
                  {term}
                </Typography>
              ) : (
                <Typography variant='body2' className={classes.contentText}>
                  {term.text}
                  <a href={term.link} className={classes.link}>
                    {term.linktext}
                  </a>
                </Typography>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.content}>
        <Typography variant='h3'>Responsibilities of Various Teams:</Typography>
        <ul className={classes.contentBody}>
          {INDUCTION.TEAMS.map((teams) => (
            <li key={`${teams.team}`} style={{ marginBottom: '10px' }}>
              <Typography variant='body2' className={classes.contentText}>
                <span style={{ fontWeight: 'bold' }}>{teams.team}</span>
                {teams.work}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Induction;

const useStyles = makeStyles((theme) => ({
  content: {
    margin: '60px 20px',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      margin: '30px 0px',
    },
  },
  contentBody: { padding: '20px' },
  contentText: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  link: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'underline',
  },
}));
