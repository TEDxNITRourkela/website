/* eslint-disable */
const createData = (column1, column2, column3, column4, column5, column6) => {
  return { column1, column2, column3, column4, column5, column6 };
};

export const PARTICIPATE = Object.freeze({
  INTRO: {
    TITLE: 'Campus Representative',
    CONTENT:
      'The Campus Representative(CR) Programme is an opportunity for you to be a part of this event as more than just a participant. You will be a point of contact between TEDxNITRourkela and the audience by relaying information about the event to the prospects.',
  },
  BANNER: {
    TITLE: 'Why be a Campus Representative?',
    CONTENT: [
      'You get learning and mentorship opportunities to upskill your public relations skills',
      'You build fantastic networks as a Campus Representative, as we provide you with the opportunity to work with people from all across the country',
      'This program is an excellent way to develop your Soft Skills',
      'We provide you excellent scope to gain and practice marketing and managerial skills',
    ],
  },
  INCENTIVES: {
    TITLE: 'Incentives',
    TABLE: {
      HEADINGS: [
        'Your designation',
        'Deputy Campus Representative',
        'Campus Representative',
        'Campus Ambassador',
        'Campus Ambassador',
        'Campus Ambassador',
      ],
      ROWS: [
        createData('No of referrals', '3+', '7+', '10+', '15+', '20+'),
        createData('Certificate', '☑️', '☑️', '☑️', '☑️', '☑️'),
        createData('Free Ticket to the event', '-', '-', '☑️', '☑️', '☑️'),
        createData('Free Merchandise', '-', '-', '-', '☑️', '☑️'),
        createData(
          'Free Entry to the Next TEDxNITRourkela event',
          '-',
          '-',
          '-',
          '-',
          '☑️',
        ),
      ],
    },
  },
});
