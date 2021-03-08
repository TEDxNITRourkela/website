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
    analytics().logEvent('Merchandise Page Loaded');
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
        <link rel='canonical' href='https://tedxnitrourkela.com/merchandise' />
        {MERCH.map((product) => (
          <meta
            name='description'
            // eslint-disable-next-line
            content={`TEDxNITRourkela | Merchandise | ${product.name} | ${product.description}`}
          />
        ))}
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
            ({
              name,
              description,
              imageUrl,
              price,
              tshirtCode,
              discountedPrice,
            }) => (
              <Product
                key={tshirtCode}
                title={name}
                description={description}
                imgSrc={imageUrl}
                price={price}
                tshirtCode={tshirtCode}
                discountedPrice={discountedPrice}
              />
            ),
          )}
        </div>

        <Container className={classes.tableContainer}>
          <CustomTable
            title={SIZE_CHART.TITLE}
            rows={SIZE_CHART.TABLE.ROWS}
            headings={SIZE_CHART.TABLE.HEADINGS}
            columns={['column2', 'column3']}
          />
        </Container>

        <Typography variant='body2' className={classes.measurements}>
          * all measurements are in inches
        </Typography>
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
  measurements: {
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Zilla Slab',
    fontWeight: 'bold',
    color: '#ffffff',
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: 30,
  },
  tableContainer: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
