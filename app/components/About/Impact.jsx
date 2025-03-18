"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

// Component to animate counting numbers
const AnimatedCounter = ({ value, duration = 2, delay = 0 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => `${latest}${value.includes('+') ? '+' : ''}`);
  
  useEffect(() => {
    // Parse the number by removing both commas and plus signs
    const numericValue = parseInt(value.replace(/,|\+/g, ''));
    
    const controls = animate(count, numericValue, {
      duration: duration,
      delay: delay,
      ease: "easeOut",
    });
    
    return controls.stop;
  }, [count, value, duration, delay]);
  
  return <motion.span className="font-bold text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{displayValue}</motion.span>;
};

export default function Impact() {
    const impact = [
        {
            title: "1,000+",
            description: "Attendees"
        },
        {
            title: "50+",
            description: "Speakers"
        },
        {
            title: "25+",
            description: "Workshops"
        },
        {
            title: "15+",
            description: "Countries"
        }
    ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 15, 
        duration: 0.8 
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#2E8B57] to-[#1B5E20] py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="radialGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255, 107, 0, 0.15)" />
              <stop offset="100%" stopColor="rgba(255, 107, 0, 0)" />
            </radialGradient>
          </defs>
          <circle cx="20" cy="20" r="25" fill="url(#radialGradient)" />
        </svg>
        
        {/* Animated particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white/30"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 15)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.section 
        className="relative z-10 max-w-7xl mx-auto px-4 py-8 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-white mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.h1>
        
        <motion.div 
          className="h-1 w-20 bg-white/50 mx-auto rounded-full mb-6"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        
        <motion.p 
          className="text-white/90 max-w-2xl mx-auto text-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The inaugural Festival of Change has made a significant impact on education technology
          in Nigeria and beyond, connecting innovators across continents.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {impact.map((item, index) => (
            <motion.div 
              key={index} 
              className="group perspective"
              variants={itemVariants}
            >
              <motion.div 
                className="relative h-44 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center border border-white/20 transform transition-transform duration-500 group-hover:rotate-y-10 group-hover:scale-105 overflow-hidden"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background decorative line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-0 group-hover:h-full bg-gradient-to-b from-transparent via-white/40 to-transparent transition-all duration-700" />
                
                {/* Circular glow on hover */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-br from-[#FF6B00]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl"
                />
                
                <AnimatedCounter 
                  value={item.title} 
                  delay={0.5 + index * 0.2} 
                />
                
                <motion.p 
                  className="text-white/80 text-lg font-medium mt-2 tracking-wide uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.2 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Icon backdrop for each number */}
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to action button */}
        <motion.div 
          className="mt-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-[#FF6B00] text-white rounded-full shadow-lg hover:shadow-xl overflow-hidden relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Full Impact Report</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF3D00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  );
}
