import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en-es', // e.g: en, es, fr, jp
  description: 'Welcome to my Gatsby portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello world, my name is',
  name: 'Adriano',
  subtitle: 'Full-stack Web Developer',
  cta: 'More Info',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Known as an innovative problem solver and passinate about developing healthy business relationships into successful projects both online and offline wise. ',
  paragraphTwo:
    'I find inspiration by approaching tech challenges through a human perspective focusing on interpersonal relationships as a fundamental milestone of every business.',
  paragraphThree:
    'I also have a special crush on design and fron-end technologies. My goal this year is to get an entry position on a front-end role to master my skills and grow as a professional.',
  resume: 'https://drive.google.com/file/d/1kg6Mfy4G0UMV_z7aZ_5ic8V4bVmhDpul/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'react-portfolio.jpg',
    title: 'React Portfolio',
    info: 'My main deployed portfolio was designed to showcase my React knowledge with useState and React router. Several custom-made design elements were created to provide a unique dark feel.',
    info2: '',
    url: 'https://determined-volhard-b649b0.netlify.app/',
    repo: 'https://github.com/AdrianoArmen/adrianos-react-portfolio-20',
  },
  {
    id: nanoid(),
    img: 'happy-pet-shelter.jpg',
    title: 'Happy Pets Shelter',
    info: 'Responsive application built to match animals with their perfect new family. I was in charge of the front-end and I could do my first SVG animation for the header',
    info2: '',
    url: 'https://desolate-tundra-25750.herokuapp.com/',
    repo: 'https://github.com/adina-hc/happy-pets-shelter-app',
  },
  {
    id: nanoid(),
    img: 'sports-almanac.jpg',
    title: 'Sports Almanac',
    info: 'Application created to provide football fans with the latest information about their favorite leagues worldwide including matches data thanks to API fetching',
    info2: '',
    url: 'https://adina-hc.github.io/sports-almanac/',
    repo: 'https://github.com/adina-hc/sports-almanac',
  },
  {
    id: nanoid(),
    img: 'weather-dashboard.jpg',
    title: 'Weather Dashboard',
    info: 'Application designed to provide real-time weather information about any searched city. It can display a Five-day forecast thanks to the OpenWeather API',
    info2: '',
    url: 'https://adrianoarmen.github.io/adrianos-weather-dashboard-6/',
    repo: 'https://github.com/AdrianoArmen/adrianos-weather-dashboard-6',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Wanto to ask me something?',
  btn: 'Let´s connect',
  email: 'adriano.armendaris@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
