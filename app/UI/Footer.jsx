"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/festivalofchange",
    },
    {
      icon: <Twitter />,
      link: "https://www.twitter.com/festivalofchange",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/festivalofchange",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      link: "https://www.linkedin.com/festivalofchange",
    },
  ];

  const quickLinks = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/about",
      text: "About",
    },
    {
      link: "/event-details",
      text: "Event Details",
    },
    {
      link: "/sponsors",
      text: "Sponsorship",
    },
    {
      link: "/register",
      text: "Register",
    },
  ];

  const contactUs = [
    {
      icon: <MapPin />,
      text: "11 Admiralty Lake Drive, Ikoyi, Lagos, Nigeria",
    },
    {
      icon: <Phone />,
      text: "+234 800 123 4567",
    },
    {
      icon: <Mail />,
      text: "info@festivalofchange.org",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="bg-[#333333] w-full text-white py-14"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="max-w-7xl mx-4 lg:m-auto border-b border-[#374151] pb-14"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.section 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-lg font-bold"
              variants={itemVariants}
            >
              Festival Of Change
            </motion.h1>
            <motion.p 
              className="text-sm text-[#D1D5DB]"
              variants={itemVariants}
            >
              Connecting Education and Technology at All Levels
            </motion.p>
            <motion.section 
              className="flex gap-4"
              variants={containerVariants}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  href={link.link}
                  key={index}
                  className="text-white hover:text-[#FF6B00] text-sm"
                  variants={socialVariants}
                  whileHover={{ scale: 1.2, color: "#FF6B00" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.section>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-lg font-bold"
              variants={itemVariants}
            >
              Quick Links
            </motion.h1>
            <motion.section 
              className="flex flex-col gap-2"
              variants={containerVariants}
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  href={link.link}
                  key={index}
                  className="text-sm text-[#D1D5DB] hover:text-[#FF6B00]"
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#FF6B00" }}
                >
                  <motion.p className="text-sm text-[#D1D5DB]">{link.text}</motion.p>   
                </motion.a>
              ))}
            </motion.section>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-lg font-bold"
              variants={itemVariants}
            >
              Contact Us
            </motion.h1>
            <motion.section 
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              {contactUs.map((link, index) => (
                <motion.a
                  href={link.link}
                  key={index}
                  className="text-sm text-[#D1D5DB] hover:text-[#FF6B00] flex gap-2 items-center"
                  variants={itemVariants}
                  whileHover={{ x: 5, color: "#FF6B00" }}
                >
                  <motion.p 
                    className="text-sm text-[#FF6B00]"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {link.icon}
                  </motion.p>
                  <motion.p className="text-sm text-[#D1D5DB]">{link.text}</motion.p>
                </motion.a>
              ))}
            </motion.section>
          </motion.div>
          <motion.div 
            className="flex flex-col gap-4"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-lg font-bold"
              variants={itemVariants}
            >
              Subscribe
            </motion.h1>
            <motion.p 
              className="text-sm text-[#D1D5DB]"
              variants={itemVariants}
            >
              Stay updated with the latest news and announcements.
            </motion.p>
            <motion.input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-4 rounded-md bg-[#374151] placeholder:text-[#CCCCCC]"
              variants={itemVariants}
              whileFocus={{ scale: 1.02, boxShadow: "0 0 8px rgba(255,107,0,0.5)" }}
            />
            <motion.button 
              className="bg-[#FF6B00] text-white px-4 py-2 rounded-md"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#D84315" }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.section>
      </motion.div>
      <motion.p 
        className="text-sm text-[#D1D5DB] text-start mt-8 max-w-7xl mx-4 lg:m-auto"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        &copy; {new Date().getFullYear()} Festival Of Change. All rights reserved.
      </motion.p>
    </motion.div>
  );
}
