export default function Projects() {
  return (
    <div
      id='Projects'
      className='flex h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <div className='flex w-full items-center justify-center pb-4 after:relative after:ml-4 after:block after:h-[1px] after:w-full after:bg-accent after:content-[""]'>
          <h2 className='font-secondary min-w-36 text-lg font-bold sm:min-w-48 sm:text-2xl'>
            <span className='text-accent'>02.</span> Projects
          </h2>
        </div>
        <p>Projects</p>
      </div>
    </div>
  );
}
