import { useEffect, useState } from 'react';

export default function TypingText({ words }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const pause = !deleting && letterCount === word.length ? 1100 : deleting && letterCount === 0 ? 260 : 72;

    const timer = window.setTimeout(() => {
      if (!deleting && letterCount < word.length) {
        setLetterCount((count) => count + 1);
      } else if (!deleting) {
        setDeleting(true);
      } else if (letterCount > 0) {
        setLetterCount((count) => count - 1);
      } else {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }
    }, pause);

    return () => window.clearTimeout(timer);
  }, [deleting, letterCount, wordIndex, words]);

  return (
    <span className="typing-text">
      {words[wordIndex].slice(0, letterCount)}
      <span aria-hidden="true">|</span>
    </span>
  );
}
