export default function About() {
  return (
    <div
      id='About'
      className='flex h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <div className='flex w-full items-center justify-center pb-4 after:relative after:ml-4 after:block after:h-[1px] after:w-full after:bg-accent after:content-[""]'>
          <h2 className='min-w-36 font-secondary text-lg font-bold sm:min-w-48 sm:text-2xl'>
            <span className='text-accent'>01.</span> About Me
          </h2>
        </div>
        <p>
          Hello. My name is Peter Do. Former Engineer. Current Web Developer.
        </p>
      </div>
    </div>
  );
}
