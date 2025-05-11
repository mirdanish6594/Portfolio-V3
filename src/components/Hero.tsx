import React from 'react';
import { Database, ArrowRight, ChevronDown } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import TypewriterText from './ui/TypewriterText';
import GlassCard from './ui/GlassCard';

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const roles = [
    "Developer",
    "Designer",
    "Data Engineer",
    "Problem Solver"
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center pt-16 relative"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-indigo-900/70 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedText delay={200}>
            <div className="mb-6 inline-block">
              <Database className="w-16 h-16 text-indigo-400 animate-float" />
            </div>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Danish Mir
            </h1>
          </AnimatedText>

          <AnimatedText delay={600}>
            <GlassCard className="p-2 mb-8 inline-block">
              <TypewriterText 
                texts={roles}
                className="text-2xl md:text-3xl text-indigo-400"
              />
            </GlassCard>
          </AnimatedText>

          <AnimatedText delay={800}>
            <p className="text-xl text-slate-300 mb-12">
              Crafting meaningful digital experiences, designs and data-driven solutions with passion and innovation.
            </p>
          </AnimatedText>

          <AnimatedText delay={1000}>
            <div className="flex flex-col items-center">
              <div className="flex gap-4 justify-center mb-16">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-indigo-600/80 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  Let's Connect <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#projects"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-3 rounded-lg transition-all duration-300 backdrop-blur-sm hover:scale-105"
                >
                  View Projects
                </a>
              </div>
              <button 
                onClick={scrollToNext}
                className="text-white/50 hover:text-white transition-colors duration-300 animate-bounce"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
}