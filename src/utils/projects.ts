import { v4 as uuidv4 } from 'uuid';
import momentum from '../assets/projects/momentum.png';
import nogihub from '../assets/projects/nogihub.png';
import nogichat from '../assets/projects/nogichat.png';
import nogiblog from '../assets/projects/nogiblog.png';
import nogishop from '../assets/projects/thenogishop.png';
import resumebuilder from '../assets/projects/resumebuilder.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Momentum Advertising & Design',
    image: momentum,
    tagline: 'A straightforward landing page for a local online business.',
    technologies: [
      'Typescript',
      'NextJS',
      'React',
      'TailwindCSS',
      'Vercel',
      'PostgreSQL',
      'Prisma',
    ],
    link: 'https://momentumads.ca/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'NogiHub',
    image: nogihub,
    tagline:
      'A lightweight Twitter/X social media clone created with MERN stack.',
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React Router',
      'TailwindCSS',
      'DaisyUI',
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
  {
    id: uuidv4(),
    name: 'NogiChat',
    image: nogichat,
    tagline:
      'A simple real-time chat messaging application made with MERN stack and socket.io',
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React Router',
      'TailwindCSS',
      'DaisyUI',
      'Axios',
      'Zustand',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'JWT',
      'Bcrypt',
      'Socket.io',
    ],
    link: 'https://nogichat.onrender.com/',
    github: 'https://github.com/Nogiback/NogiChat-App',
  },
  {
    id: uuidv4(),
    name: 'Personal Blog',
    image: nogiblog,
    tagline:
      'A personal blog website with a built-in CMS for content management.',
    technologies: [
      'Typescript',
      'React',
      'React Router',
      'ChakraUI',
      'Axios',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'JWT',
      'Bcrypt',
    ],
    link: 'https://nogi-blog.vercel.app',
    github: 'https://github.com/Nogiback/Nogi-Blog-Client',
  },
  {
    id: uuidv4(),
    name: 'The Nogi Shop',
    image: nogishop,
    tagline: 'An e-commerce store page for houseplants created with React.',
    technologies: [
      'Javascript',
      'React',
      'React Router',
      'TailwindCSS',
      'React Testing Library',
      'Jest',
    ],
    link: 'https://the-nogi-shop.vercel.app',
    github: 'https://github.com/Nogiback/Shopping-Cart',
  },
  {
    id: uuidv4(),
    name: 'Resume Builder',
    image: resumebuilder,
    tagline: 'An elegant resume builder built with React and Sass.',
    technologies: ['Javascript', 'React', 'HTML', 'Sass'],
    link: 'https://resume-builder-eight-mu.vercel.app/',
    github: 'https://github.com/Nogiback/Resume-Builder',
  },
];

export default projects;
