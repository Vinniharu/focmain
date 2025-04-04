"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="relative py-14 min-h-screen bg-gray-900 overflow-hidden">
      {/* Digital circuit background pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#2E8B57" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#glow)" />
        </svg>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#2E8B57] to-transparent w-full"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                width: ['0%', '100%', '0%'],
                left: ['0%', '0%', '100%'],
              }}
              transition={{
                duration: 15 + (i % 5) * 2,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#FF6B00] to-transparent h-full"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                height: ['0%', '100%', '0%'],
                top: ['0%', '0%', '100%'],
              }}
              transition={{
                duration: 15 + (i % 5) * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[#2E8B57]/10 to-[#FF6B00]/10 backdrop-blur-3xl"
          style={{
            width: `${80 + (i * 40)}px`,
            height: `${80 + (i * 40)}px`,
            top: `${20 + (i * 10)}%`,
            left: `${10 + (i * 12)}%`,
            zIndex: 1,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.section 
        className="relative z-10 px-4 md:px-0 flex flex-col min-h-screen items-start justify-center max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl space-y-6">
          {/* Tag */}
          <motion.div 
            className="mb-8 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-[#2E8B57]/30 text-[#2E8B57] text-sm font-medium shadow-lg shadow-[#2E8B57]/5">
              Our Story
            </div>
          </motion.div>
          
          {/* Heading */}
          <motion.h1 
            className="font-bold text-5xl md:text-7xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.3 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2E8B57] to-white">
              Connecting Education
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#2E8B57]">
              with Technology
            </span>
          </motion.h1>
          
          {/* Divider */}
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 100, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Description */}
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Learn about the <span className="text-[#FF6B00] font-medium">Festival of Change</span>, our mission, and 
            our vision for the future of education. We're bringing together thought leaders, 
            innovators, and educators to create lasting impact.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            className="mt-10 flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a 
              href="#mission" 
              className="px-8 py-3.5 bg-gradient-to-r from-[#2E8B57] to-[#2E8B57]/80 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#2E8B57]/20 relative overflow-hidden group"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(46, 139, 87, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Our Mission</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/90 to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
            
            <motion.a 
              href="#vision" 
              className="px-8 py-3.5 bg-transparent border border-white/10 hover:border-[#FF6B00]/40 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[#FF6B00]/10 relative overflow-hidden group backdrop-blur-sm"
              whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 107, 0, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Our Vision</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/0 to-[#FF6B00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V59.43C59.71,59.43,141.53,69.23,321.39,56.44Z"
            fill="#111827"
            opacity="0.9"
          />
        </svg>
      </div>
      
      {/* Tech circuit floating element */}
      <div className="absolute right-5 md:right-20 top-1/4 z-2 hidden md:block">
        <motion.div
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#2E8B57]/30 relative"
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 40, 
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2E8B57]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#FF6B00]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div 
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div 
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#2E8B57]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
