import React from 'react';

export default function Contact() {
  return (
    <div
      id='Contact'
      className='flex h-screen w-full items-center justify-center px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <div className='flex w-full items-center justify-center pb-4 after:relative after:ml-4 after:block after:h-[1px] after:w-full after:bg-accent after:content-[""]'>
          <h2 className='font-secondary min-w-48 text-2xl font-bold'>
            <span className='text-accent'>03.</span> Contact
          </h2>
        </div>
        <p>Contact Me</p>
      </div>
    </div>
  );
}
