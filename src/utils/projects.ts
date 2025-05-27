import { v4 as uuidv4 } from 'uuid';
import empowered1 from '../assets/projects/empowered1.png';
import empowered2 from '../assets/projects/empowered2.png';
import empowered3 from '../assets/projects/empowered3.png';
import empowered4 from '../assets/projects/empowered4.png';
import tyler1 from '../assets/projects/tylerplumbing1.png';
import tyler2 from '../assets/projects/tylerplumbing2.png';
import tyler3 from '../assets/projects/tylerplumbing3.png';
import nogidisc1 from '../assets/projects/nogidisc1.png';
import nogidisc2 from '../assets/projects/nogidisc2.png';
import nogidisc3 from '../assets/projects/nogidisc3.png';
import nogihub1 from '../assets/projects/nogihub1.png';
import nogihub2 from '../assets/projects/nogihub2.png';
import nogihub3 from '../assets/projects/nogihub3.png';
import nogichat1 from '../assets/projects/nogichat1.png';
import nogichat2 from '../assets/projects/nogichat2.png';
import nogichat3 from '../assets/projects/nogichat3.png';
import nogiblog1 from '../assets/projects/nogiblog1.png';
import nogiblog2 from '../assets/projects/nogiblog2.png';
import nogiblog3 from '../assets/projects/nogiblog3.png';
import verdictAI1 from '../assets/projects/verdictAI1.png';
import verdictAI2 from '../assets/projects/verdictAI2.png';
import verdictAI3 from '../assets/projects/verdictAI3.png';
import singularityAI1 from '../assets/projects/singularityAI1.png';
import singularityAI2 from '../assets/projects/singularityAI2.png';
import singularityAI3 from '../assets/projects/singularityAI3.png';
import singularityAI4 from '../assets/projects/singularityAI4.png';

const projects = [
  {
    id: uuidv4(),
    name: 'SingularityAI',
    images: [singularityAI1, singularityAI2, singularityAI3, singularityAI4],
    tagline:
      'A multi-functional AI-powered web application that provides a suite of tools for users and businesses.',
    technologies: [
      'Typescript',
      'React',
      'NextJS',
      'NodeJS',
      'Shadcn/UI',
      'TailwindCSS',
      'PostgreSQL',
      'Drizzle ORM',
      'Stripe',
      'Clerk',
      'Google Gemini',
      'Suno',
      'MiniMax AI',
      'GetImg AI',
      'Neon',
      'Azure',
    ],
    link: 'https://singularityai.ca',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'VerdictAI',
    images: [verdictAI1, verdictAI2, verdictAI3],
    tagline:
      'A cutting-edge AI-powered analysis tool designed to streamline legal research and case analysis.',
    technologies: [
      'Typescript',
      'React',
      'NextJS',
      'NodeJS',
      'Shadcn/UI',
      'TailwindCSS',
      'PostgreSQL',
      'Drizzle ORM',
      'Stripe',
      'Clerk',
      'Google Gemini',
      'Neon',
      'Azure',
    ],
    link: 'https://verdictai.ca',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'Empowered Futures',
    images: [empowered1, empowered2, empowered3, empowered4],
    tagline:
      'A non-profit website and web application for empowering young adults in the workforce.',
    technologies: [
      'Typescript',
      'React',
      'NextJS',
      'TailwindCSS',
      'PostgreSQL',
      'GraphQL',
      'Prisma',
      'NextAuth',
      'Azure',
    ],
    link: 'https://www.empoweredfutures.ca/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'NogiDisc',
    images: [nogidisc1, nogidisc2, nogidisc3],
    tagline: 'A dynamic disc inventory application for disc golf enthusiasts.',
    technologies: [
      'Typescript',
      'React',
      'Shadcn/UI',
      'TailwindCSS',
      'Tanstack Query',
      'PostgreSQL',
      'Prisma',
      'NodeJS',
      'Express',
      'OAuth',
      'JWT',
      'Zod',
    ],
    link: '',
    github: 'https://github.com/Nogiback/NogiDisc',
  },
  {
    id: uuidv4(),
    name: 'Tyler Mckenna Plumbing',
    images: [tyler1, tyler2, tyler3],
    tagline: 'A clean single page website for a local plumbing business.',
    technologies: ['Typescript', 'NextJS', 'React', 'TailwindCSS', 'Vercel'],
    link: 'https://tyler-mckenna-plumbing-v1.vercel.app/',
    github: '',
  },
  {
    id: uuidv4(),
    name: 'NogiHub',
    images: [nogihub1, nogihub2, nogihub3],
    tagline:
      'A lightweight Twitter/X social media clone created with MERN stack.',
    technologies: [
      'Typescript',
      'React',
      'TailwindCSS',
      'DaisyUI',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'JWT',
    ],
    link: 'https://nogihub.onrender.com/',
    github: 'https://github.com/Nogiback/NogiHub-App',
  },
  {
    id: uuidv4(),
    name: 'NogiChat',
    images: [nogichat1, nogichat2, nogichat3],
    tagline:
      'A simple real-time chat messaging application made with MERN stack and Socket.io.',
    technologies: [
      'Typescript',
      'React',
      'TailwindCSS',
      'DaisyUI',
      'NodeJS',
      'Express',
      'Mongoose',
      'MongoDB',
      'JWT',
      'Socket.io',
    ],
    link: 'https://nogichat.onrender.com/',
    github: 'https://github.com/Nogiback/NogiChat-App',
  },

  {
    id: uuidv4(),
    name: 'Personal Blog',
    images: [nogiblog1, nogiblog2, nogiblog3],
    tagline:
      'A personal blog website with a built-in CMS for content management.',
    technologies: [
      'Typescript',
      'React',
      'ChakraUI',
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
];

export default projects;
