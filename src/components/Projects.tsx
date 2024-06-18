import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ProjectCard';
import projects from '../utils/projects';

export default function Projects() {
  return (
    <div
      id='Projects'
      className='flex min-h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='02.' title='Projects' />
        <div className='grid w-full grid-cols-1 items-center justify-center gap-4 xl:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
