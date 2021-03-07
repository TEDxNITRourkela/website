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

        {PARTNER.ONE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
        {PARTNER.TWO.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.THREE.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}

        {PARTNER.FOUR.partners.map(({ hrefTitle }) => (
          <meta
            name='description'
            content={`TEDxNITRourkela | Partner | ${hrefTitle}`}
            key={hrefTitle}
          />
        ))}
      </Helmet>

      <Partners DATA={PARTNER.ONE} main />
      <Partners DATA={PARTNER.TWO} />
      <Partners DATA={PARTNER.THREE} />
      <Partners DATA={PARTNER.FOUR} />

      <ContentBanner DATA={PARTNER.CONTENT} wrapContainer />
    </>
  );
}

export default Partner;
