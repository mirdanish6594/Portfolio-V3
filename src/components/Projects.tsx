import React from 'react';
import { ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';

const projects = [
  {
    title: "HR Dashboard",
    description: "Created an HR dashboard in Tableau, providing insightful visualizations and data-driven metrics for workforce analysis and decision-making.",
    image: "/images/hr-dashboard.png",
    tags: ["Excel", "Tableau"],
    link: "https://public.tableau.com/app/profile/danish.mir1812/viz/HRDashboardProject_17221797463460/HRSummary"
  },
  {
    title: "ReactorAnalyzer",
    description: "Interactive dashboard for visualizing and analyzing chemical reactor performance using Python and Streamlit.",
    image: "/images/reactor.png",
    tags: ["Python", "Pandas", "Streamlit", "Plotly"],
    link: "https://github.com/mirdanish6594/ReactorAnalyzer"
  },
  {
    title: "Snake Game AI",
    description: "Reinforcement learning project implementing Q-learning for an intelligent Snake game agent. And plots showing the agents learning curve.",
    image: "/images/snake.png",
    tags: ["Python", "Q-Learning", "AI", "PyGame", "Matplotlib"],
    link: "https://github.com/mirdanish6594/SnakeAI-ReinforcementLearning"
  },
  {
    title: "Light Monitoring System",
    description: "A real-time monitoring system for street lights. It provides continuous monitoring of leakage current and earthing status for electrical poles.",
    image: "/images/iot.png",
    tags: ["React", "TypeScript", "Vite", "Firebase", "Leaflet Maps", "TailwindCSS"],
    link: "https://github.com/mirdanish6594/IOT-Dashboard"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedText key={project.title} delay={200 * (index + 1)}>
              <GlassCard className="group overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </GlassCard>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}
