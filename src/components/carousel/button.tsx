import ArrowIcon from '@/assets/icons/arrow';

type ButtonProps = {
  direction: 'right' | 'left';
  label: string;
  onClick(): void;
};

export default function Button({ direction, label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="lg:siz20 z-[100] size-12 cursor-pointer rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white transition-opacity hover:opacity-100 focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16"
      style={{ rotate: direction === 'right' ? '180deg' : '0deg' }}
    >
      <ArrowIcon />
    </button>
  );
}
