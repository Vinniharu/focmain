"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Speakers() {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      image: "/profile.jpg",
      description: "Director of EdTech Innovation",
    },
    {
      name: "Michael Chen",
      image: "/profile.jpg",
      description: "CEO, EduTech Global",
    },
    {
      name: "Dr. Amina Ndongo",
      image: "/profile.jpg",
      description: "Director, African Education Initiative",
    },
    {
      name: "Prof. David Wilson",
      image: "/profile.jpg",
      description: "Head of Computer Science, Lagos Tech University",
    },
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
    <div className="bg-[#F9FAFB] w-full h-full">
      <motion.div 
        className="max-w-7xl mx-4 lg:mx-auto py-14 flex flex-col items-center justify-center gap-8"
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
          Featured Speakers
        </motion.h1>
        <motion.p 
          className="max-w-2xl text-center text-[#757575] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Learn from industry leaders and innovators who are shaping the future
          of education technology
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {speakers.map((speaker) => (
            <motion.div 
              key={speaker.name} 
              className="bg-white rounded-lg shadow-md"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 },
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
              }}
            >
              <motion.section
                style={{ backgroundImage: `url(${speaker.image})` }}
                className="w-full h-48 bg-cover rounded-t-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.section>
              <section className="p-4 text-center flex items-center justify-between flex-col">
                <motion.h3 
                  className="font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {speaker.name}
                </motion.h3>
                <motion.p 
                  className="text-sm text-[#757575]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {speaker.description}
                </motion.p>
              </section>
            </motion.div>
          ))}
        </motion.div>

        <motion.a 
          href="/speakers" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button 
            className="bg-transparent border border-[#FF6B00] text-[#FF6B00] px-6 py-2 rounded-md text-center m-auto block"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,107,0,0.05)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Speakers
          </motion.button>
        </motion.a>
      </motion.div>
    </div>
  );
}
