import ContactForm from './ContactForm';
import SectionTitle from './ui/SectionTitle';
import Waves from './ui/Waves';

export default function Contact() {
  return (
    <div
      id='Contact'
      className='relative flex min-h-screen w-full items-center justify-center px-12 sm:px-24'
    >
      <Waves />
      <div className='flex w-full flex-col items-center gap-4'>
        <SectionTitle number='03.' title='Contact' />
        <ContactForm />
      </div>
      <p className='absolute bottom-10 font-secondary text-xs text-primary'>
        Designed & Built By Peter Do
      </p>
    </div>
  );
}
