/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable max-len */
import React, { useState } from 'react';

// Libraries
import {
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

function Induction() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [team, setTeam] = useState({
    Curation: false,
    Design: false,
    Management: false,
    PR: false,
    Technical: false,
  });
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setTeam({ ...team, [event.target.name]: event.target.checked });
  };
  const classes = useStyles({ isLoading });

  const valid = (teams) => {
    let isValid = true;
    if (
      !/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@(gmail\.com|gmail\.co\.in|gmail\.co\.uk)$/.test(
        email.toString().trim(),
      )
    ) {
      isValid = false;
      setError('Gmail is not valid');
    } else if (teams.length < 1) {
      isValid = false;
      setError('Select atleast one team');
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line func-names
    const selected = Object.keys(team).filter(function (id) {
      return team[id];
    });
    const teams = selected.join();
    const fname = name.trim().split(' ').slice(0, 1).join(' ');
    const lname = name.trim().split(' ').slice(1).join(' ');
    if (valid(selected)) {
      setLoading(true);
      axios
        .post(
          'https://server.tedxnitrourkela.com/induction/new',
          {},
          {
            params: {
              fname,
              lname,
              email,
              teams,
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Access-Control-Allow-Origin': '*',
            },
          },
        )
        .then(() => {
          setLoading(false);
          setOpen(true);
          setError('');
          setName('');
          setEmail('');
          setTeam({
            Curation: false,
            Design: false,
            Management: false,
            PR: false,
            Technical: false,
          });
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message.toString());
        });
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant='h2' className={`${classes.heading}`}>
        Team Induction
      </Typography>
      <Typography variant='body2' className={classes.subHeading}>
        Team Induction Form for Academic Year 2021-22. Open for all years.
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.formInput}>
          <Typography
            variant='body1'
            style={{ color: '#ff0000', margin: '0px auto' }}
          >
            {error}
          </Typography>
          <div className={classes.elements}>
            <input
              value={name}
              type='text'
              onChange={(event) => setName(event.target.value)}
              className={classes.input}
              placeholder='Name'
              required
            />
            <input
              value={email}
              type='email'
              onChange={(event) => setEmail(event.target.value)}
              className={classes.input}
              placeholder='Gmail ID'
              required
            />
          </div>
          <Typography variant='body2' className={classes.teamHeading}>
            Applying for team(s):
          </Typography>
          <div className={classes.elements}>
            {Object.keys(team).map((key) => (
              <FormControlLabel
                style={{ color: '#ffffff' }}
                key={key}
                control={
                  <Checkbox
                    checked={team[key]}
                    onChange={handleChange}
                    name={key}
                    style={{
                      color: '#ffffff',
                    }}
                  />
                }
                label={key}
              />
            ))}
          </div>
        </div>
        <Button type='submit' className={classes.submitButton}>
          <Typography variant='body1' className={classes.buttonText}>
            {isLoading ? (
              <i className='fas fa-circle-notch fa-spin' />
            ) : (
              'Submit'
            )}
          </Typography>
        </Button>
      </form>
      <Modal
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant='body1'>
              Thank you for your interest in joining TEDxNITRourkela. Please
              check your Gmail for further instructions.
            </Typography>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Induction;

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '180px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: '140px',
    },
  },
  heading: {
    color: theme.palette.common.white,
    fontFamily: 'Zilla Slab',
  },
  subHeading: {
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    opacity: 0.4,
  },
  form: {
    width: '100%',
    margin: '40px 0px',
    textAlign: 'center',
  },
  formInput: {
    width: '100%',
    backgroundColor: '#232323',
    borderRadius: '16px',
    padding: '20px 40px',
    marginBottom: '20px',
  },
  elements: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  teamHeading: {
    display: 'flex',
    color: theme.palette.common.white,
    fontWeight: theme.typography.fontWeightRegular,
    opacity: 0.6,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[1],
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '30vh',
    maxWidth: '40vw',
    padding: '24px',
    [theme.breakpoints.down('sm')]: {
      minHeight: '40vh',
      maxWidth: '80vw',
    },
  },
  input: {
    outline: 0,
    border: 0,
    width: '48%',
    backgroundColor: 'unset',
    fontSize: '24px',
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.common.white,
    borderBottom: '1px solid white',
    marginTop: 30,
    marginBottom: 30,
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      fontSize: '18px',
    },
  },
  submitButton: {
    margin: '0px auto',
    padding: '4px 32px 4px 32px',
    backgroundColor: ({ isLoading }) => (isLoading ? '#ff0000' : 'unset'),
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
