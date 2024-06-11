import SectionTitle from './ui/SectionTitle';

export default function Contact() {
  return (
    <div
      id='Contact'
      className='relative flex h-screen w-full items-center justify-center bg-[url("./assets/hero-bg.svg")] bg-cover bg-center px-12 sm:px-24'
    >
      <div className='flex w-full flex-col gap-6'>
        <SectionTitle number='03.' title='Contact' />
        <p>Contact Me</p>
      </div>
      <p className='absolute bottom-10 font-secondary text-xs text-secondary'>
        Designed & Built By Peter Do
      </p>
    </div>
  );
}
