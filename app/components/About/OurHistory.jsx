"use client";

import { motion } from "framer-motion";

export default function OurHistory() {
  // Timeline data
  const timelineEvents = [
    {
      year: "2024",
      title: "FOC'24: The Beginning",
      description: [
        "The inaugural Festival of Change was launched in 2024, bringing together over 500 participants from across Nigeria and beyond. The event featured renowned keynote speakers, panel discussions, workshops, and networking opportunities.",
        "Key themes included digital literacy, inclusive education, online learning, gamification, AI in education, and the future of classrooms in a post-pandemic world."
      ],
      color: "#2E8B57",
      icon: "🚀"
    },
    {
      year: "2025",
      title: "FOC'25: Expanding Horizons",
      description: [
        "Building on the success of our inaugural event, FOC'25 aims to expand our reach and impact. This year's theme, \"CONNECT,\" emphasizes our commitment to bridging gaps and creating a more inclusive educational ecosystem through technology.",
        "We're excited to welcome an even more diverse group of stakeholders, featuring enhanced programming, immersive experiences, and greater opportunities for collaboration and networking. We're committed to continuing our journey of transformation through innovation and partnership."
      ],
      color: "#FF6B00",
      icon: "🌐"
    }
  ];

  // Timeline animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12, 
        duration: 0.6 
      }
    }
  };

  return (
    <div className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-24 w-48 h-48 rounded-full bg-[#2E8B57]/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-24 w-48 h-48 rounded-full bg-[#FF6B00]/5 blur-3xl"></div>
      
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 h-24 w-px bg-gradient-to-b from-transparent via-[#2E8B57]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-24 w-px bg-gradient-to-b from-transparent via-[#FF6B00]/20 to-transparent"></div>
      
      <motion.div 
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 space-y-8 md:space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center space-y-4">
          <motion.div 
            className="inline-block mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium">
              Our Journey
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our History
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto pt-4 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tracing our evolution from a visionary concept to a transformative movement in educational technology
          </motion.p>
        </div>
        
        {/* Modern Timeline */}
        <motion.div
          className="relative pt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#2E8B57] via-[#FF6B00] to-transparent"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              className="relative mb-12 md:mb-20"
              variants={itemVariants}
            >
              {/* Mobile layout (stacked) */}
              <div className="md:hidden flex flex-col items-center">
                {/* Year bubble for mobile */}
                <motion.div 
                  className="flex items-center justify-center mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 10,
                    delay: 0.3 + index * 0.2 
                  }}
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg border-2" style={{ borderColor: event.color }}>
                    <span className="text-lg font-bold" style={{ color: event.color }}>{event.year}</span>
                  </div>
                </motion.div>
                
                {/* Content card for mobile */}
                <motion.div 
                  className="w-full px-3"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 } 
                  }}
                >
                  <div className="relative bg-white p-5 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                      <div className="absolute transform rotate-45 bg-gradient-to-r from-transparent to-white/80 w-16 h-16 -top-8 -right-8 backdrop-blur-sm"></div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center text-xl" style={{ backgroundColor: `${event.color}20` }}>
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {event.description.map((paragraph, pIndex) => (
                        <motion.p 
                          key={pIndex} 
                          className="text-gray-600 text-sm md:text-base"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.5 + pIndex * 0.2 }}
                        >
                          {paragraph}
                        </motion.p>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent to-gray-200 mt-4 rounded-full"
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                    />
                  </div>
                </motion.div>
              </div>
              
              {/* Desktop layout (alternating left and right) */}
              <div className="hidden md:flex md:items-center md:justify-center">
                {/* Container for position control */}
                <div className={`relative flex w-full items-center ${event.year === "2024" ? 'justify-start' : 'justify-end'}`}>
                  {/* Year bubble for desktop */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 10,
                      delay: 0.3 + index * 0.2 
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg border-2" style={{ borderColor: event.color }}>
                      <span className="text-lg font-bold" style={{ color: event.color }}>{event.year}</span>
                    </div>
                  </motion.div>
                  
                  {/* Content card for desktop */}
                  <motion.div 
                    className={`w-5/12 ${event.year === "2024" ? 'pl-6 lg:pl-12 text-left' : 'pr-6 lg:pr-12 text-right'}`}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 } 
                    }}
                  >
                    <div className="relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-gradient-to-r from-transparent to-white/80 w-16 h-16 -top-8 -right-8 backdrop-blur-sm"></div>
                      </div>
                      
                      <div className={`flex items-center mb-4 ${event.year === "2024" ? 'justify-start' : 'justify-end'}`}>
                        {event.year === "2024" && (
                          <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center text-xl" style={{ backgroundColor: `${event.color}20` }}>
                            {event.icon}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                        {event.year === "2025" && (
                          <div className="w-10 h-10 rounded-full ml-4 flex items-center justify-center text-xl" style={{ backgroundColor: `${event.color}20` }}>
                            {event.icon}
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        {event.description.map((paragraph, pIndex) => (
                          <motion.p 
                            key={pIndex} 
                            className={`text-gray-600 ${event.year === "2024" ? 'text-left' : 'text-right'}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 + pIndex * 0.2 }}
                          >
                            {paragraph}
                          </motion.p>
                        ))}
                      </div>
                      
                      <motion.div 
                        className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-transparent to-gray-200 mt-4 rounded-full"
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Future event */}
          <motion.div 
            className="text-center mt-8 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-gray-700 text-sm md:text-base">
              <span className="font-medium">More exciting chapters coming soon...</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
