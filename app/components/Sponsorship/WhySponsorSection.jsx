"use client";

import { motion } from "framer-motion";
import { Network, Lightbulb, TrendingUp, Handshake } from "lucide-react";

export default function WhySponsorSection() {
  const benefits = [
    {
      title: "Networking Opportunities",
      description: "Connect with key decision-makers in education, policy, and technology sectors. Build relationships that drive innovation and collaboration.",
      icon: <Network className="w-10 h-10" />,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Showcase Your Solutions",
      description: "Demonstrate how your products and services can address evolving challenges in education and technology fields.",
      icon: <Lightbulb className="w-10 h-10" />,
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "Brand Building",
      description: "Enhance your reputation as a forward-thinking organization committed to positive educational transformation.",
      icon: <TrendingUp className="w-10 h-10" />,
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Drive Social Impact",
      description: "Support the next generation of educators and innovators while contributing to meaningful change in education systems.",
      icon: <Handshake className="w-10 h-10" />,
      color: "from-purple-500 to-fuchsia-400"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/10 to-[#FF6B00]/10"></div>
        
        {/* Digital circuit lines */}
        <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-10 overflow-visible">
          <motion.path 
            d="M-100,100 C150,150 400,50 600,100 S900,150 1200,100 S1500,50 1800,100" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, ease: "easeInOut" }}
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
            Why Sponsor FOC&apos;25?
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
            Join us in shaping the future of education. Your partnership empowers innovation and drives meaningful change.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 overflow-hidden group hover:border-gray-700 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 bg-gradient-to-br ${benefit.color} -translate-y-1/2 translate-x-1/2 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} p-3 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 