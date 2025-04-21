import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import AnimatedCursor from '@/components/AnimatedCursor';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const projectsData = {
  'reincarnation': {
    title: 'Reincarnation',
    subtitle: 'AI Avatar Playground',
    description: "Reincarnation is Polycosmos' platform where users craft AI avatars with custom animation and personality. It's our first step towards digital replication, built for anyone to use—content creators, businesses, you name it.<br />The two main problem statement we resolve are: long form content creation and real time interaction with the AI Avatar.<br /><br />Scan yourself with your phone, and in minutes, you've got a lifelike avatar. Animate it with prompts or videos, then tweak its personality to match your vibe—simple, no tech skills needed.<br /><br />It powers businesses with customer-facing avatars, content creators with slick videos, and production houses with films or games. It fuels cinema and interactive worlds, even hinting at digital immortality—keeping legacies alive in scalable, affordable ways that redefine creation.<br /><br />We have done a proof of concept for Reincarnation in the form of <a href='http://polycosmos.in/projects/vton'><u>VTON</u></a> where we realised how much demand this tool holds. This project will later lead to the development of <a href='http://polycosmos.in/projects/dreamcinema'><u>Dream Cinema</u></a>",
    features: [
      "Lifelike avatar in minutes",
      "Animate with simple prompts", 
      "Custom traits, your style",
      "Marketplace to for Avatars"
    ],

  },
  "dream-cinema": {
    title: "Dream Cinema",
    subtitle: "Generative Cinema",
    description: "Dream Cinema appears to be Polycosmos’ platform for generating full-length, Hollywood-grade movies and shows, tailored for viewers to enjoy, using AI to simplify content creation.<br /><br />You can pick a genre, star in your film, and customize it with a few clicks. AI handles the production, making it fast and accessible to everyone, no tech skills needed.<br /><br />It could empower businesses with marketing films, content creators with personal movies, and production houses to cut costs on films, games, and interactive cinema. It may also redefine storytelling and hint at preserving legacies digitally.",
    category: "Entertainment",
    features: [
      "Generates movies fast, effortlessly",
      "Tailors films to individual tastes",
      "Delivers Hollywood-grade visuals", 
      "Dream sharing network"
    ],
    
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  const location = useLocation();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/#projects" className="text-accent hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedCursor />
      <Starfield />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm text-accent hover:text-accent/80 transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-xl p-10 mb-10">
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-aston">{project.title}</h1>
              <p className="text-xl text-foreground/70">{project.subtitle}</p>
            </div>
            
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
