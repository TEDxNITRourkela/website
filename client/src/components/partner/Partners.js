import React from 'react';

// Libraries
import { makeStyles , Container } from '@material-ui/core';

// image
import topLeft from '../../assets/img/partners/topLeft.png';

function Partner({ DATA , first }) {
  const classes = useStyles();

  const renderPartnerContainer = (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        {DATA.title}
      </div>
      <div className={classes.partnerContainer}>
        {DATA.partners.map((sponsor)=>(
          <img src={sponsor} alt='Sponsor' className={classes.sponsor} />
        ))}
      </div>
    </div>
  );

  return (
    <Container
      style={{ marginTop: first ? '150px' : '120px' }}
    >
      <img src={topLeft} alt='ellipses' className={classes.image} />
      {renderPartnerContainer}
    </Container>
  );
}

export default Partner;

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'absolute',
        top: 0,
        left:0,
    },
    title: {
        marginBottom: '40px',
        fontFamily: 'Zilla Slab',
        fontWeight: 700,
        fontSize: '36px',
        lineHeight: '43.2px',
        textAlign: 'center',
        color: theme.palette.common.white,
    },
    partnerContainer: {
        margin: '20px 0px',
        flex: 1,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sponsor: {
        margin: '15px 35px',
        opacity: 0.5,
    },
}));