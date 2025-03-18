"use client";

import { motion } from "framer-motion";

export default function OurMission() {
  const mission = [
    {
      title: "Inspire Innovation",
      description:
        "Showcasing cutting-edge technologies and approaches that are reshaping education.",
      icon: "✨"
    },
    {
      title: "Connect Communities",
      description:
        "Building bridges between educators, technologists, and policymakers.",
      icon: "🔄"
    },
    {
      title: "Share Knowledge",
      description:
        "Facilitating the exchange of ideas, research, and best practices.",
      icon: "📚"
    },
    {
      title: "Drive Impact",
      description:
        "Creating meaningful change in education at all levels.",
      icon: "🚀"
    },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 12,
        duration: 0.5 
      }
    }
  };

  return (
    <div id="mission" className="relative bg-gray-900 overflow-hidden py-32">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Hexagon grid pattern - subtle tech background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(5)">
                <polygon points="24.8,22 37.3,29.2 37.3,43.5 24.8,50.7 12.4,43.5 12.4,29.2" fill="none" stroke="#2E8B57" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
          </svg>
        </div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-10 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-[#2E8B57]/10 to-[#FF6B00]/5 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div 
            className="inline-block mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-[#2E8B57]/10 text-[#2E8B57] text-sm font-medium border border-[#2E8B57]/20 shadow-sm shadow-[#2E8B57]/5">
              Our Purpose
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-[#2E8B57] to-[#FF6B00]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Mission
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-300 text-lg mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The <span className="text-[#FF6B00] font-medium">Festival of Change</span> is dedicated to transforming education through
            technology and innovation. We bring together educators, technologists,
            policymakers, and innovators to explore the intersection of education
            and technology.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our mission is to foster collaboration, share best practices, and
            inspire transformative change in education by leveraging the digital age
            technologies to enhance learning at all levels.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {mission.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              variants={itemVariants}
            >
              {/* Card glowing border effect */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-[#2E8B57]/30 to-[#FF6B00]/30 rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-700 group-hover:duration-500"
              />
              
              <motion.div 
                className="relative p-px rounded-xl bg-gradient-to-r from-gray-800 to-gray-800 border border-white/5 overflow-hidden group-hover:border-[#2E8B57]/20 transition-all duration-300"
                whileHover={{ boxShadow: "0 10px 30px -10px rgba(46, 139, 87, 0.2)" }}
              >
                <div className="absolute inset-0 overflow-hidden">
                  {/* Card background pattern */}
                  <svg className="absolute w-full h-full opacity-10" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2E8B57" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <rect width="100" height="100" fill="url(#cardGrad)" />
                  </svg>
                </div>
                  
                <div className="relative p-8 backdrop-blur-sm flex items-start gap-5 bg-gray-900/50">
                  <div className="shrink-0 mt-1">
                    <motion.div 
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#2E8B57]/30 to-[#FF6B00]/20 text-3xl shadow-lg border border-white/5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    <motion.h3 
                      className="text-2xl font-bold text-white group-hover:text-[#2E8B57] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-300"
                    />
                    
                    <motion.p 
                      className="text-gray-300 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
