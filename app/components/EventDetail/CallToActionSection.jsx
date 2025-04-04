"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mic, Mail } from "lucide-react";
import Link from "next/link";

export default function CallToActionSection() {
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
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-3xl p-10 md:p-14 shadow-xl overflow-hidden relative">
            {/* Decorative elements within card */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Gradient overlays */}
              <motion.div 
                className="absolute -top-40 right-0 w-[300px] h-[300px] rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(46,139,87,0.3) 0%, rgba(46,139,87,0.1) 50%, transparent 70%)"
                }}
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.2, 0.3, 0.2],
                  transition: { duration: 5, repeat: Infinity, repeatType: "reverse" }
                }}
              />
              
              <motion.div 
                className="absolute -bottom-40 -left-20 w-[300px] h-[300px] rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(255,107,0,0.3) 0%, rgba(255,107,0,0.1) 50%, transparent 70%)"
                }}
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.2, 0.3, 0.2],
                  transition: { duration: 5, repeat: Infinity, repeatType: "reverse", delay: 1 }
                }}
              />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.05]" 
                style={{ 
                  backgroundImage: `
                    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}>
              </div>
            </div>
            
            <div className="relative z-10 text-center">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Be Part of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">Change</span>
                </h2>
                
                <motion.div 
                  className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Join educators, innovators, students, and policymakers in exploring 
                  the future of education through technology and innovation.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Link href="/register ">
                  <motion.button 
                    className="px-6 py-3 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full text-white font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 10px 25px rgba(46,139,87,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mic size={18} className="mr-2" />
                    Register Here
                    <motion.span 
                      className="ml-1"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.button>
                </Link>
                
                <Link href="mailto:info@festivalofchange.org">
                  <motion.button 
                    className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-medium flex items-center border border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} className="mr-2" />
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-sm text-gray-400 mb-1">Contact Information</div>
                <p className="text-gray-300 mb-1">11, Ademola Saka Close, Peace estate, Ajao Estate, Lagos, Nigeria</p>
                <p className="text-gray-300 mb-1">+234 808 525 5769</p>
                <p className="text-[#2E8B57] hover:text-[#FF6B00] transition-colors duration-300">
                  <a href="mailto:info@festivalofchange.org">info@festivalofchange.org</a>
                </p>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter for updates about the event</p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:border-[#2E8B57] focus:outline-none focus:ring-1 focus:ring-[#2E8B57] shadow-sm"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 