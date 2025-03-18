"use client";

import { motion } from "framer-motion";
import { Link2, Zap, Users, Globe, Lightbulb } from "lucide-react";

export default function ThemeSection() {
  const themePoints = [
    {
      title: "Technology as a Necessity",
      description: "Technology is no longer a luxury but a necessity in education",
      icon: <Zap size={24} />,
      color: "#FF6B00"
    },
    {
      title: "All Learning Environments",
      description: "From primary schools to universities, from formal to informal learning environments",
      icon: <Globe size={24} />,
      color: "#2E8B57"
    },
    {
      title: "Reshaping Education",
      description: "Technology is reshaping how we teach and learn",
      icon: <Lightbulb size={24} />,
      color: "#FF6B00"
    },
    {
      title: "Inclusive Innovation",
      description: "Making innovative tools accessible to everyone, ensuring no learner is left behind",
      icon: <Users size={24} />,
      color: "#2E8B57"
    }
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

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" 
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.2) 0%, rgba(46,139,87,0.1) 40%, transparent 70%)"
          }}
        />
        
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" 
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(255,107,0,0.1) 40%, transparent 70%)"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}>
        </div>
        
        {/* Decorative shapes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,350 C100,250 300,450 500,350 S700,250 900,350 S1100,450 1300,350" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-flex items-center">
                <Link2 size={14} className="mr-2" />
                <span>2025 Theme</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              CONNECT
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 font-light mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Connecting Education and Technology at All Levels
            </motion.p>
            
            <motion.p 
              className="text-gray-600 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The 2025 theme explores how technology is transforming education across all learning environments, 
              making digital innovation accessible and inclusive for all learners.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {themePoints.map((item, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.3 },
                }}
              >
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/0 via-[#2E8B57]/5 to-[#FF6B00]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-6 relative">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(135deg, ${item.color}10, ${item.color}30)`,
                        border: `1px solid ${item.color}40`
                      }}
                    >
                      <motion.div
                        className="text-gray-800"
                        style={{ color: item.color }}
                        whileHover={{ rotate: 15, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    
                    <div className="space-y-2 flex-1">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#2E8B57] transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <div className="h-0.5 w-0 group-hover:w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-500"></div>
                      
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 