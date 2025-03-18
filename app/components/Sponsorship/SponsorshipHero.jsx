"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function SponsorshipHero() {
  return (
    <div className="relative min-h-[60vh] pt-16 flex items-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <motion.div 
          className="absolute -top-80 right-0 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.15) 0%, rgba(46,139,87,0.05) 50%, transparent 70%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.8, 
            scale: [1, 1.05, 1],
            transition: { duration: 4, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        <motion.div 
          className="absolute -bottom-80 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 50%, transparent 70%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.8, 
            scale: [1, 1.05, 1],
            transition: { duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }
          }}
        />
        
        {/* Grid pattern */}
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
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M-50,400 C150,500 350,300 550,400 S750,500 950,400 S1150,300 1350,400" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#2E8B57]/70"
          initial={{ opacity: 0 }}
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
          initial={{ opacity: 0 }}
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            opacity: 1,
            transition: { duration: 7, repeat: Infinity, repeatType: "reverse" }
          }}
          style={{ filter: "blur(1px)" }}
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SPONSORSHIP OPPORTUNITIES
            </motion.h1>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Partner with the Festival of Change and connect your brand with education innovation.
            </motion.p>
            
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a
                href="/FOC.pdf"
                target="_blank"
                className="flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 backdrop-blur-sm border border-[#2E8B57]/30 hover:border-[#2E8B57]/50 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(46,139,87,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2 w-5 h-5" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">
                  Download Sponsorship Deck
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Decorative element */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-950 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
} 