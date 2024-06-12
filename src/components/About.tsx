import SectionTitle from './ui/SectionTitle';

export default function About() {
  return (
    <div
      id='About'
      className='flex h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='01.' title='About Me' />
        <div className='about-me-container flex items-center justify-center gap-12'>
          <div className='about-me-details flex flex-col items-start justify-center gap-8'>
            <div className='avatar'>
              <img
                src='./src/assets/IMG_3258.jpg'
                alt='Peter self portrait wearing sunglasses'
                className='h-[400px] w-[300px] rounded-lg border-2 border-solid border-accent object-fill shadow-xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0'
              />
            </div>
            <div className='summary'></div>
          </div>
          <div className='tech-stack'></div>
        </div>
      </div>
    </div>
  );
}
