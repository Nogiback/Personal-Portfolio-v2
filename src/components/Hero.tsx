import React from 'react';

export default function Hero() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex flex-col text-left'>
        <h1 className='text-edge-outline font-secondary cursor-default bg-white bg-clip-text text-2xl font-light leading-tight text-transparent'>
          Hello, my name is...
        </h1>
        <h1 className='font-primary my-12 cursor-default bg-blue-400 bg-clip-text text-8xl font-bold italic leading-tight text-transparent'>
          Peter Do.
        </h1>
        <p className='text-edge-outline font-secondary cursor-default bg-white bg-clip-text font-extralight leading-tight text-transparent'>
          Former Environmental Engineer. Current Full Stack Web Developer.
        </p>
      </div>
    </div>
  );
}
