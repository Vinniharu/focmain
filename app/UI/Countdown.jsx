"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const eventDate = new Date("2025-06-12T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      // Get current date and time
      const now = new Date().getTime();

      // Find the distance between now and the event date
      const distance = eventDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the count down is over, clear interval
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [eventDate]);

  // Add leading zero
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };


  return (
    <motion.div 
      className="flex flex-wrap justify-start gap-4 md:gap-8 text-black"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex flex-col items-center"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl md:text-4xl font-bold"
            key={timeLeft.days}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatTime(timeLeft.days)}
          </motion.span>
        </motion.div>
        <motion.p className="text-sm md:text-base mt-2 text-white">Days</motion.p>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl md:text-4xl font-bold"
            key={timeLeft.hours}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatTime(timeLeft.hours)}
          </motion.span>
        </motion.div>
        <motion.p className="text-sm md:text-base mt-2 text-white">Hours</motion.p>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl md:text-4xl font-bold"
            key={timeLeft.minutes}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatTime(timeLeft.minutes)}
          </motion.span>
        </motion.div>
        <motion.p className="text-sm md:text-base mt-2 text-white">Minutes</motion.p>
      </motion.div>

      <motion.div 
        className="flex flex-col items-center"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="text-2xl md:text-4xl font-bold"
            key={timeLeft.seconds}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatTime(timeLeft.seconds)}
          </motion.span>
        </motion.div>
        <motion.p className="text-sm md:text-base mt-2 text-white">Seconds</motion.p>
      </motion.div>
    </motion.div>
  );
}
