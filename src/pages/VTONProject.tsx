import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';
import AnimatedCursor from '@/components/AnimatedCursor';
import { motion } from 'framer-motion';
import { ArrowLeft, Shirt, Tag, Monitor, Users, X } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const features = [
  {
    icon: <Tag className="w-10 h-10 text-indigo-400" />,
    title: "Save Cost",
    description: "Saves brands cash by replacing pricey photoshoots with instant avatar apparel images."
  },
  {
    icon: <Shirt className="w-10 h-10 text-purple-400" />,
    title: "Scale Easy",
    description: "Lets brands expand apparel visuals effortlessly, no extra shoots or hassle."
  },
  {
    icon: <Monitor className="w-10 h-10 text-violet-400" />,
    title: "Faster Campaigns",
    description: "Speeds up campaigns with fast, high-quality visuals ready to launch."
  },
  {
    icon: <Users className="w-10 h-10 text-pink-400" />,
    title: "Brand Consistency",
    description: "Keeps avatars flawless across all looks, strengthening brand identity effortlessly."
  }
];

const carouselImages = [
  {
    url: "/images/image1.png",
    caption: "Virtual Fitting Room Experience"
  },
  {
    url: "/images/image2.png",
    caption: "AI Fashion Recommendation System"
  },
  {
    url: "/images/image3.png",
    caption: "Mobile Virtual Try-On Interface"
  },
  {
    url: "/images/image4.png",
    caption: "Digital Fashion Marketplace"
  },
  {
    url: "/images/image5.png",
    caption: "Personal Styling Platform"
  },
  {
    url: "/images/image6.png",
    caption: "Personal Styling Platform"
  }
];

const VTONProject = () => {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedCursor />
      <Starfield />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
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
            className="mb-16"
          >
            <div className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-xl p-10 mb-10">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
                Fashion Tech
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 font-aston">VTON</h1>
              <p className="text-xl text-foreground/70">Virtual Try-On</p>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg">
              Virtual try-on isn’t new, but we’ve turbocharged it with the latest computer vision breakthroughs. Our pipeline cranks out jaw-dropping images of any avatar strutting any apparel—ethnic vibes included. This is the Reincarnation’s proof of concept, tackling two big headaches: keeping avatars consistent and nailing ethnic apparel details. We put it to the test, and it’s a game-changer. Our POC recieved validation and feedback from  fashion and jewelry heavyweights, one of them being House of Masaba.
              </p>
              <br />
              <p className="text-lg">
              This isn’t some half-baked idea; it’s a solid step toward smashing limits in digital replication. Imagine avatars that don’t glitch out and apparel that fits like it’s made for them—every time, no excuses. What started as a spark is now a fire, validated by brands who know their stuff. VTON’s here to flip the script on how we see and style the digital world, and we’re just getting started.
              
              </p>
            </div>
          </motion.div>
          
          {/* Carousel with images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6">Experience VTON</h2>
            
            <div className="relative">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div 
                          className="overflow-hidden rounded-lg cursor-pointer"
                          onClick={() => setSelectedImage(image.url)}
                        >
                          <AspectRatio ratio={3/4} className="bg-secondary/20">
                            <img 
                              src={image.url} 
                              alt={image.caption}
                              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                            />
                          </AspectRatio>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-4 border-white/10 bg-background/50 hover:bg-background/80" />
                <CarouselNext className="hidden md:flex -right-4 border-white/10 bg-background/50 hover:bg-background/80" />
              </Carousel>
              
              <div className="md:hidden mt-4 flex justify-center">
                <div className="text-xs text-foreground/60">
                  <span className="mr-2">←</span>
                  Swipe to view more
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Image Fullscreen Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogContent className="max-w-screen-lg w-[95vw] h-[90vh] p-0 border-none bg-transparent">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage || ''}
                  alt="Fullscreen preview"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <DialogClose className="absolute top-2 right-2 bg-black/50 rounded-full p-1 text-white hover:bg-black/70 transition-colors">
                  <X className="h-6 w-6" />
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-16"
          >
            <h2 className="text-2xl font-bold mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="bg-secondary/30 backdrop-blur-sm border border-white/5 rounded-xl p-6"
                >
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-background/50 rounded-xl border border-white/5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-foreground/70">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VTONProject;
