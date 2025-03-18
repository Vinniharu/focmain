"use client";

import { motion } from "framer-motion";
import { Laptop, Utensils, Film, GraduationCap } from "lucide-react";

export default function SpecialSponsorshipSection() {
  const specialOpportunities = [
    {
      id: "tech",
      title: "Technology Partner",
      icon: <Laptop className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      description: "Provide technology solutions for the event site.",
      benefits: [
        "Provide technology solutions for the event site",
        "VIP branding at all tech stations",
        "Promote business opportunities and recognition as official technology partner"
      ]
    },
    {
      id: "lunch",
      title: "Lunch Sponsor",
      icon: <Utensils className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Exclusive brand for all attendees on the event day.",
      benefits: [
        "Exclusive brand for all attendees on the event day",
        "VIP branding during lunch",
        "Access to all participants and good publicity"
      ]
    },
    {
      id: "documentary",
      title: "Documentary Sponsor",
      icon: <Film className="w-8 h-8" />,
      color: "from-purple-500 to-violet-600",
      description: "Exclusive sponsor of \"Dreaming of a Brighter Classroom\".",
      benefits: [
        "Exclusive sponsor of \"Dreaming of a Brighter Classroom\"",
        "Memorable opportunity while accessing high-impact documentary moments"
      ]
    },
    {
      id: "scholarship",
      title: "Student Scholarship",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      description: "Fund attendance for underrepresented students.",
      benefits: [
        "Fund attendance for underrepresented students",
        "Recognition as sponsor, branded during scholarship announcements"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative bg-gray-950 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-96 opacity-10"
          style={{
            background: "radial-gradient(circle at top left, rgba(46,139,87,0.3), transparent 70%)"
          }}
        />
        
        <div className="absolute bottom-0 right-0 w-full h-96 opacity-10"
          style={{
            background: "radial-gradient(circle at bottom right, rgba(255,107,0,0.3), transparent 70%)"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
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
            d="M-100,300 C100,200 300,400 500,300 S700,200 900,300 S1100,400 1300,300" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M-50,500 C150,600 350,400 550,500 S750,600 950,500 S1150,400 1350,500" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Special Sponsorship Opportunities
          </motion.h2>
          
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            In addition to our standard packages, we offer these unique sponsorship opportunities:
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {specialOpportunities.map((opportunity) => (
            <motion.div 
              key={opportunity.id}
              className="relative bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl overflow-hidden group transition-all duration-300 hover:border-gray-700"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${opportunity.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-start mb-6 h-full">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${opportunity.color} p-3 mr-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {opportunity.icon}
                  </div>
                  <div className="flex items-center h-full">
                    <h3 className="text-xl font-bold text-white mb-1">{opportunity.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{opportunity.description}</p>
                
                <h4 className="font-semibold text-white mb-4 border-b border-gray-800 pb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 