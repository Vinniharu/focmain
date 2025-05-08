"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function RegistrationHero() {
  // Fixed orb positions to prevent hydration mismatch
  const orbPositions = [
    { top: "20%", left: "10%", width: 80, height: 80 },
    { top: "60%", left: "35%", width: 120, height: 120 },
    { top: "25%", left: "75%", width: 160, height: 160 },
    { top: "55%", left: "80%", width: 200, height: 200 },
  ];

  return (
    <div className="relative py-32 min-h-[70vh] bg-gray-900 overflow-hidden">
      {/* Digital circuit background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5 bg-repeat"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-[#2E8B57] to-transparent w-full"
              style={{ top: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                width: ["0%", "100%", "0%"],
                left: ["0%", "0%", "100%"],
              }}
              transition={{
                duration: 15 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.8,
              }}
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px bg-gradient-to-b from-transparent via-[#FF6B00] to-transparent h-full"
              style={{ left: `${i * 10}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                height: ["0%", "100%", "0%"],
                top: ["0%", "0%", "100%"],
              }}
              transition={{
                duration: 15 + i * 1.5,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating orbs with fixed positions */}
      {orbPositions.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[#2E8B57]/10 to-[#FF6B00]/10 backdrop-blur-3xl"
          style={{
            width: orb.width,
            height: orb.height,
            top: orb.top,
            left: orb.left,
            zIndex: 1,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.section
        className="relative z-10 px-4 md:px-8 flex flex-col items-center justify-center max-w-7xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Tag */}
        <motion.div
          className="mb-6 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="py-1.5 px-5 rounded-full bg-white/5 backdrop-blur-md border border-[#2E8B57]/30 text-[#2E8B57] text-sm font-medium shadow-lg shadow-[#2E8B57]/5">
            Registration Now Open
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-bold text-4xl md:text-6xl leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
            delay: 0.3,
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2E8B57]">
            Register for
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#2E8B57]">
            {" FOC'25"}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Join us for the Global education technology event in Nigeria
        </motion.p>

        {/* Event information */}
        <motion.div
          className="flex flex-col gap-6 justify-center items-center mb-12 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-[#2E8B57]/20">
            <Calendar className="text-[#FF6B00] h-5 w-5" />
            <span className="text-white font-medium">June 12, 2025</span>
          </div>

          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-3 rounded-full border border-[#FF6B00]/20">
            <MapPin className="text-[#2E8B57] h-5 w-5" />
            <span className="text-white font-medium">
              Tayo Aderinokun auditorium, University of Lagos, University Road
              Lagos Mainland Alina, Yaba, Lagos
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-0.5 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full mx-auto mb-12"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 80, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </motion.section>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-20"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V59.43C59.71,59.43,141.53,69.23,321.39,56.44Z"
            fill="#111827"
            opacity="0.9"
          />
        </svg>
      </div>
    </div>
  );
}
