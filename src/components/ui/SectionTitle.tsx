type Props = {
  number: string;
  title: string;
};

export default function SectionTitle({ number, title }: Props) {
  return (
    <div className='flex w-full items-center justify-center pb-4 after:relative after:ml-4 after:block after:h-[1px] after:w-full after:bg-accent after:content-[""]'>
      <h2 className='min-w-36 font-secondary text-lg font-bold sm:min-w-48 sm:text-2xl'>
        <span className='text-accent'>{number}</span> {title}
      </h2>
    </div>
  );
}
