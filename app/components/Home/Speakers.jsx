"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertCircle, Calendar } from "lucide-react";

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

  // Current speakers data
  const currentSpeakers = [
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

  // Past speakers data
  const pastSpeakers = [
    {
      name: "Praise Mbanali",
      image: "/images/mbanali.jpg",
      description: "Keynote speaker/Panelist",
    },
    {
      name: "Oluwaseun Kayode",
      image: "/images/kayode.jpg",
      description: "Keynote speaker/Panelist",
    },
    {
      name: "Victoria Oladipupo",
      image: "/images/oladipupo.jpg",
      description: "Keynote speaker/Panelist",
    },
    {
      name: "Julius Ilori",
      image: "/images/ilori.jpg",
      description: "Keynote speaker/Panelist",
    },
    {
      name: "Oluwatomiwa Olusesi",
      image: "/images/olusesi.jpg",
      description: "Judge",
    },
    {
      name: "Sunday Daniel",
      image: "/images/daniel.jpg",
      description: "Judge",
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
    if (activeIndex < Math.ceil(pastSpeakers.length / 2) - 1) {
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
            <div className="px-5 py-1.5 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 text-[#2E8B57] text-sm font-medium inline-block border border-[#2E8B57]/20 backdrop-blur-md shadow-lg shadow-[#2E8B57]/5">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] font-semibold tracking-wider">FEATURED SPEAKERS</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57] tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Voices of Change
          </motion.h2>
          
          <motion.div 
            className="h-1.5 w-24 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8 shadow-lg shadow-[#FF6B00]/10"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
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

        {/* Current Speakers Section */}
        <motion.div 
          className="mb-24 relative hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center ">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-gray-100 max-w-md text-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 flex items-center justify-center mx-auto mb-6 shadow-inner">
                <AlertCircle size={40} className="text-[#FF6B00]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Speakers Coming Soon</h3>
              <p className="text-gray-600 mb-6">
                We're finalizing our lineup of inspiring speakers. Check back soon to meet the experts who will be sharing their insights at the Festival of Change.
              </p>
            </div>
          </div>

          {/* Blurred Content */}
          <div className="opacity-50 pointer-events-none h-[20rem]">
            <motion.div 
              className="relative mb-12"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] tracking-tight"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Current Speakers
              </motion.h3>
              <div className="flex items-center justify-center mt-4">
                <motion.div 
                  className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#2E8B57]/70 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 48, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <motion.div 
                  className="h-2 w-2 rounded-full bg-[#2E8B57] mx-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                />
                <motion.div 
                  className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#FF6B00]/70 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 48, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="w-full hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mx-10">
              {currentSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                  className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-2xl overflow-hidden transition-all duration-500"
                style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.8)",
                    borderLeft: "1px solid rgba(255,255,255,0.8)",
                }}
                variants={itemVariants}
                whileHover={{ 
                    y: -12,
                    boxShadow: "0 20px 40px rgba(46,139,87,0.15)",
                  }}
                >
                  {/* Animated border effect */}
                  <motion.div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      background: [
                        "linear-gradient(90deg, rgba(46,139,87,0) 0%, rgba(46,139,87,0.3) 50%, rgba(255,107,0,0.3) 100%)",
                        "linear-gradient(180deg, rgba(46,139,87,0) 0%, rgba(46,139,87,0.3) 50%, rgba(255,107,0,0.3) 100%)",
                        "linear-gradient(270deg, rgba(46,139,87,0) 0%, rgba(46,139,87,0.3) 50%, rgba(255,107,0,0.3) 100%)",
                        "linear-gradient(0deg, rgba(46,139,87,0) 0%, rgba(46,139,87,0.3) 50%, rgba(255,107,0,0.3) 100%)",
                        "linear-gradient(90deg, rgba(46,139,87,0) 0%, rgba(46,139,87,0.3) 50%, rgba(255,107,0,0.3) 100%)",
                      ]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  
                {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#2E8B57]/40 to-[#FF6B00]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                </div>
                
                {/* Image with overlay gradient */}
                <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  
                  <div className="w-full h-full bg-gray-200 relative">
                    {/* Futuristic overlay pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 to-[#FF6B00]/10 opacity-50 mix-blend-overlay"></div>
                    
                      {/* Enhanced Digital grid overlay */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
                      style={{ 
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px),
                            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                          backgroundSize: '20px 20px, 20px 20px, 40px 40px'
                      }}>
                    </div>
                      
                      {/* Futuristic circuit pattern */}
                      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M10,50 L40,50 L45,45 L50,50 L90,50" stroke="white" strokeWidth="0.5" fill="none"/>
                            <path d="M50,10 L50,40 L45,45 L50,50 L50,90" stroke="white" strokeWidth="0.5" fill="none"/>
                            <circle cx="45" cy="45" r="2" fill="white"/>
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#circuit)" />
                        </svg>
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
                          className="group-hover:scale-110 transition-transform duration-700"
                      />
                      </div>
                    </div>
                    
                    {/* Futuristic badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-20">
                      <span className="text-xs font-medium text-white">Featured</span>
                  </div>
                </div>
                
                <div className="p-6 relative">
                  {/* Subtle glow under the content */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-32 bg-gradient-to-t from-[#2E8B57]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                  
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#2E8B57] transition-colors duration-300 mb-2">
                    {speaker.name}
                  </h3>
                  
                  {/* Animated underline */}
                    <div className="flex items-center space-x-1 mb-3">
                      <motion.div 
                        className="h-0.5 w-0 group-hover:w-6 bg-[#2E8B57] rounded-full transition-all duration-300"
                        whileHover={{ width: 24 }}
                      />
                      <motion.div 
                        className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-500 delay-100"
                        whileHover={{ width: 48 }}
                      />
                    </div>
                    
                    <p className="text-gray-600 relative z-10 font-medium">
                      {speaker.description}
                    </p>
                    
                    {/* Futuristic button */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <button className="py-1.5 px-4 rounded-full text-xs font-medium bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 border border-[#2E8B57]/20 text-[#2E8B57] hover:from-[#2E8B57]/20 hover:to-[#FF6B00]/20 transition-all duration-300">
                        View Profile
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Past Speakers Section */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="relative mb-12"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#2E8B57] tracking-tight"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Past Speakers
            </motion.h3>
            <div className="flex items-center justify-center mt-4">
              <motion.div 
                className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#FF6B00]/70 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 48, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.div 
                className="h-2 w-2 rounded-full bg-[#FF6B00] mx-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
              <motion.div 
                className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#2E8B57]/70 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 48, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {pastSpeakers.map((speaker, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                  style={{ 
                    borderTop: "1px solid rgba(255,255,255,0.8)",
                    borderLeft: "1px solid rgba(255,255,255,0.8)",
                  }}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -12,
                    boxShadow: "0 20px 40px rgba(255,107,0,0.15)",
                  }}
                >
                  {/* Animated border effect */}
                  <motion.div 
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    animate={{
                      background: [
                        "linear-gradient(90deg, rgba(255,107,0,0) 0%, rgba(255,107,0,0.3) 50%, rgba(46,139,87,0.3) 100%)",
                        "linear-gradient(180deg, rgba(255,107,0,0) 0%, rgba(255,107,0,0.3) 50%, rgba(46,139,87,0.3) 100%)",
                        "linear-gradient(270deg, rgba(255,107,0,0) 0%, rgba(255,107,0,0.3) 50%, rgba(46,139,87,0.3) 100%)",
                        "linear-gradient(0deg, rgba(255,107,0,0) 0%, rgba(255,107,0,0.3) 50%, rgba(46,139,87,0.3) 100%)",
                        "linear-gradient(90deg, rgba(255,107,0,0) 0%, rgba(255,107,0,0.3) 50%, rgba(46,139,87,0.3) 100%)",
                      ]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                  
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-[#FF6B00]/40 to-[#2E8B57]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
                  </div>
                  
                  {/* Image with overlay gradient */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    
                    <div className="w-full h-full bg-gray-200 relative">
                      {/* Futuristic overlay pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-[#2E8B57]/10 opacity-50 mix-blend-overlay"></div>
                      
                      {/* Enhanced Digital grid overlay */}
                      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
                        style={{ 
                          backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px),
                            radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px, 20px 20px, 40px 40px'
                        }}>
                      </div>
                      
                      {/* Futuristic circuit pattern */}
                      <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                          <pattern id="circuit-past" width="100" height="100" patternUnits="userSpaceOnUse">
                            <path d="M10,50 L40,50 L45,45 L50,50 L90,50" stroke="white" strokeWidth="0.5" fill="none"/>
                            <path d="M50,10 L50,40 L45,45 L50,50 L50,90" stroke="white" strokeWidth="0.5" fill="none"/>
                            <circle cx="45" cy="45" r="2" fill="white"/>
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#circuit-past)" />
                        </svg>
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
                          className="group-hover:scale-110 transition-transform duration-700 object-top"
                        />
                      </div>
                    </div>
                    
                    {/* Futuristic badge - different for past speakers */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 z-20">
                      <span className="text-xs font-medium text-white">Alumni</span>
                    </div>
                  </div>
                  
                  <div className="p-6 relative">
                    {/* Subtle glow under the content */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-32 bg-gradient-to-t from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"></div>
                    
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#FF6B00] transition-colors duration-300 mb-2">
                      {speaker.name}
                    </h3>
                    
                    {/* Animated underline - different for past speakers */}
                    <div className="flex items-center space-x-1 mb-3">
                      <motion.div 
                        className="h-0.5 w-0 group-hover:w-6 bg-[#FF6B00] rounded-full transition-all duration-300"
                        whileHover={{ width: 24 }}
                      />
                      <motion.div 
                        className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#FF6B00] to-[#2E8B57] rounded-full transition-all duration-500 delay-100"
                        whileHover={{ width: 48 }}
                      />
                    </div>
                    
                    <p className="text-gray-600 relative z-10 font-medium">
                    {speaker.description}
                  </p>
                    
                </div>
              </motion.div>
            ))}
          </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
