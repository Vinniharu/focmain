"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, AlertCircle, MapPin } from "lucide-react";

export default function ProgramSection() {
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
                <Clock size={14} className="mr-2" />
                <span>Full Schedule</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Event Program
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our detailed program schedule will be announced soon. Stay tuned for exciting keynotes, 
              panels, workshops, and special events. Join us for a day filled with learning, 
              collaboration, and innovation.
            </motion.p>
          </div>
          
          {/* Coming Soon Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 text-center"
          >
            <motion.div 
              className="flex flex-col items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 flex items-center justify-center mb-6 shadow-inner">
                <AlertCircle size={40} className="text-[#FF6B00]" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Program Coming Soon</h3>
              
              <p className="text-gray-600 max-w-2xl mb-8">
                We're putting the finishing touches on our exciting lineup of speakers, workshops, and events. 
                Check back soon for the full schedule!
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <Calendar size={24} className="text-[#2E8B57] mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Event Date</div>
                    <div className="font-semibold text-gray-800">June 12, 2025</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <MapPin size={24} className="text-[#FF6B00] mr-3" />
                  <div>
                    <div className="text-sm text-gray-500">Event Location</div>
                    <div className="font-semibold text-gray-800">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 