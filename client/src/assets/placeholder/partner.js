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
        size: '20%',
      },
      {
        img: PARTNERS.FLICKR,
        href: 'https://flickr.com',
        hrefTitle: 'Flickr',
        size: '20%',
      },
      {
        img: PARTNERS.MAILCHIMP,
        href: 'https://mailchimp.com',
        hrefTitle: 'MailChimp',
        size: '20%',
      },
      {
        img: PARTNERS.SHUTTERSTOCK,
        href: 'https://shutterstock.com',
        hrefTitle: 'ShutterStock',
        size: '20%',
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
        size: '20%',
      },
    ],
  },
  SIX: {
    title: 'Outreach Partners',
    partners: [
      {
        img: PARTNERS.ROURKELA360,
        href: 'https://rourkela360.business.site/',
        hrefTitle: 'Rourkela360',
        size: '15%',
      },
      {
        img: PARTNERS.NOTICEBARD,
        href: 'https://www.noticebard.com/',
        hrefTitle: 'Noticebard',
        size: '20%',
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
