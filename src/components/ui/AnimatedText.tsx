import React from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
}

export default function AnimatedText({ children, delay = 0 }: AnimatedTextProps) {
  return (
    <div 
      className="animate-fadeIn opacity-0"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}