"use client";

import { motion } from "framer-motion";

export default function OurMission() {
  const mission = [
    {
      title: "Inspire Innovation",
      description:
        "Showcasing cutting-edge technologies and approaches that are reshaping education.",
    },
    {
      title: "Connect Communities",
      description:
        "Building bridges between educators, technologists, and policymakers.",
    },
    {
      title: "Share Knowledge",
      description:
        "Facilitating the exchange of ideas, research, and best practices.",
    },
    {
      title: "Drive Impact",
      description:
        "Creating meaningful change in education at all levels.",
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
        Our Mission
      </motion.h1>
      <motion.p 
        className="text-[#757575]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The Festival of Change is dedicated to transforming education through
        technology and innovation. We bring together educators, technologists,
        policymakers, and innovators to explore the intersection of education
        and technology.
      </motion.p>
      <motion.p 
        className="text-[#757575]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Our mission is to foster collaboration, share best practices, and
        inspire transformative change in education by leveraging the digital age
        technologies to enhance learning at all levels.
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {mission.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-2 bg-[#F9FAFB] p-6 rounded-lg shadow-md"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            //   backgroundColor: "rgba(46, 139, 87, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src="/check.png" 
              alt="check" 
              className="w-6 h-6" 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              whileHover={{ rotate: 10, scale: 1.1 }}
            />
            <section className="space-y-2">
              <motion.h2 
                className="font-bold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-[#757575]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </section>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
