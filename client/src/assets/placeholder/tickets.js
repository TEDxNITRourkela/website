/* eslint-disable */
const createData = (column1, column2, column3) => {
  return { column1, column2, column3 };
};

export const TICKETS = Object.freeze({
  TITLE: 'Ticket Breakdown',
  TABLE: {
    HEADINGS: ['Item', 'Description', 'Price'],
    ROWS: [
      createData('Base Ticket', 'Virtual Event Stage (Airmeet)', '₹ 199'),
      createData(
        'Attendee Kit',
        'Goodies sent to you! (Optional, Shipping in India only)',
        '₹ 299',
      ),
      createData('Convenience Fee', 'Processing Charges', '₹ 29'),
    ],
    ROWS_REFERRAL: [
      createData('Base Ticket', 'Virtual Event Stage (Airmeet)', '₹ 199'),
      createData(
        'Attendee Kit',
        'Goodies sent to you! (Optional, Shipping in India only)',
        '₹̶ ̶2̶9̶9̶ ₹ 199',
      ),
      createData('Convenience Fee', 'Processing Charges', '₹ 19'),
    ],
  },
  BANNER: {
    TITLE: 'Why Attendee Kit is an eco-friendly gift',
    CONTENT: [
      'No new materials are required in manufacturing these pens, as we are reusing waste papers and protecting the environment.',
      'The paper is completely bio-degradable, so no pollution problem.',
      'These pens are made from recycled paper and not from tree wood thus saving billions of trees to be cut down.',
      'These pens are embedded with vegetable/fruit/flower seeds. After the purpose of these pencils to be used as a writing instrument is served, we can just bury it in the mud pot and the seeds grow into new saplings or plants.',
      'These seed plantable pens will sprout within 6-9 days after planting and can be used for your home garden or office desk.',
      'Traditional plastic-based pens are a great threat to the environment. Around 275 million tonnes of plastic waste is generated each year around the world; between 4.8 million and 12.7 million tonnes are dumped into the sea. These eco-friendly pens are made from recycled cardboard and newspaper which are plastic-free.',
      'Also, it motivates you to plant a tree, contributing to a greener and cleaner environment.',
    ],
  },
});
