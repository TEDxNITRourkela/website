import React from 'react';
import { Typography } from '@material-ui/core';

function ReactLogo() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Typography variant='h1'>Welcome to React Template</Typography>
    </div>
  );
}

export default ReactLogo;
