import React from 'react';
import { ExternalLink } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';
import { Link } from 'react-router-dom';

const designProjects = [
  {
    title: "TEDx NIT Srinagar 2024",
    description: "A cohesive set of visual designs created for TEDx NIT Srinagar 2024, capturing the theme 'Reimagining Boundaries'.",
    image: "/images/TEDx/TED-1.png",
    path: "/designs/TEDx",
    tags: ["Branding", "Print-Ready Assets", "Marketing"]
  },
  {
    title: "GDSC Club 2024",
    description: "A visually immersive interface design for GDSC 2024, tailored for showcasing roles, teams, and events with a modern tech-forward aesthetic suitable for social media and web platforms.",
    image: "/images/GDSC/GDSC-1.png",
    path: "/designs/GDSC",
    tags: ["UI/UX", "Glassmorphism", "Instagram Grid Layout Design"]
  },
  {
    title: "Curve Electric",
    description: "A series of promotional banners and Instagram posts designed for Curve Electric’s campaign in Srinagar, combining sustainability messaging with local visual appeal.",
    image: "/images/Curve/curve-1.png",
    path: "/designs/CurveElectric",
    tags: ["Social Media", "Promotional Banners", "Sustainability Campaign"]
  },
  {
    title: "Miscellaneous",
    description: "A collection of diverse design projects including event posters, promotional banners, flyers, and digital social media content created for various clients and college events.",
    image: "/images/Miscellaneous/mis-1.png",
    path: "/designs/Miscellaneous",
    tags: ["Print Design", "Typography", "Layout"]
  }
];

export default function DesignProjects() {
  return (
    <section id="design-projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Design Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {designProjects.map((project, index) => (
            <AnimatedText key={project.title} delay={200 * (index + 1)}>
              <Link to={project.path}>
                <div className="group relative overflow-hidden rounded-xl transform hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-900/30 mix-blend-overlay z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-20">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                      <p className="text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center text-indigo-300 group-hover:text-indigo-400 transition-colors">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
}