import { useIsVisible } from '@/hooks/useIsVisible';
import { useRef } from 'react';

type Props = {
  number: string;
  title: string;
};

export default function SectionTitle({ number, title }: Props) {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref1);

  return (
    <div
      ref={ref1}
      className={`flex w-full items-center justify-center py-4 transition-opacity duration-700 ease-in after:relative after:ml-4 after:block after:h-[1px] after:w-full after:bg-accent after:content-[""] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2 className='min-w-36 font-secondary text-lg font-bold sm:min-w-48 sm:text-2xl'>
        <span className='text-accent'>{number}</span> {title}
      </h2>
    </div>
  );
}
