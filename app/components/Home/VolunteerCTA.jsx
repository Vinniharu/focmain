"use client";

import { motion } from "framer-motion";
import { Heart, ChevronRight, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function VolunteerCTA() {
  // Volunteer roles
  const volunteerRoles = [
    "Event Coordination Support",
    "Registration Desk",
    "Live Streaming",
    "Social Media Managers/Digital Content Creators",
    "Photography/Videography",
    "Content Writers",
    "Marketing and Public Relations",
    "Logistics Support",
    "Speaker Liaison",
    "Hospitality/Welfare",
    "Ushering/Protocol",
    "Vendor Coordination",
    "Graphic Design"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 9 }
    }
  };

  return (
    <div className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh gradient blobs */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20" 
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.15) 0%, rgba(46,139,87,0.05) 40%, transparent 70%)"
          }}
        />
        
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20" 
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.15) 0%, rgba(255,107,0,0.05) 40%, transparent 70%)"
          }}
        />
        
        {/* Floating particles */}
        <motion.div 
          className="absolute top-20 left-[20%] w-4 h-4 rounded-full bg-[#2E8B57]/20"
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute bottom-32 right-[25%] w-3 h-3 rounded-full bg-[#FF6B00]/20"
          animate={{ 
            y: [0, -12, 0], 
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        <motion.div 
          className="absolute top-[40%] right-[15%] w-6 h-6 rounded-full bg-[#2E8B57]/20"
          animate={{ 
            y: [0, -20, 0], 
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '35px 35px'
          }}>
        </div>
        
        {/* Animated paths */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,150 C100,50 300,250 500,150 S700,50 900,150 S1100,250 1300,150" 
            stroke="#2E8B57" 
            strokeWidth="1" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          <motion.path 
            d="M-100,300 C100,400 300,300 500,400 S700,300 900,400 S1100,300 1300,400" 
            stroke="#FF6B00" 
            strokeWidth="1" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-flex items-center shadow-sm">
              <Heart size={14} className="mr-2" />
              <span>Volunteer With Us</span>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Be Part of Something Bigger
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join our passionate team of volunteers and help make the Festival of Change a success.
            Gain valuable experience, expand your network, and be at the heart of educational innovation.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left column - Volunteer roles */}
          <motion.div 
            className="lg:w-7/12 bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white shadow-xl overflow-hidden relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-[#FF6B00]/5 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Volunteer Opportunities</h3>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {volunteerRoles.map((role, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-3 bg-white/80 p-3 rounded-xl shadow-sm border border-gray-100 hover:border-[#2E8B57]/20 transition-all duration-300 group"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 30px -10px rgba(46,139,87,0.15)",
                      borderColor: "rgba(46,139,87,0.3)"
                    }}
                  >
                    <div className="w-2 h-8 bg-gradient-to-b from-[#2E8B57] to-[#FF6B00] rounded-full"></div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{role}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Info and CTA */}
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#FF6B00]/10 rounded-2xl p-8 border border-white/50 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Why Volunteer With Us?</h3>
              
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="mt-1 text-[#2E8B57]">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-700">Gain valuable professional experience</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="mt-1 text-[#FF6B00]">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-700">Network with industry leaders and innovators</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="mt-1 text-[#2E8B57]">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-700">Be at the forefront of educational innovation</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="mt-1 text-[#FF6B00]">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-700">Receive a certificate of participation</p>
                </motion.li>
                
                <motion.li 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className="mt-1 text-[#2E8B57]">
                    <ChevronRight size={16} />
                  </div>
                  <p className="text-gray-700">Make meaningful connections and friendships</p>
                </motion.li>
              </ul>
            </div>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100 shadow-md">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#2E8B57]/10 flex items-center justify-center text-[#2E8B57]">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">June 12, 2025</h3>
                    <p className="text-gray-500 text-sm">Event date</p>
                  </div>
                </div>
                
                <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Limited Spots</h3>
                    <p className="text-gray-500 text-sm">Apply early to secure your role</p>
                  </div>
                </div>
              </div>
              
              <Link href="https://forms.gle/8h7HWbJbPTDCX45k8" target="_blank" className="block">
                <motion.button 
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(46,139,87,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Apply to Volunteer</span>
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 