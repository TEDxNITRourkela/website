/* eslint-disable */
const createData = (column1, column2, column3) => {
  return { column1, column2, column3 };
};

export const TICKETS = Object.freeze({
  TITLE: 'Ticket Breakdown',
  TABLE: {
    HEADINGS: ['Item', 'Description', 'Price'],
    ROWS: [
      createData('Base Ticket', 'Entry to Airmeet', '₹ 199'),
      createData(
        'Attendee Kit',
        'A hamper of goodies sent to your home!',
        '₹ 322.24',
      ),
    ],
    ROWS_REFERRAL: [
      createData('Base Ticket', 'Entry to Airmeet', '₹ 199'),
      createData(
        'Attendee Kit',
        'A hamper of goodies sent to your home!',
        '₹ 218.70',
      ),
    ],
  },
});
