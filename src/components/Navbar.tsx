import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShow(false);
        setIsOpen(false);
      } else {
        // if scrolling up, show the navbar
        setShow(true);
      }

      // remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-10 flex items-center justify-between bg-inherit p-2 font-secondary backdrop-blur-md transition-all ${show ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <Button variant='link' className='flex text-lg'>
        Peter.
      </Button>
      <div className='hidden items-center justify-center gap-2 md:flex'>
        <Button variant='link' className='text-sm'>
          <span className='text-accent'>01.&nbsp;</span> About Me
        </Button>
        <Button variant='link' className='text-sm'>
          <span className='text-accent'>02.&nbsp;</span> Projects
        </Button>
        <Button variant='link' className='text-sm'>
          <span className='text-accent'>03.&nbsp;</span> Contact
        </Button>
      </div>

      {/* Hamburger */}
      <div className='flex gap-4 p-4 md:hidden'>
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
        className={`absolute right-0 top-[100%] w-screen justify-end space-y-3 bg-background text-primary md:hidden ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        <Button
          variant='link'
          onClick={handleClick}
          className='flex w-full justify-center py-4 text-xs'
        >
          <span className='text-accent'>01.&nbsp;</span> About Me
        </Button>
        <Button
          variant='link'
          onClick={handleClick}
          className='flex w-full justify-center py-4 text-xs duration-200'
        >
          <span className='text-accent'>02.&nbsp;</span> Projects
        </Button>
        <Button
          variant='link'
          onClick={handleClick}
          className='flex w-full justify-center py-4 text-xs duration-200'
        >
          <span className='text-accent'>03.&nbsp;</span> Contact
        </Button>
      </ul>
    </div>
  );
}
