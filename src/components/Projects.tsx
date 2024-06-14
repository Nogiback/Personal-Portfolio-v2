import SectionTitle from './ui/SectionTitle';
import ProjectCard from './ui/ProjectCard';

export default function Projects() {
  return (
    <div
      id='Projects'
      className='flex min-h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='02.' title='Projects' />
        <div className='flex w-full flex-wrap gap-4'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
