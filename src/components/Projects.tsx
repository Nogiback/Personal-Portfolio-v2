import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <div
      id='Projects'
      className='flex min-h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='02.' title='Projects' />
        <div className='grid w-full grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
