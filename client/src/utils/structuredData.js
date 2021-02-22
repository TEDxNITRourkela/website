/* eslint-disable */
export const eventData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'TEDxNITRourkela',
  description:
    "TEDxNITRourkela is an independently organized TED event coordinated and curated by a group of NIT Rourkela students. We present people with the opportunity to suggest innovative and efficient ideas to tackle our society's various issues, thus gathering a diverse range of voices from many disciplines that exist to help humanity grow. From essential, radical, and exciting ideas to electrifying performances from performers who are on top of their respective fields, we aspire to deliver to you an experience you would not want to miss.",
  image:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1613306686/assets/logos/logo_dark_oipjvc.png',
  startDate: '2021-03-13T17:00+05:30',
  endDate: '2021-03-14T17:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: 'http://tedxnitrourkela.com/',
  },
  performer: [
    {
      '@type': 'Person',
      name: 'Lisa Russell',
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'TEDxNITRourkela',
    url: 'https://www.nitrkl.ac.in/',
  },
  offers: {
    '@type': 'Offer',
    name: 'TEDxNITRourkela Online Ticket',
    price: '500',
    priceCurrency: 'INR',
    validFrom: '2021-02-15',
    url: 'https://imjo.in/9FCuMU',
    availability: 'https://schema.org/InStock',
  },
};

export const breadcrumbsData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: '1',
      name: 'About',
      item: 'https://tedxnitrourkela.com/about',
    },
    {
      '@type': 'ListItem',
      position: '2',
      name: 'Speakers',
      item: 'https://tedxnitrourkela.com/speakers',
    },
    {
      '@type': 'ListItem',
      position: '3',
      name: 'Tickets',
      item: 'https://tedxnitrourkela.com/tickets',
    },
    {
      '@type': 'ListItem',
      position: '4',
      name: 'Campus Representative',
      item: 'https://tedxnitrourkela.com/campus_ambassadors',
    },
    {
      '@type': 'ListItem',
      position: '5',
      name: 'Wall',
      item: 'https://tedxnitrourkela.com/wall',
    },
    {
      '@type': 'ListItem',
      position: '5',
      name: 'Partners',
      item: 'https://tedxnitrourkela.com/partners',
    },
  ],
};
