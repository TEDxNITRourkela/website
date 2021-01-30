import React from 'react';

import  Index  from '../components/homepage/index';
import  Content  from '../components/homepage/content';
import Subscribe from '../components/homepage/subscribe';

function Home() {
  return (
    <div>
      <Index />
      <Content />
      <Subscribe />
    </div>
  );
}

export default Home;
