"use client";

import { motion } from "framer-motion";
import { Sparkles, Calendar, Users } from "lucide-react";
import Link from "next/link";

export default function ReadyToJoin() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 via-white to-[#FF6B00]/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh gradient background */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" 
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.2) 0%, rgba(46,139,87,0.1) 40%, transparent 70%)"
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" 
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(255,107,0,0.1) 40%, transparent 70%)"
          }}
        />
        
        {/* Animated particles */}
        <motion.div 
          className="absolute top-20 left-[10%] w-6 h-6 rounded-full bg-[#2E8B57]/20"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-40 right-[15%] w-4 h-4 rounded-full bg-[#FF6B00]/20"
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div 
          className="absolute top-[40%] right-[25%] w-8 h-8 rounded-full bg-[#2E8B57]/20"
          animate={{ 
            y: [0, -25, 0], 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Decorative lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,200 C100,100 300,300 500,200 S700,100 900,200 S1100,300 1300,200" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100,250 C100,350 300,250 500,350 S700,250 900,350 S1100,250 1300,350" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Content section */}
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-flex items-center">
                <Sparkles size={14} className="mr-2" />
                <span>Join the Movement</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Be Part of the Change?
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join educators, innovators, and change-makers from around the world at the Festival of Change 2025. Together, we'll explore the future of education technology and shape the next generation of learning experiences.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center text-[#2E8B57]">
                  <Calendar size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">June 12, 2025</h3>
                  <p className="text-gray-500 text-sm">Mark your calendars for the event of the year</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                  <Users size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">1,500+ Attendees</h3>
                  <p className="text-gray-500 text-sm">Network with leaders and innovators in education</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/register">
                <motion.button 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(46,139,87,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.button>
              </Link>
              
              <Link href="/sponsorship">
                <motion.button 
                  className="px-6 py-3 rounded-full bg-white text-gray-800 border border-gray-200 font-medium shadow-sm hover:shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.9)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Become a Sponsor
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Card visual */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              className="relative max-w-md mx-auto"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main card */}
              <div className="relative z-10 bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg overflow-hidden border border-white/50">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-[#FF6B00]/5 z-0"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E8B57] to-[#FF6B00] flex items-center justify-center text-white mb-6">
                    <Sparkles size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Festival Highlights</h3>
                  
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#2E8B57]">•</div>
                      <p className="text-gray-600">3 keynotes</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#FF6B00]">•</div>
                      <p className="text-gray-600">3 panels</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#2E8B57]">•</div>
                      <p className="text-gray-600">Innovative showcase</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#FF6B00]">•</div>
                      <p className="text-gray-600">Networking and mentorship opportunities</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#2E8B57]">•</div>
                      <p className="text-gray-600">Live art exhibition</p>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 mt-1 text-[#FF6B00]">•</div>
                      <p className="text-gray-600">Pitch competitions</p>
                    </li>
                  </ul>
                  
                  <motion.div 
                    className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  />
                  
                  <p className="text-sm text-gray-500 italic">
                    "The Festival of Change is where education meets innovation, creating a blueprint for the future of learning."
                  </p>
                </div>
              </div>
              
              {/* Decorative elements behind card */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#2E8B57]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
