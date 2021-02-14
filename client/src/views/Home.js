/* eslint-disable no-unused-vars */
import React from 'react';

import Index from '../components/homepage/index';
import Subscribe from '../components/homepage/Subscription';
import TedContent from '../components/homepage/TedContent';
import Partners from '../components/homepage/Partners';
import ContentBanner from '../components/shared/ContentBanner';

import { CONTENT2 } from '../assets/placeholder/homepage';

function Home() {
  return (
    <>
      <Index />
      <ContentBanner DATA={CONTENT2.TWO} smallLogo wrapContainer />
      <ContentBanner DATA={CONTENT2.ONE} wrapContainer />
      {/* <Subscribe /> */}
      {/* <Partners /> */}
    </>
  );
}

export default Home;
