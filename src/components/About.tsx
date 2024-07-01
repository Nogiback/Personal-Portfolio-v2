import SectionTitle from './ui/SectionTitle';
import Ticker from 'framer-motion-ticker';
import techstack from '@/utils/techstack';
import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';
import portrait from '../assets/images/IMG_3258.jpg';

export default function About() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const isVisible2 = useIsVisible(ref2);

  return (
    <div
      id='About'
      className='flex min-h-screen w-full items-center justify-center px-8 sm:px-24'
    >
      <div className='flex w-full flex-col gap-8 sm:gap-12'>
        <SectionTitle number='01.' title='About Me' />
        <div
          ref={ref1}
          className={`flex flex-col items-center justify-center gap-12 lg:flex-row ${isVisible1 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
        >
          <div className='min-w-fit'>
            <img
              src={portrait}
              alt='Peter self portrait wearing sunglasses'
              className='h-[200px] w-[200px] rounded-full border-2 border-accent object-cover shadow-xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0 lg:h-[400px] lg:w-[300px] lg:rounded-lg lg:object-fill'
            />
          </div>
          <div className='text-md flex flex-col gap-8 font-primary lg:w-1/2 lg:text-lg'>
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
        <div
          ref={ref2}
          className={`my-10 ${isVisible2 ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
        >
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
