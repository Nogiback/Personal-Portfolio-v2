import { useState } from 'react';
import { Button } from './ui/button';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='bg-white-100 text-forest-900 sticky left-0 right-0 top-0 z-10 flex items-center justify-between bg-background p-2 font-secondary'>
      <Button
        variant='ghost'
        className='flex text-lg font-extrabold hover:text-secondary'
      >
        Peter.
      </Button>
      <div className='hidden items-center justify-center gap-2 md:flex'>
        <Button variant='link' className=''>
          <span className='text-accent'>01.&nbsp;</span> About
        </Button>
        <Button variant='link' className=''>
          <span className='text-accent'>02.&nbsp;</span> Projects
        </Button>
        <Button variant='link' className=''>
          <span className='text-accent'>03.&nbsp;</span> Contact
        </Button>
      </div>

      {/* Hamburger */}
      <div className='flex gap-4 md:hidden'>
        <button
          onClick={handleClick}
          className='flex flex-col items-center justify-center'
        >
          <span
            className={`block h-0.5 w-6 rounded-sm bg-primary 
                    transition-all duration-300 ease-out ${
                      isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`my-0.5 block h-0.5 w-6 rounded-sm 
                    bg-primary transition-all duration-300 ease-out ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`block h-0.5 w-6 rounded-sm bg-primary 
                    transition-all duration-300 ease-out ${
                      isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </div>

      {/* Hamburger Menu */}
      <ul
        className={`text-white-100 absolute right-0 top-[100%] w-screen justify-end space-y-3 border-2 bg-background md:hidden ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        <Button
          variant='link'
          onClick={handleClick}
          className='hover:bg-forest-600 flex w-full justify-center py-4 duration-200'
        >
          Home
        </Button>
        <Button
          variant='link'
          onClick={handleClick}
          className='hover:bg-forest-600 flex w-full justify-center py-4 duration-200'
        >
          Shop
        </Button>
      </ul>
    </div>
  );
}
