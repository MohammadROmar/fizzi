import Link from 'next/link';
import clsx from 'clsx';

type ButtonProps = {
  text: string | null;
  link: string;
  className?: string;
};

export default function Button({ text, link, className }: ButtonProps) {
  return (
    <Link
      href={link}
      className={clsx(
        'rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl',
        className,
      )}
    >
      {text}
    </Link>
  );
}
