import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DesignProjects from './components/DesignProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DesignProject from './pages/DesignProject';
import './styles/animations.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/designs/:id" element={<DesignProject />} />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <nav className="fixed w-full backdrop-blur-md bg-slate-900/50 z-50 py-4 border-b border-white/10">
              <div className="container mx-auto px-4 flex justify-between items-center">
                <span className="text-indigo-400 font-bold text-xl"><a href= "mirdanish.me">DM</a></span>
                <div className="flex gap-x-4">
                  <a href="#about" className="text-sm text-slate-200 hover:text-indigo-400 transition">About</a>
                  <a href="#skills" className="text-sm text-slate-200 hover:text-indigo-400 transition">Skills</a>
                  <a href="#design-projects" className="text-sm text-slate-200 hover:text-indigo-400 transition">Design</a>
                  <a href="#projects" className="text-sm text-slate-200 hover:text-indigo-400 transition">Projects</a>
                  <a href="#contact" className="text-sm text-slate-200 hover:text-indigo-400 transition">Contact</a>
                </div>
              </div>
            </nav>
            
            <main>
              <Hero />
              <About />
              <Skills />
              <DesignProjects />
              <Projects />
              <Contact />
            </main>

            <footer className="bg-slate-900/50 backdrop-blur-md text-slate-400 py-8 border-t border-white/10">
              <div className="container mx-auto px-4 text-center">
                <p>© 2025 Danish Mir. All rights reserved.</p>
              </div>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}