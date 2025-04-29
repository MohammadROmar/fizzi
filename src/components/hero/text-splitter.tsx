import clsx from 'clsx';

type TextSplitterProps = {
  text: string;
  className?: string;
  wordDisplayStyle?: 'inline-block' | 'block';
};

export default function TextSplitter({
  text,
  className,
  wordDisplayStyle = 'inline-block',
}: TextSplitterProps) {
  const words = text.split(' ');

  return words.map((word, i) => {
    const splitText = word.split('');
    return (
      <span
        className={clsx('split-word', className)}
        style={{ display: wordDisplayStyle, whiteSpace: 'pre' }}
        key={`${i}-${word}`}
      >
        {splitText.map((char, charIndex) => {
          if (char === ' ') return ` `;
          return (
            <span
              key={charIndex}
              className={`split-char inline-block split-char--${i}-${charIndex}`}
            >
              {char}
            </span>
          );
        })}
        {i < words.length - 1 ? <span className="split-char">{` `}</span> : ''}
      </span>
    );
  });
}
