/* eslint-disable */
const createData = (column1, column2, column3) => {
  return { column1, column2, column3 };
};

export const MERCH = [
  {
    name: 'The NITR @ 60 Tee',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/NITR_60_1_bkovwe.jpg',
    description:
      'Flaunt the SEXAGENARION legacy of NITR with this cool NITR@60 Black Tee.',
    price: '349',

    tshirtCode: 'nitr60',
  },
  {
    name: 'The Class-X of 2021',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/Class_Of_2021_jg3wn4.jpg',
    description:
      'Celebrate your adventurous journey with this classy CLASS OF 2021 Tee, and cherish the wonderful memories.',
    price: '399',
    tshirtCode: 'classof2021',
  },
  {
    name: 'The X-Treme Tee',
    imageUrl:
      'https://res.cloudinary.com/tedxnitrourkela/image/upload/assets/pages/merchandise/X_factor_2_muxcy2.jpg',
    description:
      'Add a WOW factor to your wardrobe with this cool X-TREME Tee, and flaunt that fresh design!',
    price: '399',
    paymentLink:
      'https://studentactivitycenter.stores.instamojo.com/product/291810/the-x-treme-tee-tedxnitrourkela/',
    dataID: '291810',
    tshirtCode: 'xtreme',
  },
];

export const SIZE_CHART = Object.freeze({
  TITLE: 'Size Chart',
  TABLE: {
    HEADINGS: ['Size', 'Chest', 'Length'],
    ROWS: [
      createData('S', '36', '26'),
      createData('M', '38', '27'),
      createData('L', '40', '28'),
      createData('XL', '42', '29'),
      createData('XXL', '44', '30'),
    ],
  },
});
