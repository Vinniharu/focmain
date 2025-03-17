"use client";

import { motion } from "framer-motion";

export default function OurHistory() {
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="mx-4 lg:m-auto max-w-3xl py-16 space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1 
        className="font-bold text-2xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our History
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.section 
          className="space-y-4 mb-10 relative pl-6 border-l-2 border-[#2E8B57]"
          variants={itemVariants}
          whileHover={{ 
            x: 5, 
            transition: { duration: 0.3 } 
          }}
        >
          <motion.div 
            className="absolute w-4 h-4 bg-[#2E8B57] rounded-full -left-[9px] top-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
          <motion.h2 
            className="text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            FOC'24: The Beginning
          </motion.h2>
          <motion.p 
            className="text-[#757575]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The inaugural Festival of Change was launched in 2024, bringing
            together over 500 participants from across Nigeria and beyond. The
            event featured renowned keynote speakers, panel discussions,
            workshops, and networking opportunities.
          </motion.p>
          <motion.p 
            className="text-[#757575]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Key themes included digital literacy, inclusive education, online
            learning, gamification, AI in education, and the future of classrooms
            in a post-pandemic world.
          </motion.p>
        </motion.section>
        
        <motion.section 
          className="space-y-4 mb-4 relative pl-6 border-l-2 border-[#FF6B00]"
          variants={itemVariants}
          whileHover={{ 
            x: 5, 
            transition: { duration: 0.3 } 
          }}
        >
          <motion.div 
            className="absolute w-4 h-4 bg-[#FF6B00] rounded-full -left-[9px] top-1"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          />
          <motion.h2 
            className="text-lg font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            FOC'25: Expanding Horizons
          </motion.h2>
          <motion.p 
            className="text-[#757575]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Building on the success of our inaugural event, FOC'25 aims to expand
            our reach and impact. This year's theme, "CONNECT," emphasizes our
            commitment to bridging gaps and creating a more inclusive educational
            ecosystem through technology.
          </motion.p>
          <motion.p 
            className="text-[#757575]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            We're excited to welcome an even more diverse group of stakeholders,
            featuring enhanced programming, immersive experiences, and greater
            opportunities for collaboration and networking. We're committed to
            continuing our journey of transformation through innovation and
            partnership.
          </motion.p>
        </motion.section>
      </motion.div>
    </motion.div>
  );
}
