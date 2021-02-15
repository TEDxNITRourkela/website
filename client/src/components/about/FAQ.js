import React, { useState } from 'react';

import {
  makeStyles,
  withStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@material-ui/core';

// Assets
import { ABOUT } from '../../assets/placeholder/about';
import { GRAPHICS } from '../../assets/img/graphics';

const CustomAccordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    overflow: 'hidden',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(Accordion);

const CustomAccordionSummary = withStyles({
  root: {
    backgroundColor: '#F4F4F4',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(AccordionSummary);

const CustomAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(AccordionDetails);

function FAQ() {
  const [expanded, setExpanded] = useState('panel1');
  const classes = useStyles();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const renderAccordion = () =>
    ABOUT.FAQ.map((faq, index) => (
      <CustomAccordion
        // eslint-disable-next-line
        key={`${index}-${faq.QUESTION}`}
        square
        expanded={expanded === `panel${index + 1}`}
        onChange={handleChange(`panel${index + 1}`)}
        className={
          // eslint-disable-next-line
          index === 0
            ? classes.firstAccordion
            : index === ABOUT.FAQ.length - 1
            ? classes.lastAccordion
            : ''
        }
      >
        <CustomAccordionSummary
          aria-controls={`panel${index + 1}d-content`}
          id={`panel${index + 1}d-header`}
        >
          <Typography className={classes.typography} variant='h3'>
            {faq.QUESTION}
          </Typography>
        </CustomAccordionSummary>
        <CustomAccordionDetails>
          <Typography className={classes.typography} variant='body2'>
            {faq.ANSWER}
          </Typography>
        </CustomAccordionDetails>
      </CustomAccordion>
    ));

  return (
    <Container className={classes.root}>
      <img src={GRAPHICS.CIRCLES} alt='Circles' className={classes.circles} />
      <Container className={classes.container}>{renderAccordion()}</Container>
    </Container>
  );
}

export default FAQ;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: '100px',
    margin: '30px auto',
    position: 'relative',
    overflow: 'hidden',
    zIndex: '0',
  },
  firstAccordion: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastAccordion: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  typography: {
    fontFamily: 'Zilla Slab',
  },
  container: {
    zIndex: '10',
    margin: '80px auto',
  },
  circles: {
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: 'auto',
    zIndex: '0',
  },
}));
