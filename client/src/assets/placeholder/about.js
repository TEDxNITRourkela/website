/* eslint-disable */
import people from '../img/about/people.png';
import profile from '../img/about/defaultprofile.png';
import Rutaj from '../img/about/profile/RutajDash.jpeg';
import Abel from '../img/about/profile/AbelMathew.jpeg';
import Ritesh from '../img/about/profile/tech/RiteshPatil.jpeg';
import Ajibesh from '../img/about/profile/tech/AjibeshMohapatra.jpeg';
import Sashi from '../img/about/profile/tech/SashiKantBharati.jpeg';
import Rama from '../img/about/profile/design/RamaKrushna.jpeg';
import Sambit from '../img/about/profile/design/SambitPradhan.jpeg';
import Sourav from '../img/about/profile/design/SouravPriyadarsi.jpeg';
import Prithvi from '../img/about/profile/design/PrithvirajNaik.jpeg';
import Ekta from '../img/about/profile/management/EktaGambhir.jpeg';
import Lalitha from '../img/about/profile/management/LalithaManaswini.jpeg';
import Ankit from '../img/about/profile/management/AnkitRoutray.jpeg';
import Ankita from '../img/about/profile/management/AnkitaSareen.jpeg';
import Asutosh from '../img/about/profile/management/AsutoshMishra.jpeg';
import Mayank from '../img/about/profile/management/MayankMishra.jpeg';
import Pratyush from '../img/about/profile/management/PratyushNayak.jpeg';
import Roshan from '../img/about/profile/management/RoshanAnduri.jpeg';
import Sobhit from '../img/about/profile/management/SobhitParki.jpeg';
import Spandan from '../img/about/profile/management/SpandanPatra.jpeg';
import Umme from '../img/about/profile/curation/UmmeSalma.jpeg';
import Leo from '../img/about/profile/curation/LeoRaphaelRodrigues.jpeg';
import Aswathy from '../img/about/profile/curation/AswathyRajendran.jpeg';
import Krishnanshu from '../img/about/profile/curation/KrishnansuSharma.jpeg';
import Lokesh from '../img/about/profile/curation/LokeshJain.jpeg';
import Prabhanshu from '../img/about/profile/curation/PrabhanshuChaturvedi.jpeg';
import Shrey from '../img/about/profile/curation/ShreyJha.jpeg';

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
      IMG: Abel,
      DESIGNATION: 'Co-Organizer',
    },
    {
      NAME: 'Rutaj Dash',
      IMG: Rutaj,
      DESIGNATION: 'Co-Organizer',
    },
  ],
  ROW2: [
    {
      NAME: 'Umme Salma',
      IMG: Umme,
      DESIGNATION: 'Curator',
    },
    {
      NAME: 'Leo Rodriguez',
      IMG: Leo,
      DESIGNATION: 'Asst-Curator',
    },
    {
      NAME: 'Rama Krushna',
      IMG: Rama,
      DESIGNATION: 'Design Head',
    },
    {
      NAME: 'Ritesh Patil',
      IMG: Ritesh,
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Ekta Gambhir',
      IMG: Ekta,
      DESIGNATION: 'Management Head',
    },
    {
      NAME: 'Lalitha Manaswini',
      IMG: Lalitha,
      DESIGNATION: 'Asst-Management Head',
    },
  ],
  TECH: [
    {
      NAME: 'Ritesh Patil',
      IMG: Ritesh,
      DESIGNATION: 'Tech Director',
    },
    {
      NAME: 'Ajibesh Mohapatra',
      IMG: Ajibesh,
      DESIGNATION: 'Tech Team Member',
    },
    {
      NAME: 'Shashi Kant Bharati',
      IMG: Sashi,
      DESIGNATION: 'Tech Team Member',
    },
  ],
  DESIGN: [
    {
      NAME: 'Rama Krushna',
      IMG: Rama,
      DESIGNATION: 'Design Head',
    },
    {
      NAME: 'Sourav Priyadarsi',
      IMG: Sourav,
      DESIGNATION: 'Design Team Member',
    },
    {
      NAME: 'Sambit Kumar Pradhan',
      IMG: Sambit,
      DESIGNATION: 'Design Team Member',
    },
    {
      NAME: 'Prithviraj Naik',
      IMG: Prithvi,
      DESIGNATION: 'Design Team Member',
    },
  ],
  MANAGEMENT: [
    {
      NAME: 'Ekta Gambhir',
      IMG: Ekta,
      DESIGNATION: 'Management Head',
    },
    {
      NAME: 'Lalitha Manaswini',
      IMG: Lalitha,
      DESIGNATION: 'Asst-Management Head',
    },
    {
      NAME: 'Ankit Routray',
      IMG: Ankit,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Ankita Sareen',
      IMG: Ankita,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Asutosh Mishra',
      IMG: Asutosh,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Mayank Mishra',
      IMG: Mayank,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Pratyush Kumar Nayak',
      IMG: Pratyush,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Roshan Anduri',
      IMG: Roshan,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Sobhit Parki',
      IMG: Sobhit,
      DESIGNATION: 'Management Team Member',
    },
    {
      NAME: 'Spandan Patra',
      IMG: Spandan,
      DESIGNATION: 'Management Team Member',
    },
  ],
  CURATION: [
    {
      NAME: 'Umme Salma',
      IMG: Umme,
      DESIGNATION: 'Curator',
    },
    {
      NAME: 'Leo Rodriguez',
      IMG: Leo,
      DESIGNATION: 'Asst-Curator',
    },
    {
      NAME: 'Aswathy Rajendran',
      IMG: Aswathy,
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Krishnanshu Sharma',
      IMG: Krishnanshu,
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Lokesh Jain',
      IMG: Lokesh,
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Prabhanshu Chaturvedi',
      IMG: Prabhanshu,
      DESIGNATION: 'Curation Team Member',
    },
    {
      NAME: 'Shrey Jha',
      IMG: Shrey,
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
