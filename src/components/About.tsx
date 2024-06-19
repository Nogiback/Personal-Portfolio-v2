import SectionTitle from './ui/SectionTitle';
import Ticker from 'framer-motion-ticker';
import techstack from '@/utils/techstack';
import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';

export default function About() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      id='About'
      className={`flex min-h-screen w-full items-center justify-center px-12 sm:px-24 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
    >
      <div className='flex w-full flex-col gap-8 sm:gap-12'>
        <SectionTitle number='01.' title='About Me' />
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='avatar min-w-fit'>
            <img
              src='./src/assets/IMG_3258.jpg'
              alt='Peter self portrait wearing sunglasses'
              className='h-[200px] w-[200px] rounded-full border-2 border-accent object-cover shadow-xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0 md:h-[400px] md:w-[300px] md:rounded-lg md:object-fill'
            />
          </div>
          <div className='text-md flex flex-col gap-8 font-primary lg:text-lg'>
            <p className=''>
              Hi! My name is <span className='text-accent'>Peter Do</span>{' '}
              (pronounced "Doh!" like Homer Simpson) and I am a full stack web
              developer based in Toronto, Ontario. My interest in web
              development started back in high school when I would customize my
              Tumblr and MySpace pages. Little did I know I was using HTML/CSS
              to do so!
            </p>
            <p className=''>
              After high school, I obtained my degree in environmental
              engineering and spent 5 years in the industry, earning my P.Eng.
              designation. Ultimately, I decided to switch careers and dive back
              into the world of web development! I recently completed the Full
              Stack Web Development curriculum at{' '}
              <a
                className='text-accent hover:underline'
                href='https://www.theodinproject.com/'
                target='_blank'
              >
                The Odin Project
              </a>
              . I have worked on multiple full stack web applications and
              available for work!
            </p>
            <p className=''>
              Outside of web development, I am an avid disc golfer and enjoy the
              outdoors as much as I can. I also enjoy playing video games on my
              PC, getting together with friends, and playing music!
            </p>
          </div>
        </div>
        <div className='my-10'>
          <h3 className='mb-4 text-center font-secondary text-xl font-bold'>
            My Tech Stack
          </h3>
          <Ticker duration={50}>
            {techstack.map((tech) => (
              <img
                key={tech.id}
                src={tech.img}
                alt={tech.name}
                className='h-[80px] w-[80px] object-contain p-3 sm:h-[106px] sm:w-[106px]'
              ></img>
            ))}
          </Ticker>
        </div>
      </div>
    </div>
  );
}
