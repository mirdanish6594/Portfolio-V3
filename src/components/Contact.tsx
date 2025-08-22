import React from 'react';
import { FaBehance } from 'react-icons/fa';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Let's Connect</h2>
        <AnimatedText delay={200}>
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/mirdanish6594"
              className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/danish-mir-767792202/"
              className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:mirdanish6594@gmail.com"
              className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://www.behance.net/mirdanish"
              className="text-slate-300 hover:text-indigo-400 transition transform hover:scale-110"
            >
              <FaBehance className="w-8 h-8" />
            </a>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
