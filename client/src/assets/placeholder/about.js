/* eslint-disable */
import people from '../img/about/people.png';
import profile from '../img/about/defaultprofile.png';

const SECTION = Object.freeze({
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
});

const TEAM = Object.freeze({
  ROW1: [
    {
      NAME: 'Abel Mathew',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/AbelMathew.jpeg',
      DESIGNATION: 'Co-Organizer',
    },
    {
      NAME: 'Rutaj Dash',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/RutajDash.jpeg',
      DESIGNATION: 'Co-Organizer',
    },
  ],
  ROW2: [
    {
      NAME: 'Umme Salma',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/UmmeSalma.jpeg',
      DESIGNATION: 'Curator',
    },
    {
      NAME: 'Leo Rodriguez',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/LeoRaphaelRodrigues.jpeg',
      DESIGNATION: 'Asst-Curator',
    },
    {
      NAME: 'Rama Krushna',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/design/RamaKrushna.jpeg',
      DESIGNATION: 'Design Head',
    },
    {
      NAME: 'Ritesh Patil',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/RiteshPatil.jpeg',
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Ekta Gambhir',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/EktaGambhir.jpeg',
      DESIGNATION: 'Management Head',
    },
    {
      NAME: 'Lalitha Manaswini',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/LalithaManaswini.jpeg',
      DESIGNATION: 'Asst-Management Head',
    },
  ],
  TECH: [
    {
      NAME: 'Ritesh Patil',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/RiteshPatil.jpeg',
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Ajibesh Mohapatra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/AjibeshMohapatra.jpeg',
      DESIGNATION: 'Tech Team Member',
    },
    {
      NAME: 'Shashi Kant Bharati',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/technical/SashiKantBharati.jpeg',
      DESIGNATION: 'Tech Team Member',
    },
  ],
  DESIGN: [
    {
      NAME: 'Rama Krushna',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/design/RamaKrushna.jpeg',
      DESIGNATION: 'Design Head',
    },
    {
      NAME: 'Sourav Priyadarsi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/design/SouravPriyadarsi.jpeg',
      DESIGNATION: 'Design Team Member',
    },
    {
      NAME: 'Sambit Kumar Pradhan',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/design/SambitPradhan.jpeg',
      DESIGNATION: 'Design Team Member',
    },
    {
      NAME: 'Prithviraj Naik',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/design/PrithvirajNaik.jpeg',
      DESIGNATION: 'Design Team Member',
    },
  ],
  MANAGEMENT: [
    {
      NAME: 'Ekta Gambhir',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/EktaGambhir.jpeg',
      DESIGNATION: 'Management Head',
    },
    {
      NAME: 'Lalitha Manaswini',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/LalithaManaswini.jpeg',
      DESIGNATION: 'Asst-Management Head',
    },
    {
      NAME: 'Ankit Routray',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/AnkitRoutray.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Ankita Sareen',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/AnkitaSareen.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Asutosh Mishra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/AsutoshMishra.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Mayank Mishra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/MayankMishra.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Pratyush Kumar Nayak',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/PratyushNayak.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Roshan Anduri',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/RoshanAnduri.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Sobhit Parki',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/SobhitParki.jpeg',
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Spandan Patra',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/management/SpandanPatra.jpeg',
      DESIGNATION: 'Management Team Member',
    },
  ],
  CURATION: [
    {
      NAME: 'Umme Salma',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/UmmeSalma.jpeg',
      DESIGNATION: 'Curator',
    },
    {
      NAME: 'Leo Rodriguez',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/LeoRaphaelRodrigues.jpeg',
      DESIGNATION: 'Asst-Curator',
    },
    {
      NAME: 'Aswathy Rajendran',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/AswathyRajendran.jpeg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Krishnanshu Sharma',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/KrishnansuSharma.jpeg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Lokesh Jain',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/LokeshJain.jpeg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Prabhanshu Chaturvedi',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/PrabhanshuChaturvedi.jpeg',
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Shrey Jha',
      IMG: 'https://res.cloudinary.com/tedxnitrourkela/image/upload/team/curation/ShreyJha.jpeg',
      DESIGNATION: 'Curation Team Member',
    },
  ],
});

const FAQ = [
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
  {
    QUESTION: 'This is a Question?',
    ANSWER:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam consequatur, laborum temporibus debitis itaque doloremque cumque modi veritatis odit quia obcaecati, libero repellat distinctio ab error quos nisi sint eum.',
  },
];

export const ABOUT = Object.freeze({
  SECTION,
  TEAM,
  FAQ,
});
