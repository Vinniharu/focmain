"use client";

import { motion } from "framer-motion";

export default function Sponsors() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="max-w-7xl mx-4 lg:mx-auto my-14 flex flex-col items-center justify-center gap-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.h1 
        className="text-3xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Sponsors
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-center text-[#757575] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        FOC'25 is made possible thanks to our generous sponsors who share our
        vision for the future of education
      </motion.p>
      <motion.div 
        className="w-full space-y-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-bold text-center"
          variants={itemVariants}
        >
          Diamond Sponsors
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center justify-start"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full space-y-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-bold text-center"
          variants={itemVariants}
        >
          Platinum Sponsors
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center justify-start"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full space-y-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-bold text-center"
          variants={itemVariants}
        >
          Gold Sponsors
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center justify-start"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[16rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[16rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[16rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full space-y-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-bold text-center"
          variants={itemVariants}
        >
          Silver Sponsors
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full items-center justify-start"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[12rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[12rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[12rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[12rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full space-y-6 mb-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl font-bold text-center"
          variants={itemVariants}
        >
          Bronze Sponsors
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center justify-start"
          variants={containerVariants}
        >
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
          <motion.div 
            className="w-full bg-[#F3F4F6] rounded-lg h-[24rem] flex items-center justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <p className="text-center text-[#9CA3AF] text-sm">Sponsor Logo</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.a 
        href="/sponsorship"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.button 
          className="bg-[#FF6B00] hover:bg-[#FF6B00]/80 text-white px-6 py-3 rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Sponsors
        </motion.button>
      </motion.a>
    </motion.div>
  );
}
