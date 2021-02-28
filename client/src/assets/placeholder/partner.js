/* eslint-disable max-len */
import { LOGOS } from '../img/logos';
import { PARTNERS } from '../img/pages';

export const PARTNER = Object.freeze({
  ZERO: {
    title: 'Our Benefactors',
    partners: [],
  },
  ONE: {
    title: 'Our Patrons',
    partners: [],
  },
  TWO: {
    title: 'Our Supporters',
    partners: [],
  },
  THREE: {
    title: 'Our Associates',
    partners: [],
  },
  FOUR: {
    title: 'TEDx Partners',
    partners: [
      {
        img: PARTNERS.EVERWALL,
        href: 'https://everwall.com',
        hrefTitle: 'Everwall Social Wall',
      },
      {
        img: PARTNERS.FLICKR,
        href: 'https://flickr.com',
        hrefTitle: 'Flickr',
      },
      {
        img: PARTNERS.MAILCHIMP,
        href: 'https://mailchimp.com',
        hrefTitle: 'MailChimp',
      },
      {
        img: PARTNERS.SHUTTERSTOCK,
        href: 'https://shutterstock.com',
        hrefTitle: 'ShutterStock',
      },
    ],
  },
  FIVE: {
    title: 'Title Sponsor',
    partners: [
      {
        img: PARTNERS.TATA,
        href: 'https://tatasteel.com',
        hrefTitle: 'TATA Steel',
      },
    ],
  },
  CONTENT: {
    TITLE: 'Why partner with',
    CONTENT:
      'A partnership with TEDxNITRourkela will bring you a diverse and promising audience, and would also allow you to form an emotional connection with our audience. In addition to this, an invitation to the event will be provided, allowing you to observe and interact with the audience to learn about what connects with them, invaluable information for any organization. Associating with TEDxNITRourkela will also allow your corporation to boost its brand awareness and find innovative ideas. Most importantly, association with a non-profit organisation will expand your social reach and corporate social responsibilities.',
    LINKTEXT: 'Partner With Us',
    LINK: 'https://files.tedxnitrourkela.com/Partnership_Brochure.pdf',
    LOGO: LOGOS.TEDxNITRourkela.LIGHT,
  },
});
