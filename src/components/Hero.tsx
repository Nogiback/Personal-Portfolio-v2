import { Button } from '@/components/ui/button';
import { CircleArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div
      id='Hero'
      className='flex h-screen items-center justify-center bg-[url("./assets/hero-bg.svg")] bg-cover bg-center pb-12'
    >
      <div className='flex flex-col gap-6 text-left'>
        <h1 className='text-edge-outline font-secondary relative animate-[fadeAndScroll_1s_forwards_100ms] cursor-default bg-primary bg-clip-text text-2xl font-light leading-tight text-transparent opacity-0'>
          Hello, my name is...
        </h1>
        <h1 className='font-primary relative animate-[fadeAndScroll_1s_forwards_800ms] cursor-default bg-accent bg-clip-text text-8xl font-bold leading-tight text-transparent opacity-0'>
          Peter Do.
        </h1>
        <p className='text-edge-outline font-secondary relative animate-[fadeAndScroll_1s_forwards_1500ms] cursor-default bg-primary bg-clip-text font-extralight leading-tight text-transparent opacity-0'>
          Former Environmental Engineer. Current Full Stack Web Developer.
        </p>
        <Button
          onClick={() =>
            document
              .getElementById('About')
              ?.scrollIntoView({ behavior: 'smooth' })
          }
          variant='outline'
          className='font-secondary relative h-12 w-fit animate-[fadeIn_1s_forwards_2500ms] gap-2 opacity-0 hover:text-secondary'
        >
          Learn more about me <CircleArrowDown className='animate-bounce' />
        </Button>
      </div>
    </div>
  );
}
