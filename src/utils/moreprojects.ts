import { v4 as uuidv4 } from 'uuid';
import resumebuilder1 from '../assets/projects/resumebuilder1.png';
import resumebuilder2 from '../assets/projects/resumebuilder2.png';
import battleship1 from '../assets/projects/battleship1.png';
import battleship2 from '../assets/projects/battleship2.png';
import battleship3 from '../assets/projects/battleship3.png';
import weather1 from '../assets/projects/weather1.png';
import weather2 from '../assets/projects/weather2.png';
import weather3 from '../assets/projects/weather3.png';
import todolist1 from '../assets/projects/todolist1.png';
import todolist2 from '../assets/projects/todolist2.png';
import todolist3 from '../assets/projects/todolist3.png';

const moreprojects = [
  {
    id: uuidv4(),
    name: 'Resume Builder',
    images: [resumebuilder1, resumebuilder2],
    tagline: 'An elegant resume builder built with React and Sass.',
    technologies: ['Javascript', 'React', 'HTML', 'Sass'],
    link: 'https://resume-builder-eight-mu.vercel.app/',
    github: 'https://github.com/Nogiback/Resume-Builder',
  },
  {
    id: uuidv4(),
    name: 'Battleship',
    images: [battleship1, battleship2, battleship3],
    tagline: 'A personal take on the classic game of Battleship',
    technologies: ['Javascript', 'HTML', 'CSS', 'Jest'],
    link: 'https://nogiback.github.io/Battleship/',
    github: 'https://github.com/Nogiback/Battleship',
  },
  {
    id: uuidv4(),
    name: 'Nogi Weather',
    images: [weather1, weather2, weather3],
    tagline: 'A clean and simple weather forecast app using WeatherAPI',
    technologies: ['Javascript', 'HTML', 'CSS', 'APIs'],
    link: 'https://nogiback.github.io/Weather-App/',
    github: 'https://github.com/Nogiback/Weather-App',
  },
  {
    id: uuidv4(),
    name: 'Nogi To-Do List',
    images: [todolist1, todolist2, todolist3],
    tagline: 'A to-do list web application using local storage',
    technologies: ['Javascript', 'HTML', 'CSS', 'Webpack', 'ES6'],
    link: 'https://nogiback.github.io/To-Do-List/',
    github: 'https://github.com/Nogiback/To-Do-List',
  },
];

export default moreprojects;
