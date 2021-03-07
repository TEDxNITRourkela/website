/* eslint-disable */
const createData = (column1, column2, column3) => {
  return { column1, column2, column3 };
};

export const TICKETS = Object.freeze({
  TITLE: 'Ticket Breakdown',
  TABLE: {
    HEADINGS: ['Item', 'Description', 'Price'],
    ROWS: [
      createData('Base Ticket', 'Virtual Event Stage(Airmeet)', '₹ 199'),
      createData(
        'Attendee Kit',
        'Goodies sent to your home! (Optional)',
        '₹ 299',
      ),
      createData('Convenience Fee', 'Processing Charges', '₹ 29'),
    ],
    ROWS_REFERRAL: [
      createData('Base Ticket', 'Virtual Event Stage(Airmeet)', '₹ 199'),
      createData(
        'Attendee Kit',
        'A hamper of goodies sent to your home!',
        '₹̶ ̶2̶9̶9̶ ₹ 199',
      ),
      createData('Convenience Fee', 'Processing Charges', '₹ 19'),
    ],
  },
});
