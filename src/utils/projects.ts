import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    name: 'NogiHub',
    image: 'img', // TODO: Add screenshots later,
    tagline:
      'A lightweight Twitter/X social media clone created with MERN stack',
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React Router',
      'Vite',
      'TailwindCSS',
      'DaisyUI',
      'Lucide',
      'Axios',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'JWT',
      'Bcrypt',
    ],
    link: 'https://nogihub.onrender.com/',
    github: 'https://github.com/Nogiback/NogiHub-App',
  },
];

export default projects;
