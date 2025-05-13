"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";

export default function DebateOverview() {
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
                <Lightbulb size={14} className="mr-2" />
                <span>Objective & End Goal</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Competition Overview
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#f8f8f8] to-white shadow-xl border border-gray-100"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 flex items-center justify-center mb-6">
                <Lightbulb size={28} className="text-[#2E8B57]" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">Objective</h3>
              
              <p className="text-gray-600 mb-4">
                To engage young minds in critical thinking, foster public speaking skills, and spark innovative
                ideas on transforming education systems through technology and creativity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-[#f8f8f8] to-white shadow-xl border border-gray-100"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-[#FF6B00]/10 to-[#2E8B57]/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-[#FF6B00]" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-800">End Goal</h3>
              
              <p className="text-gray-600 mb-4">
                To raise awareness, drive dialogue, and inspire action toward reshaping education through
                innovation, while discovering young talents and empowering secondary school students
                participation in societal transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
