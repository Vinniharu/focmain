"use client";

import { motion } from "framer-motion";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Adeola Adeyemi",
      position: "Festival Director",
      background:
        "With over 15 years of experience in education technology, Adeola leads the Festival of Change with passion and vision.",
    },
    {
      name: "Emmanuel Okafor",
      position: "Technology Lead",
      background:
        "Emmanuel brings cutting-edge technical expertise to ensure the festival showcases the latest in educational technology.",
    },
    {
      name: "Ngozi Okonkwo",
      position: "Education Director",
      background:
        "As a former school principal, Ngozi ensures the festival's content is relevant and impactful for educators at all levels.",
    },
    {
      name: "Ibrahim Suleiman",
      position: "Partnerships Manager",
      background:
        "Ibrahim builds strategic relationships with sponsors and partners to maximize the festival's impact and reach.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 120,
        damping: 14,
        duration: 0.8 
      }
    }
  };

  return (
    <div id="team" className="relative bg-gray-900 overflow-hidden py-32">
      {/* Digital Circuit Paths */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path 
            d="M0,30 Q25,40 50,30 T100,30" 
            stroke="rgba(46, 139, 87, 0.15)" 
            strokeWidth="0.2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,50 Q25,70 50,50 T100,50" 
            stroke="rgba(255, 107, 0, 0.15)" 
            strokeWidth="0.2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path 
            d="M0,70 Q25,60 50,70 T100,70" 
            stroke="rgba(46, 139, 87, 0.1)" 
            strokeWidth="0.2" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1 }}
          />
        </svg>
        
        {/* Glowing gradient backgrounds */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#2E8B57]/10 blur-[100px] opacity-60"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-[100px] opacity-50"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </div>
        
        {/* Tech-inspired dot grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(255, 255, 255, 0.15) 1.5px, transparent 0%)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <motion.section 
        className="relative z-10 mx-4 lg:mx-auto max-w-7xl space-y-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-[#2E8B57]/20 text-[#2E8B57] text-sm font-medium shadow-sm">
              Our Leadership
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2E8B57] to-[#FF6B00]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our Visionary Team
          </motion.h2>
          
          <motion.div 
            className="h-0.5 w-40 bg-gradient-to-r from-[#2E8B57] via-white to-[#FF6B00] mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 160, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The dedicated innovators working behind the scenes to make the
            Festival of Change a reality and transform the future of education.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-12 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="relative group perspective-1000"
              variants={cardVariants}
            >
              {/* Card glowing border effect */}
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-700 group-hover:duration-500"
                animate={{
                  opacity: [0, 0.1, 0.05],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              
              <motion.div 
                className="absolute inset-1 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-lg rounded-xl border border-white/10 shadow-xl group-hover:border-white/20 transition-all duration-300 -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  boxShadow: "0 15px 40px -15px rgba(46, 139, 87, 0.3)",
                  transition: { duration: 0.4 }
                }}
              />
              
              <div className="pt-8 pb-6 px-6 flex flex-col items-center relative z-10 rounded-xl bg-gray-900/20 backdrop-blur-xl">
                {/* Decorative element behind photo */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#2E8B57]/20 to-[#FF6B00]/20 blur-2xl"></div>
                
                <motion.div
                  className="w-28 h-28 rounded-full overflow-hidden mb-6 ring-2 ring-white/10 shadow-lg relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    style={{ backgroundImage: `url(/profile.jpg)` }}
                    className="w-full h-full bg-cover bg-center absolute"
                  />
                  
                  {/* Futuristic overlay for photos */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-[#2E8B57]/30 to-[#FF6B00]/30 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  
                  {/* Scan line effect */}
                  <motion.div 
                    className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-40"
                  >
                    <motion.div
                      className="h-[1px] w-full bg-white/50"
                      animate={{ 
                        top: [0, 112, 0], 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        position: "absolute",
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div className="text-center space-y-3 w-full">
                  <motion.h3 
                    className="text-xl font-bold text-white group-hover:text-[#2E8B57] transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.div 
                    className="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <p className="text-[#FF6B00] font-medium tracking-wide text-sm uppercase">
                      {member.position}
                    </p>
                    <div className="h-0.5 w-0 group-hover:w-3/4 bg-gradient-to-r from-transparent via-[#FF6B00]/70 to-transparent mx-auto mt-1 transition-all duration-500" />
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-400 text-sm mt-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {member.background}
                  </motion.p>
                </motion.div>
                
                {/* Tech decoration - corner dots */}
                <div className="absolute top-3 left-3 w-1 h-1 rounded-full bg-[#2E8B57]"></div>
                <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-[#FF6B00]"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-[#FF6B00]"></div>
                <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-[#2E8B57]"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tech decoration - bottom floating element */}
        <motion.div
          className="w-12 h-2 mx-auto mt-16 bg-gradient-to-r from-[#2E8B57]/50 to-[#FF6B00]/50 rounded-full"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.section>
    </div>
  );
}
