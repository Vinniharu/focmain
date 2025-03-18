"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Award, Trophy, BadgeCheck, Plus } from "lucide-react";

export default function Sponsors() {
  const tiers = [
    {
      title: "Diamond Sponsors",
      sponsors: ["Available Spot", "Available Spot"],
      maxSpots: 2,
      icon: <Trophy size={20} />,
      color: "#3B82F6",
      gradient: "from-blue-400 to-blue-600",
      bgGradient: "from-blue-50 to-white"
    },
    {
      title: "Platinum Sponsors",
      sponsors: ["Available Spot", "Available Spot", "Available Spot"],
      maxSpots: 3,
      icon: <Award size={20} />,
      color: "#2E8B57",
      gradient: "from-emerald-400 to-green-500",
      bgGradient: "from-emerald-50 to-white"
    },
    {
      title: "Gold Sponsors",
      sponsors: ["Available Spot", "Available Spot", "Available Spot", "Available Spot"],
      maxSpots: 4,
      icon: <Shield size={20} />,
      color: "#FF6B00",
      gradient: "from-orange-400 to-orange-500",
      bgGradient: "from-orange-50 to-white"
    },
    {
      title: "Silver Sponsors",
      sponsors: ["Available Spot", "Available Spot", "Available Spot", "Available Spot", "Available Spot"],
      maxSpots: 5,
      icon: <BadgeCheck size={20} />,
      color: "#64748B",
      gradient: "from-slate-400 to-slate-500",
      bgGradient: "from-slate-50 to-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    }
  };

  const sponsorVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="relative bg-white py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="absolute top-40 -right-20 w-[400px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.1) 0%, rgba(46,139,87,0.05) 50%, transparent 70%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-20 w-[300px] h-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.1) 0%, rgba(255,107,0,0.05) 50%, transparent 70%)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}>
        </div>
        
        {/* Decorative shapes */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M-100,350 C100,250 300,450 500,350 S700,250 900,350 S1100,450 1300,350" 
            stroke="#FFB6C1" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-block">
              Become Our Partner
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sponsorship Opportunities
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          <motion.p 
            className="max-w-3xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join innovative organizations in supporting the Festival of Change. 
            We offer various sponsorship tiers with different benefits and visibility opportunities.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="space-y-16"
        >
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-b ${tier.bgGradient} p-8 md:p-10 shadow-sm`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.gradient}"></div>
              
              <div className="flex items-center mb-8">
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${tier.gradient} text-white mr-4 shadow-md`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">{tier.title}</h3>
                <span className="ml-3 text-sm text-gray-500">({tier.maxSpots} spots available)</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {tier.sponsors.map((sponsor, i) => (
                  <motion.div
                    key={i}
                    variants={sponsorVariants}
                    whileHover="hover"
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 aspect-square border border-dashed border-gray-300"
                    style={{ 
                      borderTop: "1px solid rgba(255,255,255,0.7)",
                      borderLeft: "1px solid rgba(255,255,255,0.7)",
                    }}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Placeholder for sponsor */}
                      <div className="relative w-24 h-24 flex flex-col items-center justify-center text-center">
                        <Plus size={24} className={`text-${tier.color.toLowerCase()}/50 mb-2`} />
                        <div className={`text-gray-400 font-medium text-sm mb-1`}>Sponsor Spot</div>
                        <div className="text-xs text-gray-400">{i + 1} of {tier.maxSpots}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a 
            href="/sponsorship" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] font-medium">
              Learn About Sponsorship Benefits
            </span>
            <motion.span 
              className="ml-2 text-[#FF6B00]"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
