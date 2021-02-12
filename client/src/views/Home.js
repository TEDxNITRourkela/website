/* eslint-disable no-unused-vars */
import React from 'react';

import Index from '../components/homepage/index';
import Content from '../components/shared/Content';
import Subscribe from '../components/homepage/Subscription';
import TedContent from '../components/homepage/TedContent';
import Partners from '../components/homepage/Partners';

import { CONTENT } from '../assets/placeholder/homepage';

function Home() {
  return (
    <>
      <Index />
      <TedContent />
      <Content DATA={CONTENT.ONE} />
      {/* <Subscribe /> */}
      {/* <Partners /> */}
    </>
  );
}

export default Home;
