"use client";

import { Calendar } from "lucide-react";
import Countdown from "../../UI/Countdown";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <div className="bg-[url('/homebg.jpg')] bg-cover bg-center h-[80vh]">
      <div className="bg-[#2E8B5747] h-full">
        <div className="max-w-7xl mx-4 lg:mx-auto text-white flex flex-col gap-6 items-start justify-center h-full">
            <motion.h1 
              className="md:text-5xl text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Festival of Change 2025
            </motion.h1>
            <motion.h2 
              className="md:text-xl text-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              CONNECT: Connecting Education and Technology at All Levels
            </motion.h2>
            <motion.section 
              className="flex items-center justify-start gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <Calendar/>
                <p>June 12, 2025 • Lagos, Nigeria</p>
            </motion.section>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Countdown/>
            </motion.div>
            <motion.section 
              className="flex items-center justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
                <motion.a 
                  href="/register" 
                  className="bg-[#FF6B00] text-white px-6 py-3 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                </motion.a>
                <motion.a 
                  href="/schedule" 
                  className="bg-white border border-[#FF6B00] text-[#FF6B00] px-6 py-3 rounded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Program
                </motion.a>
            </motion.section>
        </div>
      </div>
    </div>
  );
}
