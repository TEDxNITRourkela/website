import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Utilities
import { analytics } from '../config/firebase';

function Wall() {
  useEffect(() => {
    analytics().logEvent('Wall Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela</title>
        <meta name='title' content='TEDxNITRourkela' />
        <link rel='canonical' href='https://tedxnitrourkela.com/wall' />
      </Helmet>
      <iframe
        allowFullScreen
        id='wallsio-iframe'
        src='https://my.walls.io/u6j9y?nobackground=1&amp;show_header=0'
        style={{
          border: '0px',
          height: '100vh',
          width: '100%',
          marginTop: '100px',
        }}
        loading='lazy'
        title='TEDxNITRourkela 2021: Learning from the Past'
      />
    </>
  );
}

export default Wall;
