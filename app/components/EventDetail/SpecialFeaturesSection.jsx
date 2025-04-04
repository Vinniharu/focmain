"use client";

import { motion } from "framer-motion";
import { Headset, Briefcase, Sparkles } from "lucide-react";

export default function SpecialFeaturesSection() {
  const specialFeatures = [
    {
      title: "VR Experience Zone",
      description: "Experience immersive virtual reality educational environments. See how VR is transforming learning with interactive demonstrations throughout the day.",
      icon: <Headset size={32} />,
      color: "#2E8B57"
    },
    {
      title: "Education & Tech Career Fair",
      description: "Connect with leading education and technology employers. Explore opportunities for talent across various disciplines and network with industry professionals.",
      icon: <Briefcase size={32} />,
      color: "#FF6B00"
    },
    {
      title: "Poster Presentations",
      description: "Showcase research findings and innovative projects through visual presentations, fostering knowledge exchange and collaboration among participants.",
      icon: <Sparkles size={32} />,
      color: "#2E8B57"
    },
    {
      title: "AR/VR Booth",
      description: "Offering immersive educational experiences that showcase the future of learning and work through cutting-edge augmented and virtual reality technologies.",
      icon: <Headset size={32} />,
      color: "#FF6B00"
    },
    {
      title: "Speed Mentoring",
      description: "Quick, high-impact mentorship sessions with industry leaders and educators providing valuable guidance and insights for career development.",
      icon: <Sparkles size={32} />,
      color: "#2E8B57"
    },
    {
      title: "Internship Opportunities",
      description: "Partnerships with organizations to provide hands-on work experience, connecting talented individuals with real-world professional opportunities.",
      icon: <Briefcase size={32} />,
      color: "#FF6B00"
    },
    {
      title: "Art Exhibitions",
      description: "Showcasing creative expressions of education and technology's role in shaping society through compelling visual and interactive installations.",
      icon: <Sparkles size={32} />,
      color: "#2E8B57"
    },
    {
      title: "Teachers' Musicale",
      description: "A unique performance celebrating the contributions of educators and the power of storytelling through music, highlighting the artistic side of education.",
      icon: <Headset size={32} />,
      color: "#FF6B00"
    },
    {
      title: "Sustaining Connections Beyond FOC'25",
      description: "By creating a community that bridges established partners and organizations, we aim to facilitate the sharing of valuable opportunities with attendees.",
      icon: <Sparkles size={32} />,
      color: "#2E8B57"
    }
  ];

  return (
    <div id="features" className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <motion.div 
          className="absolute -top-80 right-0 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] rounded-full"
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
          className="absolute -bottom-80 -left-40 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] rounded-full"
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
        
        {/* Digital circuit lines - hidden on mobile for performance */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 hidden md:block">
          <motion.path 
            d="M-100,200 C100,100 400,300 600,200 S900,100 1200,200 S1500,300 1800,200" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M-50,400 C150,500 350,300 550,400 S750,500 950,400 S1150,300 1350,400" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Floating particles - hidden on mobile for performance */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#2E8B57]/70 hidden md:block"
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
          className="absolute top-2/3 left-3/4 w-3 h-3 rounded-full bg-[#FF6B00]/70 hidden md:block"
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 text-white text-sm font-medium inline-flex items-center">
                <Sparkles size={14} className="mr-2" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-500">
                  Beyond The Program
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Special Features
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-6 md:mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-gray-300 max-w-3xl mx-auto mb-10 md:mb-16 px-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore these special attractions designed to enhance your festival experience 
              and showcase the cutting edge of educational technology.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {specialFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/40 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-700/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                whileHover={{ 
                  y: -5, 
                  transition: { duration: 0.3 },
                }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 via-[#FF6B00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing border */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl border border-[#2E8B57]/30 group-hover:border-[#2E8B57]/60 transition-colors duration-500"></div>
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-5 md:mb-6 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                      border: `1px solid ${feature.color}40`
                    }}
                  >
                    <div className="text-white">{feature.icon}</div>
                    
                    {/* Icon background glow */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle, ${feature.color}40 0%, ${feature.color}00 70%)`,
                        filter: "blur(8px)"
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#2E8B57] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 