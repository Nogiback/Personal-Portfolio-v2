import SectionTitle from './ui/SectionTitle';

export default function Projects() {
  return (
    <div
      id='Projects'
      className='flex min-h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='02.' title='Projects' />
        <p>Projects</p>
      </div>
    </div>
  );
}
