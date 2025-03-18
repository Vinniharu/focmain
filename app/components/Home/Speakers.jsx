"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

export default function Speakers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [width, setWidth] = useState(0);

  // Update width when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Original speakers data
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      image: "/profile.jpg",
      description: "Director of EdTech Innovation",
    },
    {
      name: "Michael Chen",
      image: "/profile.jpg",
      description: "CEO, EduTech Global",
    },
    {
      name: "Dr. Amina Ndongo",
      image: "/profile.jpg",
      description: "Director, African Education Initiative",
    },
    {
      name: "Prof. David Wilson",
      image: "/profile.jpg",
      description: "Head of Computer Science, Lagos Tech University",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  const handleNext = () => {
    if (activeIndex < Math.ceil(speakers.length / 2) - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900/5 via-gray-50 to-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-40 right-10 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.08) 0%, rgba(46,139,87,0.03) 40%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, rgba(255,107,0,0.03) 40%, transparent 70%)"
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}>
        </div>

        {/* Digital circuit lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,200 C100,100 300,300 500,200 S700,100 900,200 S1100,300 1300,200" 
            stroke="#2E8B57" 
            strokeWidth="1" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100,250 C100,350 300,250 500,350 S700,250 900,350 S1100,250 1300,350" 
            stroke="#FF6B00" 
            strokeWidth="1" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path 
            d="M-100,150 C200,50 400,250 600,150 S800,50 1000,150 S1200,250 1400,150" 
            stroke="#3B82F6" 
            strokeWidth="1" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          />
        </svg>
        
        {/* Fixed position decorative elements instead of random particles */}
        <div className="absolute inset-0">
          {/* First row */}
          <motion.div 
            className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-[#2E8B57]/20"
            animate={{ 
              y: [-5, -15, -5],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-[25%] left-[40%] w-2.5 h-2.5 rounded-full bg-[#FF6B00]/20"
            animate={{ 
              y: [-5, -20, -5],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute top-[18%] left-[60%] w-1.5 h-1.5 rounded-full bg-[#2E8B57]/30"
            animate={{ 
              y: [-3, -12, -3],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-[10%] left-[80%] w-3 h-3 rounded-full bg-[#FF6B00]/20"
            animate={{ 
              y: [-8, -20, -8],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          
          {/* Second row */}
          <motion.div 
            className="absolute top-[45%] left-[15%] w-2.5 h-2.5 rounded-full bg-[#FF6B00]/20"
            animate={{ 
              y: [-5, -15, -5],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
          />
          <motion.div 
            className="absolute top-[35%] left-[35%] w-2 h-2 rounded-full bg-[#2E8B57]/20"
            animate={{ 
              y: [-4, -18, -4],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
          />
          <motion.div 
            className="absolute top-[40%] left-[65%] w-3 h-3 rounded-full bg-[#2E8B57]/20"
            animate={{ 
              y: [-6, -20, -6],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
          <motion.div 
            className="absolute top-[50%] left-[85%] w-2 h-2 rounded-full bg-[#FF6B00]/30"
            animate={{ 
              y: [-5, -15, -5],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Third row */}
          <motion.div 
            className="absolute top-[65%] left-[10%] w-3 h-3 rounded-full bg-[#2E8B57]/20"
            animate={{ 
              y: [-8, -20, -8],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute top-[75%] left-[30%] w-2 h-2 rounded-full bg-[#FF6B00]/20"
            animate={{ 
              y: [-5, -15, -5],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <motion.div 
            className="absolute top-[70%] left-[55%] w-2.5 h-2.5 rounded-full bg-[#2E8B57]/20"
            animate={{ 
              y: [-6, -18, -6],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
          <motion.div 
            className="absolute top-[80%] left-[75%] w-2 h-2 rounded-full bg-[#FF6B00]/30"
            animate={{ 
              y: [-4, -16, -4],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-block border border-[#2E8B57]/10 backdrop-blur-sm">
              Featured Speakers
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Voices of Change
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn from leading experts who are shaping the future of education and
            technology. Our speakers bring diverse perspectives and groundbreaking
            insights to the Festival of Change.
          </motion.p>
        </div>

        <motion.div 
          className="w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderTop: "1px solid rgba(255,255,255,0.7)",
                  borderLeft: "1px solid rgba(255,255,255,0.7)",
                }}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(46,139,87,0.1)",
                }}
              >
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-br from-[#2E8B57]/30 to-[#FF6B00]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                </div>
                
                {/* Image with overlay gradient */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  
                  <div className="w-full h-full bg-gray-200 relative">
                    {/* Futuristic overlay pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-[#FF6B00]/5 opacity-30 mix-blend-overlay"></div>
                    
                    {/* Digital grid overlay */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
                      style={{ 
                        backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}>
                    </div>
                    
                    {/* Fallback if image doesn't load */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Speaker Photo
                    </div>
                    
                    {/* Speaker image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  {/* Subtle glow under the content */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-24 bg-gradient-to-t from-[#2E8B57]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#2E8B57] transition-colors duration-300 mb-2">
                    {speaker.name}
                  </h3>
                  
                  {/* Animated underline */}
                  <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mb-3 rounded-full transition-all duration-500"></div>
                  
                  <p className="text-gray-600 relative z-10">
                    {speaker.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
