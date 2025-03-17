"use client";

import { Lightbulb, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const aboutData = [
    {
      title: "Keynote Sessions",
      description:
        "Inspiring talks from leading experts in education and technology",
      icon: <MessageSquare />,
    },
    {
      title: "Panel Discussions",
      description:
        "Thought-provoking conversations about the future of education technology",
      icon: <User />,
    },
    {
      title: "Innovation Showcase",
      description:
        "Experience cutting-edge educational technologies and solutions",
      icon: <Lightbulb />,
    },
  ];

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
        About the Festival
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-center text-[#757575] mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The Festival of Change is a premier event that brings together
        educators, technologists, policymakers, and innovators to explore the
        intersection of education and technology.
      </motion.p>
      <motion.section 
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {aboutData.map((item, index) => (
          <motion.div 
            key={index}
            className="border-t-2 border-[#FF6B00] shadow-md w-full rounded-md p-4 space-y-3"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="text-[#FF6B00] rounded-full">{item.icon}</div>
            <h2 className="text-base font-bold text-black">{item.title}</h2>
            <p className="text-[#757575] text-sm">{item.description}</p>
          </motion.div>
        ))}
      </motion.section>
      <motion.button 
        className="bg-[#2E8B57] hover:bg-[#2E8B57]/80 text-white px-6 py-3 rounded-md"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More About FOC'25
      </motion.button>
    </motion.div>
  );
}
