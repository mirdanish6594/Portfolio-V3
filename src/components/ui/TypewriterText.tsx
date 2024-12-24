import React, { useState, useEffect, useCallback } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
}

export default function TypewriterText({ texts, className = '' }: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const nextText = useCallback(() => {
    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    setIsDeleting(false);
    setIsWaiting(false);
  }, [texts.length]);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsWaiting(false);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && !isWaiting) {
        if (currentText.length < texts[currentTextIndex].length) {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else if (isDeleting) {
        if (currentText.length === 0) {
          nextText();
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, nextText]);

  return (
    <span className={`inline-block min-w-[300px] text-left ${className}`}>
      {currentText}<span className="animate-pulse">|</span>
    </span>
  );
}