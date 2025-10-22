import React, { useState, useEffect } from 'react';

const TypewriterLoop = ({ words = [], typingSpeed = 100, deletingSpeed = 50, delay = 1500 }) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText((prev) => prev.slice(0, -1));
      } else {
        setText((prev) => currentWord.slice(0, prev.length + 1));
      }

      // When typing is done
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      }

      // When deleting is done
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return <span>{text}<span className="cursor"></span></span>;
};

export default TypewriterLoop;
