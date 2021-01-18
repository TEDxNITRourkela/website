import React from 'react';
import logo from '../assets/img/logo.png';

function Error() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: window.innerHeight,
        width: '100%',
        backgroundColor: '#000000',
      }}
    >
      <img
        style={{
          width: 350,
          height: 'auto',
        }}
        src={logo}
        alt='TEDxNITRourkela'
      />
      <h1 style={{ color: '#fff', marginTop: 50 }}>Error 404</h1>
      <h3 style={{ color: '#fff', fontWeight: '400' }}>Page Not Found</h3>
    </div>
  );
}

export default Error;
