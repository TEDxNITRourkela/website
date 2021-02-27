/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

// Libraries
import { Helmet } from 'react-helmet';

// Utilities
import { analytics } from '../config/firebase';

// Component
import Partners from '../components/partner/Partners';
import ContentBanner from '../components/shared/ContentBanner';

// Placeholder
import { PARTNER } from '../assets/placeholder/partner';

function Partner() {
  useEffect(() => {
    analytics().logEvent('Partner Page Loaded');
  }, []);

  return (
    <>
      <Helmet>
        <title>TEDxNITRourkela | Partners</title>
        <meta name='title' content='TEDxNITRourkela | Partners' />

        {PARTNER.FOUR.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
          />
        ))}
        {PARTNER.FIVE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
          />
        ))}
      </Helmet>

      {/* <Partners DATA={PARTNER.ZERO} /> */}
      {/* <Partners DATA={PARTNER.ONE} /> */}
      {/* <Partners DATA={PARTNER.TWO} /> */}
      <Partners DATA={PARTNER.FIVE} main />
      <Partners DATA={PARTNER.FOUR} />
      <ContentBanner DATA={PARTNER.CONTENT} wrapContainer />
    </>
  );
}

export default Partner;
