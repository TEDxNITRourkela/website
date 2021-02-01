import React, { useState } from 'react';

// Libraries
import { makeStyles, Container, Typography } from '@material-ui/core';

// Components
import Profile from '../shared/Profile';

// Assets
import { ABOUT } from '../../assets/placeholder/about';
import polygon from '../../assets/img/homepage/topLeftPolygon.png';

const STAGE = {
  DESIGN: 'Design Team',
  TECH: 'Tech Team',
  CURATION: 'Curation Team',
  MANAGEMENT: 'Management Team',
};

function Team() {
  const [stage, setStage] = useState(STAGE.DESIGN);
  // const [inProp, setInProp] = useState(true);
  const classes = useStyles(stage);

  // Helpers
  const setStageToDesign = () => setStage(STAGE.DESIGN);
  const setStageToTech = () => setStage(STAGE.TECH);
  const setStageToCuration = () => setStage(STAGE.CURATION);
  const setStageToManagement = () => setStage(STAGE.MANAGEMENT);

  const renderTeam = () => {
    switch (stage) {
      case STAGE.DESIGN:
        return ABOUT.TEAM.DESIGN.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      case STAGE.TECH:
        return ABOUT.TEAM.TECH.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      case STAGE.CURATION:
        return ABOUT.TEAM.CURATION.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      case STAGE.MANAGEMENT:
        return ABOUT.TEAM.MANAGEMENT.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
      default:
        return ABOUT.TEAM.DESIGN.map((member, index) => (
          <Profile
            // eslint-disable-next-line
            key={`${member.NAME}${index}`}
            member={member}
            showDesignation={false}
            dark={false}
            small
          />
        ));
    }
  };

  return (
    <Container className={classes.root}>
      <div className={classes.navContainer}>
        <Typography
          className={classes.navLink}
          onClick={setStageToDesign}
          variant='h3'
          style={{
            color: stage === STAGE.DESIGN ? '#fff' : 'rgba(255,255,255,0.4)',
          }}
        >
          Design Team
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToTech}
          variant='h3'
          style={{
            color: stage === STAGE.TECH ? '#fff' : 'rgba(255,255,255,0.4)',
          }}
        >
          Tech Team
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToCuration}
          variant='h3'
          style={{
            color: stage === STAGE.CURATION ? '#fff' : 'rgba(255,255,255,0.4)',
          }}
        >
          Curation Team
        </Typography>
        <Typography
          className={classes.navLink}
          onClick={setStageToManagement}
          variant='h3'
          style={{
            color:
              stage === STAGE.MANAGEMENT ? '#fff' : 'rgba(255,255,255,0.4)',
          }}
        >
          Management Team
        </Typography>
      </div>

      <div className={classes.teamContainer}>
        <Typography className={classes.teamName} variant='h2'>
          {stage}
        </Typography>
        <div className={classes.wrapperContainer}>{renderTeam()}</div>
        <img src={polygon} alt='Polygon' className={classes.polygon} />
      </div>
    </Container>
  );
}

export default Team;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 40,
    marginBottom: 40,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  navContainer: {
    width: '25%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  teamContainer: {
    minHeight: 200,
    height: '100%',
    width: '70%',
    backgroundColor: '#D2DAE1',
    padding: 30,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  wrapperContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navLink: {
    margin: '20px auto',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'Zilla Slab',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  teamName: {
    fontFamily: 'Zilla Slab',
    color: '#1A1A1A',
    opacity: 0.5,
    marginBottom: '20px',
  },
  polygon: {
    transform: 'scaleX(-1)',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '70%',
  },
}));
