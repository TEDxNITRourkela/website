/* eslint-disable no-undef */
import React, { useEffect } from 'react';

// Libraries
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// Utilities
import { analytics } from '../config/firebase';

// Components
import Product from '../components/merchandise/Merch';
import CustomTable from '../components/shared/Table';

// Assets
import { GRAPHICS } from '../assets/img/graphics';
import { MERCH, SIZE_CHART } from '../assets/placeholder/merchandise';

function Tickets() {
  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://manage.instamojo.com/assets/js/pay_button/button.min.js';
    script.async = true;

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    analytics().logEvent('Merchandise Page Loaded');
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
      </Helmet>

      <img
        className={classes.topLeft}
        src={GRAPHICS.TOP_LEFT}
        alt='Top Left Graphics'
      />

      <Container>
        <Typography variant='h1' className={classes.title}>
          Merchandise
        </Typography>

        <div className={classes.productsContainer}>
          {MERCH.map(
            ({ name, description, imageUrl, paymentLink, price, dataID }) => (
              <Product
                key={paymentLink}
                title={name}
                description={description}
                imgSrc={imageUrl}
                price={price}
                paymentLink={paymentLink}
                dataID={dataID}
              />
            ),
          )}
        </div>

        <div className={classes.tableContainer}>
          <CustomTable
            title={SIZE_CHART.TITLE}
            rows={SIZE_CHART.TABLE.ROWS}
            headings={SIZE_CHART.TABLE.HEADINGS}
            columns={['column2', 'column3']}
          />
        </div>
      </Container>
    </div>
  );
}

export default Tickets;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    marginTop: '100px',
    position: 'relative',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Zilla Slab',
    fontWeight: 'bold',
    color: '#ffffff',
    paddingTop: 40,
    marginBottom: 30,
  },
  productsContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tableContainer: {
    minHeight: '250px',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '30px',
  },
}));
