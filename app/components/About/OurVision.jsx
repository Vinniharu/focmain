"use client";

import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <div className="bg-[#F9FAFB]">
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
          Our Vision
        </motion.h1>
        <motion.p 
          className="text-[#757575]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We envision a future where education is accessible, engaging, and
          effective for all learners. A future where technology enhances human
          connections rather than replacing them.
        </motion.p>
        <motion.p 
          className="text-[#757575]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The Festival of Change aims to be a catalyst for innovation,
          democratizing knowledge, and building a community of forward-thinking
          educators who are shaping the future of learning.
        </motion.p>
        <motion.div 
          className="p-8 bg-white rounded-md space-y-4 border-l-4 border-[#FF6B00]"
          initial={{ opacity: 0, x: -50, borderLeftWidth: 0 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            borderLeftWidth: 4,
            transition: { 
              opacity: { duration: 0.5, delay: 0.4 },
              x: { duration: 0.6, delay: 0.4 },
              borderLeftWidth: { duration: 0.4, delay: 0.8 }
            }
          }}
          viewport={{ once: true }}
          whileHover={{ 
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          <motion.p 
            className="text-lg text-[#333333]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            "Education is the most powerful weapon which you can use to change
            the world. By connecting education with technology, we multiply that
            power exponentially."
          </motion.p>
          <motion.p 
            className="text-left text-black font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            — Dr. Adeola Adeyemi, Festival Director
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
