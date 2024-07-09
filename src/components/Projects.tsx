import { useState } from 'react';
import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ProjectCard';
import projects from '../utils/projects';
import moreProjects from '../utils/moreprojects';
import { Button } from './ui/button';

export default function Projects() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  function handleShowMoreProjects() {
    setShowMoreProjects(true);
  }

  return (
    <div
      id='Projects'
      className='flex min-h-screen w-full items-center justify-center px-8 sm:px-24'
    >
      <div className='flex w-full flex-col items-center gap-6'>
        <SectionTitle number='02.' title='Projects' />
        <div className='grid w-full grid-cols-1 items-center justify-center gap-4 xl:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {showMoreProjects
            ? moreProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            : null}
        </div>
        <Button
          onClick={handleShowMoreProjects}
          variant='outline'
          className={`relative my-4 w-fit gap-2 bg-background font-primary hover:bg-accent hover:text-secondary active:top-1 sm:text-xl ${showMoreProjects ? `hidden` : ``}`}
        >
          Load More Projects...
        </Button>
      </div>
    </div>
  );
}
