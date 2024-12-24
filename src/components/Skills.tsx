import React from 'react';
import { Database, Code, Palette, Brain } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills, delay }) => (
  <AnimatedText delay={delay}>
    <GlassCard className="p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
      <Icon className="w-12 h-12 text-indigo-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-indigo-900/30 backdrop-blur-sm text-indigo-300 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </GlassCard>
  </AnimatedText>
);

export default function Skills() {
  const skillSets = [
    {
      icon: Database,
      title: "Data Science & Analytics",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Streamlit", "Jupyter"]
    },
    {
      icon: Code,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "Bootstrap", "PostgreSQL"]
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Supervised Learning", "Neural Networks", "Data Analysis", "Statistical Modeling", "Q-Learning"]
    },
    {
      icon: Palette,
      title: "Design",
      skills: ["Figma", "Canva", "Photoshop", "UI/UX", "Wireframing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillSets.map((set, index) => (
            <SkillCard 
              key={set.title} 
              {...set} 
              delay={200 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}