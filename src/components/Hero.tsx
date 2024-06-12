import { Button } from '@/components/ui/button';
import { CircleArrowDown } from 'lucide-react';
import Waves from './ui/Waves';

// bg-[url("./assets/hero-bg.svg")] bg-cover bg-center

export default function Hero() {
  return (
    <div
      id='Hero'
      className='flex h-screen items-center justify-center px-12 pb-12'
    >
      <Waves />
      <div className='flex flex-col gap-6 text-left'>
        <h1 className='text-edge-outline text-md relative animate-[fadeAndScroll_1s_forwards_100ms] cursor-default bg-primary bg-clip-text font-secondary font-light leading-tight text-transparent opacity-0 sm:text-2xl'>
          Hello, my name is...
        </h1>
        <h1 className='relative animate-[fadeAndScroll_1s_forwards_800ms] cursor-default bg-gradient-to-tl from-[#007f99] to-accent bg-clip-text font-primary text-7xl font-bold leading-tight text-transparent opacity-0 sm:text-8xl'>
          Peter Do.
        </h1>
        <p className='text-edge-outline text-md relative animate-[fadeAndScroll_1s_forwards_1500ms] cursor-default bg-primary bg-clip-text font-secondary font-extralight leading-tight text-transparent opacity-0 sm:text-2xl'>
          Former Environmental Engineer. Current Full Stack Web Developer.
        </p>
        <Button
          onClick={() =>
            document
              .getElementById('About')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          variant='outline'
          className='relative w-fit animate-[fadeIn_1s_forwards_2500ms] gap-2 bg-inherit font-secondary hover:text-secondary active:top-1'
        >
          Learn more about me <CircleArrowDown className='animate-bounce' />
        </Button>
      </div>
    </div>
  );
}
