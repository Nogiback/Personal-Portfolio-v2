import { useRef } from 'react';
import ContactForm from './ContactForm';
import SectionTitle from './ui/SectionTitle';
import Waves from './ui/Waves';
import { Github, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useIsVisible } from '@/hooks/useIsVisible';

export default function Contact() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      id='Contact'
      className={`relative flex min-h-screen w-full items-center justify-center px-12 sm:px-24 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700 ease-in`}
    >
      <Waves />
      <div className='mb-24 flex w-full flex-col items-center gap-4'>
        <SectionTitle number='03.' title='Contact' />
        <div className='flex w-full flex-col items-center justify-center gap-12 xl:flex-row xl:gap-48'>
          <div className='flex flex-col items-center gap-8'>
            <div className='min-w-fit'>
              <img
                src='./src/assets/PeterCartoon.jpg'
                alt='Peter self portrait in cartoon mode'
                className='h-[150px] w-[150px] rounded-full border border-accent object-cover shadow-xl grayscale transition-all duration-300 ease-in-out hover:grayscale-0'
              />
            </div>
            <h3 className='font-primary text-3xl font-bold'>Let's Connect.</h3>
            <p className='text-center font-primary text-lg'>
              Thanks for visiting my portfolio. Check out my socials below!
            </p>
            <div className='flex gap-8'>
              <a
                href='https://www.linkedin.com/in/petertoando/'
                target='_blank'
                className='hover:text-accent'
              >
                <Linkedin size={32} />
              </a>
              <a
                href='https://github.com/Nogiback'
                target='_blank'
                className='hover:text-accent'
              >
                <Github size={32} />
              </a>
              <a
                href='https://www.instagram.com/peterdope/'
                target='_blank'
                className='hover:text-accent'
              >
                <Instagram size={32} />
              </a>
              <a
                href='https://www.facebook.com/peterdo/'
                target='_blank'
                className='hover:text-accent'
              >
                <Facebook size={32} />
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <p className='absolute bottom-10 font-secondary text-xs text-primary/80'>
        Designed & Built By Peter Do
      </p>
    </div>
  );
}
