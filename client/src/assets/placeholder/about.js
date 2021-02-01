/* eslint-disable */
import people from '../img/about/people.png';
import profile from '../img/about/defaultprofile.png';

export const ABOUT = Object.freeze({
  SECTION: {
    ONE: {
      QUESTION: 'What is',
      HIGHLIGHT: 'TED',
      CONTENT:
        "TED is a global community, welcoming people from every discipline and culture who seek a deeper understanding of the world around them. The organisation believes in the power of ideas, ideas that can change attitudes, lives and, ultimately, the world. The aim is to build a clearinghouse of free knowledge from the world's most inspired thinkers — and a community of curious minds to engage with ideas, both online and at TED and TEDx events around the world, all year long. TED Conferences see attendee counts of over a hundred thousand.",
      IMG: people,
    },
    TWO: {
      QUESTION: 'What is',
      HIGHLIGHT: 'TEDx',
      CONTENT:
        'A TEDx event, similar to its international counterpart, is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis, thus providing a platform for pioneers and deep thinkers from all walks of life to showcase their ideas.',
      IMG: people,
    },
  },
  TEAM: {
    ROW1: [
      {
        NAME: 'Abel Mathew',
        IMG: profile,
        DESIGNATION: 'Co-Organizer',
      },
      {
        NAME: 'Rutaj Dash',
        IMG: profile,
        DESIGNATION: 'Co-Organizer',
      },
    ],
    ROW2: [
      {
        NAME: 'Umme Salma',
        IMG: profile,
        DESIGNATION: 'Curator',
      },
      {
        NAME: 'Leo Rodriguez',
        IMG: profile,
        DESIGNATION: 'Asst-Curator',
      },
      {
        NAME: 'Rama Krushna',
        IMG: profile,
        DESIGNATION: 'Design Head',
      },
      {
        NAME: 'Ritesh Patil',
        IMG: profile,
        DESIGNATION: 'Tech Director',
      },
      {
        NAME: 'Ekta Gambhir',
        IMG: profile,
        DESIGNATION: 'Management Head',
      },
      {
        NAME: 'Lalitha Manaswini',
        IMG: profile,
        DESIGNATION: 'Asst-Management Head',
      },
    ],
  },
});
