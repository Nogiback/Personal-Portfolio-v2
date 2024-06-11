import SectionTitle from './ui/SectionTitle';

export default function About() {
  return (
    <div
      id='About'
      className='flex h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='01.' title='About Me' />
        <p>
          Hello. My name is Peter Do. Former Engineer. Current Web Developer.
        </p>
      </div>
    </div>
  );
}
