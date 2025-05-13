"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Award, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function DebateHero() {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 1200,
    height: 800
  });
  
  useEffect(() => {
    // This code only runs on the client
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Set initial size
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 rounded-full bg-white/10"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: Math.random() * windowSize.height,
              opacity: Math.random() * 0.5 + 0.1
            }}
            animate={{
              x: [
                Math.random() * windowSize.width,
                Math.random() * windowSize.width,
                Math.random() * windowSize.width
              ],
              y: [
                Math.random() * windowSize.height,
                Math.random() * windowSize.height,
                Math.random() * windowSize.height
              ],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.15) 0%, rgba(46,139,87,0.05) 50%, transparent 70%)"
          }}
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.7, 0.9, 0.7],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 50%, transparent 70%)"
          }}
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.6, 0.8, 0.6],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        
        {/* Abstract lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-20">
          <motion.path 
            d="M-100,200 C100,100 400,300 600,200 S900,100 1200,200 S1500,300 1800,200" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="6,12" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
          />
          
          <motion.path 
            d="M-50,400 C150,500 350,300 550,400 S750,500 950,400 S1150,300 1350,400" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="6,12" 
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left side content */}
        <motion.div 
          className="w-full md:w-1/2 mb-12 md:mb-0 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-orange-500/20 border border-white/5">
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-orange-400">
                Festival of Change 2025
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="block text-white">Voices of</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-orange-400 to-green-400">
                Change
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              Debating the Future of Education, Innovation and Technology
            </h2>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <motion.a
                href="mailto:info@festivalofchange.org"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-600 to-green-500 text-white font-medium shadow-lg flex items-center gap-2 group"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(46,139,87,0.3)" }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                Apply Now
                <motion.span
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.a>
              
              <motion.a
                href="#overview"
                className="px-6 py-3 rounded-lg border border-green-500/50 text-green-400 font-medium hover:bg-green-500/10 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side info cards */}
        <motion.div 
          className="w-full md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Highlight border */}
            <motion.div 
              className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-green-500/20 via-orange-500/20 to-green-500/20 blur-lg opacity-70"
              animate={{ 
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative bg-gray-800/70 backdrop-blur-xl p-8 rounded-xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard 
                  icon={<Calendar className="w-6 h-6 text-green-400" />}
                  title="Submission Deadline"
                  value="May 15, 2025"
                  delay={0.4}
                />
                
                <InfoCard 
                  icon={<Clock className="w-6 h-6 text-orange-400" />}
                  title="Competition Duration"
                  value="30 minutes"
                  delay={0.5}
                />
                
                <InfoCard 
                  icon={<MapPin className="w-6 h-6 text-green-400" />}
                  title="Location"
                  value="Tayo Aderinokun Auditorium"
                  subvalue="University of Lagos"
                  delay={0.6}
                />
                
                <InfoCard 
                  icon={<Award className="w-6 h-6 text-orange-400" />}
                  title="Total Prize Pool"
                  value="₦300,000"
                  delay={0.7}
                />
              </div>
              
              <motion.div 
                className="mt-6 pt-6 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full border-2 border-gray-800 bg-gray-700 flex items-center justify-center text-xs text-white"
                      >
                        <Users className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-medium">10 finalists</span> will be selected
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, value, subvalue, delay = 0 }) {
  return (
    <motion.div 
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="mt-1">
        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <p className="text-white font-medium">{value}</p>
        {subvalue && <p className="text-gray-400 text-sm">{subvalue}</p>}
      </div>
    </motion.div>
  );
}