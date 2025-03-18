"use client";

import { Calendar, MapPin } from "lucide-react";
import Countdown from "../../UI/Countdown";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <div className="relative h-full pt-32 pb-10 min-h-screen bg-gradient-to-br from-gray-900 via-[#1E293B] to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/homebg.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}>
        </div>
        
        {/* Animated decorative circles */}
        <motion.div 
          className="absolute top-[15%] right-[10%] w-96 h-96 rounded-full bg-[#2E8B57]/10 blur-[100px]"
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
          className="absolute bottom-[15%] left-[10%] w-80 h-80 rounded-full bg-[#FF6B00]/10 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        {/* Floating technology-inspired lines */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-20">
          <motion.path 
            d="M0,100 Q400,150 800,100 T1600,100" 
            stroke="rgba(46, 139, 87, 0.3)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,300 Q400,250 800,300 T1600,300" 
            stroke="rgba(255, 107, 0, 0.3)" 
            strokeWidth="1" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-8 max-w-3xl">
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ duration: 0.5 }}
            >
              <div className="py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium inline-flex items-center">
                <span className="bg-[#FF6B00] h-2 w-2 rounded-full mr-2"></span>
                Coming June 2025
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 60, 
                damping: 20,
                delay: 0.2 
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF6B00] to-white">
                Festival of Change
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E8B57] to-white text-5xl md:text-7xl lg:text-8xl">
                2025
              </span>
            </motion.h1>
            
            <motion.div 
              className="h-1 w-32 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            
            <motion.h2 
              className="text-lg md:text-2xl text-white/90 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-[#FF6B00] font-bold">CONNECT:</span> Bridging Education and Technology at All Levels
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap items-center gap-6 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full py-1.5 px-4 border border-white/10">
                <Calendar className="text-[#FF6B00]" size={18} />
                <span>June 12, 2025</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full py-1.5 px-4 border border-white/10">
                <MapPin className="text-[#2E8B57]" size={18} />
                <span>Lagos, Nigeria</span>
              </div>
            </motion.div>
            
            <motion.div
              className="my-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Countdown/>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-5 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div className="relative group">
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full blur opacity-0 group-hover:opacity-70 transition-all duration-500"
                />
                <motion.a 
                  href="/register" 
                  className="relative flex items-center justify-center bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium px-8 py-3.5 rounded-full shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Register Now</span>
                  <div className="absolute inset-0 rounded-full bg-white/10" />
                </motion.a>
              </motion.div>
              
              <motion.a 
                href="/event-details" 
                className="flex items-center justify-center bg-transparent border border-white/20 hover:border-white/40 text-white font-medium px-8 py-3.5 rounded-full backdrop-blur-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Program</span>
                <motion.div 
                  className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full h-12 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
            fillOpacity="0.05"
          />
        </svg>
      </div>
    </div>
  );
}
