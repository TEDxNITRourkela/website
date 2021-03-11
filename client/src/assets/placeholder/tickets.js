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
  ATTENDEE_KIT: {
    TITLE: 'What is the Attendee Kit?',

    CONTENT: [
      'The attendee kit is hamper of eco-friendly goodies given to all the members attending the event on Airmeet.',
      "The Kit consists of a calendar which when mixed with soil grow into plants. Instead of throwing away the calendar paper in the Dustbin why not grow a plant from that. Isn't it interesting!! These calendars are made from Seed Papers and each month has different seeds engraved. So you will be able to plant a different tree each month.",
      'The next item in the Kit is a Recycled Paper Color Pen with a plantable seed made up of recycled paper. The pen that grows, gently push it in a pot with soil and within 7-8 days you can see the plant growing out of it!',
      'Apart from these, the Kit also has an Eco-Friendly Newspaper Pencil with a plantable seed made up of newspapers. Instead of cutting down trees for wood to shape them into pencils later, this is an eco-friendly solution that uses recycled newspaper to hold graphite within pencils.',
    ],
  },
});
