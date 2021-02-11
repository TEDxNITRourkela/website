/* eslint-disable max-len */
import Facebook from '../img/partners/Facebook.png';
import Adobe from '../img/partners/Adobe.png';
import Netflix from '../img/partners/Netflix.png';
import Google from '../img/partners/Google.png';
import Microsoft from '../img/partners/Microsoft.png';

export const PARTNER = Object.freeze({
    ONE: {
        title:"Title Sponsors" ,
        partners:[Microsoft , Netflix],
    },
    TWO: {
        title:"Platinum Sponsors",
        partners: [Facebook,Adobe,Microsoft,Netflix,Google],
    },
    THREE: {
        title:"Associate Sponsors",
        partners:[Facebook,Adobe,Microsoft,Netflix,Google,Microsoft,Facebook,Google,Adobe,Netflix],
    },
    CONTENT: {
        title: "Why partner with",
        content:"A partnership with TEDxNITRourkela will bring you a diverse and promising audience, and would also allow you to form an emotional connection with our audience. In addition to this, an invitation to the event will be provided, allowing you to observe and interact with the audience to learn about what connects with them, invaluable information for any organization. Associating with TEDxNITRourkela will also allow your corporation to boost its brand awareness and find innovative ideas. Most importantly, association with a non-profit organisation will expand your social reach and corporate social responsibilities.",
        linkText: 'Partner With Us',
        link: 'https://www.ted.com/tedx/events/41324',
    },
  });