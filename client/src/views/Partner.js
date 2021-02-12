/* eslint-disable no-unused-vars */
import React from 'react';

// Component
import Partners from '../components/partner/Partners';
import Content from '../components/shared/Content';

// Placeholder
import { PARTNER } from '../assets/placeholder/partner';

function Partner() {
  return (
    <>
      <Partners DATA={PARTNER.ONE} />
      <Partners DATA={PARTNER.TWO} />
      <Partners DATA={PARTNER.THREE} />
      <Content DATA={PARTNER.CONTENT} />
    </>
  );
}

export default Partner;
