"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="bg-gradient-to-r from-[#2E8B57] to-[#1B5E20]">
      <motion.section 
        className="flex flex-col py-24 gap-4 max-w-7xl mx-4 lg:m-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="font-bold text-4xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About the Festival
        </motion.h1>
        <motion.p 
          className="text-white max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Learn more about the Festival of Change, our mission, and our vision
          for the future of education.
        </motion.p>
      </motion.section>
    </div>
  );
}
