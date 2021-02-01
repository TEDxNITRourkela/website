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
    <div className={classes.root}>
      <Container>{renderAccordion()}</Container>
    </div>
  );
}

export default FAQ;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: '100px',
    margin: '40px auto',
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
}));
