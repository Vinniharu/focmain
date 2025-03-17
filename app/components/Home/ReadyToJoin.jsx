"use client";

import { motion } from "framer-motion";

export default function ReadyToJoin() {
  return (
    <div className="bg-gradient-to-r from-[#FF6B00] to-[#D84315] w-full h-full">
      <motion.div 
        className="max-w-7xl mx-4 lg:mx-auto py-14 flex flex-col items-center justify-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1 
          className="text-3xl font-bold text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Join the Festival
        </motion.h1>
        <motion.p 
          className="max-w-2xl text-center text-white mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be part of this transformative gathering where educators, innovators,
          and policymakers come together to shape the future of education
          through technology.
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.a 
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              className="bg-transparent border border-white hover:bg-[#FF6B00]/80 text-white px-6 py-3 rounded-md"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              Register
            </motion.button>
          </motion.a>
          <motion.a 
            href="/register"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              className="bg-transparent border border-white hover:bg-[#FF6B00]/80 text-white px-6 py-3 rounded-md"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              Become a Sponsor
            </motion.button>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
