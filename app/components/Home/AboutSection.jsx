"use client";

import { Lightbulb, MessageSquare, Users, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const aboutData = [
    {
      title: "Keynote Sessions",
      description:
        "Inspiring talks from leading experts in education and technology, showcasing innovative approaches and future trends.",
      icon: <MessageSquare size={24} />,
      color: "#FF6B00",
      delay: 0
    },
    {
      title: "Panel Discussions",
      description:
        "Thought-provoking conversations about the future of education technology with policy makers, educators and industry leaders.",
      icon: <Users size={24} />,
      color: "#2E8B57",
      delay: 0.1
    },
    {
      title: "Innovation Showcase",
      description:
        "Experience cutting-edge educational technologies and solutions that are transforming how we learn, teach and connect.",
      icon: <Lightbulb size={24} />,
      color: "#FF6B00",
      delay: 0.2
    },
    // {
    //   title: "Hands-on Workshops",
    //   description:
    //     "Interactive sessions where you can learn practical skills and techniques from experts in educational technology.",
    //   icon: <Code size={24} />,
    //   color: "#2E8B57",
    //   delay: 0.3
    // }
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.6 
      }
    }
  };

  // Animation for decorative elements
  const decorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 0.95, opacity: 0.7 },
    animate: {
      scale: 1.05,
      opacity: 0.9,
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <motion.div 
          className="absolute -top-80 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.15) 0%, rgba(46,139,87,0.05) 50%, transparent 70%)"
          }}
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        />
        
        <motion.div 
          className="absolute -bottom-80 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 50%, transparent 70%)"
          }}
          variants={pulseVariants}
          initial="initial"
          animate="animate"
        />
        
        {/* Grid pattern for tech feel */}
        <div className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '35px 35px'
          }}>
        </div>
        
        {/* Digital circuit lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,200 C100,100 400,300 600,200 S900,100 1200,200 S1500,300 1800,200" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M-50,400 C150,500 350,300 550,400 S750,500 950,400 S1150,300 1350,400" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#2E8B57]/70"
          variants={decorVariants}
          initial="hidden"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: 1,
            transition: { duration: 5, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ filter: "blur(1px)" }}
        />
        
        <motion.div
          className="absolute top-2/3 left-3/4 w-3 h-3 rounded-full bg-[#FF6B00]/70"
          variants={decorVariants}
          initial="hidden"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: 1,
            transition: { duration: 7, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ filter: "blur(1px)" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/5 w-1.5 h-1.5 rounded-full bg-white/50"
          variants={decorVariants}
          initial="hidden"
          animate={{
            y: [0, -10, 0],
            x: [0, -10, 0],
            opacity: 1,
            transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ filter: "blur(1px)" }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8"
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
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 text-[#2E8B57] text-sm font-medium inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                What to Expect
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57] mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About the Festival
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
        The Festival of Change is a Global event that brings together
        educators, technologists, policymakers, and innovators to explore the
        intersection of education and technology.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.map((item, index) => (
            <motion.div 
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
              }}
            >
              {/* Glass effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm opacity-80"></div>
              
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 via-[#FF6B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-xl border border-[#2E8B57]/30 group-hover:border-[#2E8B57]/60 transition-colors duration-500"></div>
                <div className="absolute left-0 bottom-0 right-0 h-1 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
              
              <div className="p-8 relative">
                <div className="flex items-start gap-6">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                      border: `1px solid ${item.color}40`
                    }}
                  >
                    <motion.div
                      className="text-white relative z-10"
                      style={{ color: item.color }}
                      whileHover={{ rotate: 15, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Icon background glow */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle, ${item.color}40 0%, ${item.color}00 70%)`,
                        filter: "blur(8px)"
                      }}
                    />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#2E8B57] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]/80 rounded-full transition-all duration-500"></div>
                    
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                    
                  </div>
                </div>
          </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="/about" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 backdrop-blur-sm border border-[#2E8B57]/30 hover:border-[#2E8B57]/50 shadow-lg hover:shadow-[#2E8B57]/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] font-medium">Learn more about the festival</span>
            <motion.span 
              className="ml-2 text-[#FF6B00]"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
