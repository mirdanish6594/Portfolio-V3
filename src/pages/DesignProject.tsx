import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '../components/ui/AnimatedText';
import ImageModal from '../components/ui/ImageModal';

const projectData = {
  ecolife: {
    title: "TEDx NIT Srinagar 2024",
    description: "A cohesive set of visual designs created for TEDx NIT Srinagar 2024, capturing the theme 'Reimagining Boundaries' across various event materials including brochures, tickets, and ID cards.",
    challenge: "Design a consistent and visually striking identity that reflects TEDx’s core values of innovation and bold thinking, while aligning with the event theme and ensuring practical usability across print assets.",
    solution: "Utilized a bold red and black color palette inspired by the TEDx brand, with Helvetica World for modern clarity. The visuals feature conceptual imagery like reimagined classical artwork to symbolize breaking boundaries. All materials maintain visual harmony to reinforce the theme and brand identity across all attendee and sponsor touchpoints.",
    images: [
      "/images/TEDx/TED-1.png",
      "/images/TEDx/TED-2.png",
      "/images/TEDx/TED-3.png"
    ],
    deliverables: ["Event Brochure", "Ticket Design", "ID Card Design", "Typography & Color System", "Print-Ready Assets"]
  },
  fintech: {
    title: "GDSC Club 2024",
    description: "A visually immersive interface design for GDSC (Google Developer Student Clubs) 2024, tailored for showcasing roles, teams, and events with a modern tech-forward aesthetic suitable for social media and web platforms.",
    challenge: "Create an engaging and modern design system that visually represents the collaborative and innovative spirit of GDSC, while maintaining clarity and usability across different formats like Instagram posts or digital portfolios.",
    solution: "Implemented a sleek glassmorphism aesthetic with blurred, semi-transparent card containers over a dynamic blue-purple gradient background. Used a responsive 3x3 grid layout for clean alignment, supported by consistent card styling and minimal iconography to simulate a web-like user interface. Highlight colors in cool blue tones ensure visual consistency and emphasize key action areas such as 'Know more' buttons.",
    images: [
      "/images/GDSC/GDSC-3.jpeg",
      "/images/GDSC/GDSC-2.jpg",
      "/images/GDSC/GDSC-1.png"
    ],
    deliverables: ["Glassmorphism Role Cards", "Instagram Grid Layout Design", "Responsive Web UI Concept", "Minimal Icon System", "Typography and Color Palette"]
  },
  "social-campaign": {
    title: "Curve Electric",
    description: "A series of promotional banners and Instagram posts designed for Curve Electric’s electric cycle campaign in Srinagar, combining sustainability messaging with local visual appeal.",
    challenge: "Create eye-catching promotional content that communicates Curve Electric’s eco-friendly mission while resonating with a local audience in Srinagar.",
    solution: "Used green tones to reinforce sustainability, integrated imagery of Srinagar’s landscapes alongside the electric cycle to build local relevance, and crafted concise, compelling taglines to enhance brand recall. Maintained design consistency across banners and Instagram formats for brand cohesion.",
    images: [
      "/images/Curve/curve-1.png",
      "/images/Curve/curve-2.jpg",
      "/images/Curve/curve-3.jpg"
    ],
    deliverables: ["Social Media Templates", "Story Highlights", "Animation", "Campaign Strategy", "Content Calendar"]
  },
  print: {
    title: "Miscellaneous",
    description: "A collection of diverse design projects including event posters, promotional banners, flyers, and digital social media content created for various clients and college events.",
    challenge: "Design versatile, engaging visuals for multiple formats and audiences, each with unique themes, brand requirements, and purposes—ranging from tech events to cultural festivals and brand promotions.",
    solution: "Adopted a tailored design approach for each project, ensuring consistency in typography, color usage, and layout while catering to different content types and goals. Used clean, readable fonts and bold imagery to attract attention, and designed in formats optimized for both digital and print.",
    images: [
      "/images/Miscellaneous/mis-2.png",
      "/images/Miscellaneous/mis-3.png",
      "/images/Miscellaneous/mis-4.png",
      "/images/Miscellaneous/mis-5.png",
      "/images/Miscellaneous/mis-6.jpg"
    ],
    deliverables: ["Event Posters", "Promotional Banners", "Flyers ", "Social Media Graphics", "Informational Layouts"]
  }
};

export default function DesignProject() {
  const { id } = useParams();
  const project = projectData[id as keyof typeof projectData];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <Link to="/#design-projects" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        <AnimatedText delay={200}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl">{project.description}</p>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <AnimatedText delay={400}>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">The Challenge</h2>
                <p className="text-slate-300">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">The Solution</h2>
                <p className="text-slate-300">{project.solution}</p>
              </div>
            </div>
          </AnimatedText>

          <AnimatedText delay={600}>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Deliverables</h2>
              <ul className="list-none space-y-2">
                {project.deliverables.map((item, index) => (
                  <li key={index} className="text-slate-300 flex items-center">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedText>
        </div>

        <AnimatedText delay={800}>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedText>
      </div>

      {selectedImage && (
        <ImageModal 
          imageUrl={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </div>
  );
}