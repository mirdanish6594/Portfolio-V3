import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/animations.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="fixed w-full backdrop-blur-md bg-slate-900/50 z-50 py-4 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <span className="text-indigo-400 font-bold text-xl">DM</span>
          <div className="flex gap-6">
            <a href="#about" className="text-slate-200 hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="text-slate-200 hover:text-indigo-400 transition">Skills</a>
            <a href="#projects" className="text-slate-200 hover:text-indigo-400 transition">Projects</a>
            <a href="#contact" className="text-slate-200 hover:text-indigo-400 transition">Contact</a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="bg-slate-900/50 backdrop-blur-md text-slate-400 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Danish Mir. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}