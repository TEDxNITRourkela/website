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
    {
      '@type': 'Person',
      name: 'Anup Nandy',
    },
    {
      '@type': 'Person',
      name: 'Ashwathy Satheesan',
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'TEDxNITRourkela',
    url: 'https://tedxnitrourkela.com/',
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

export const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who are the speakers for TEDxNITRourkela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We’re still working towards curating a fantastic experience for all of you. Feel free to keep an eye on our social media channels! Checkout the list of revealed speakers <a href="https://tedxnitrourkela.com/speakers">here</a>',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is organizing the event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'We’re a group of students at NIT Rourkela who feel passionate about the TED mission, “Ideas Worth Spreading.”',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the event be an online one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Yes, due to the pandemic, our event will take place virtually on the Airmeet platform.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I attend the event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          "Due to the pandemic, our event will take place virtually on the Airmeet platform. Tickets will be available on our <a href='https://tedxnitrourkela.com/tickets'>website</a>.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of a single ticket?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are pricing the registration tickets at Rs. 500/-',
      },
    },
    {
      '@type': 'Question',
      name: 'Why should I attend the event if it is only virtual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Great question! While all our speakers’ talks will be live-streamed on YouTube, the live event will include premium content and interactive experiences that will only be made available via the live event, such as musical performances, stand-ups, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do TEDx speakers or organizers get paid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'No. TEDx events are entirely a volunteer endeavor to bring the best together under one roof.',
      },
    },
  ],
};

export const logoData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: 'https://tedxnitrourkela.com/',
  logo:
    'https://res.cloudinary.com/tedxnitrourkela/image/upload/v1613306686/assets/logos/logo_dark_oipjvc.png',
};
