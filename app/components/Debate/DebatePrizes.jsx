"use client";

import { motion } from "framer-motion";
import { Award, Medal, Scroll } from "lucide-react";

export default function DebatePrizes() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-flex items-center">
                <Award size={14} className="mr-2" />
                <span>Prizes & Recognition</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Prizes to Be Won
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#FFD700]/10 to-[#FFD700]/20 flex items-center justify-center mx-auto mb-6">
                <Medal className="h-12 w-12 text-[#FFD700]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">1st Place</h3>
              
              <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">
                ₦150,000
              </div>
              
              <p className="text-gray-600">
                Top honors and recognition as the FOC Debate Champion
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#C0C0C0]/10 to-[#C0C0C0]/20 flex items-center justify-center mx-auto mb-6">
                <Medal className="h-12 w-12 text-[#C0C0C0]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">2nd Place</h3>
              
              <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">
                ₦100,000
              </div>
              
              <p className="text-gray-600">
                Runner-up award for outstanding debate performance
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#CD7F32]/10 to-[#CD7F32]/20 flex items-center justify-center mx-auto mb-6">
                <Medal className="h-12 w-12 text-[#CD7F32]" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">3rd Place</h3>
              
              <div className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">
                ₦50,000
              </div>
              
              <p className="text-gray-600">
                Recognition for exceptional debate skills and presentation
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 flex items-center justify-center mx-auto mb-6">
              <Scroll className="h-8 w-8 text-[#2E8B57]" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-gray-800">All Participants Receive</h3>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Certificates of participation recognizing your contribution to the debate on education, innovation, and technology.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
