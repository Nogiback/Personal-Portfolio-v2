import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='fixed bottom-8 right-8 z-[99]'>
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label='scroll to top button'
          className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-accent opacity-30 shadow-md transition-all duration-500 ease-in-out hover:opacity-100'
        >
          <span className='mt-[6px] h-3 w-3 rotate-45 border-l-2 border-t-2 border-background'></span>
        </div>
      )}
    </div>
  );
}
