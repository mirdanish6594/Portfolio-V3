import React from 'react';
import { Rocket, Heart, Coffee } from 'lucide-react';

const AboutCard = ({ icon: Icon, title, description }) => (
  <div className="group p-6 backdrop-blur-md bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
    <Icon className="w-8 h-8 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-300">{description}</p>
  </div>
);

export default function About() {
  const cards = [
    {
      icon: Rocket,
      title: "Mission Driven",
      description: "Passionate about leveraging data science to solve real-world problems and drive innovation."
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Creating intuitive and impactful solutions that enhance user experiences through data-driven insights."
    },
    {
      icon: Coffee,
      title: "Always Learning",
      description: "Constantly expanding my knowledge in machine learning, AI, and the latest data science technologies."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-white text-center mb-6">About Me</h2>
        <p className="text-slate-300 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
          Hi there! I am Danish, a Data Science enthusiast, a Developer and a Designer, I combine analytical thinking with creative problem-solving. 
          My passion lies in transforming complex data into actionable insights while building robust and scalable applications. When not coding, you'll find me in books or lost in my favorite tunes, a mix of coding rhythm and melodies.
          Hit me up if you vibe with me!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <AboutCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}