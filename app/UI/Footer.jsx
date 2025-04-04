"use client";

import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      link: "https://www.facebook.com/festivalofchange",
    },
    {
      icon: <Twitter size={20} />,
      link: "https://www.twitter.com/festivalofchange",
    },
    {
      icon: <Instagram size={20} />,
      link: "https://www.instagram.com/festivalofchange",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
      icon: <MapPin size={18} />,
      text: "11, Ademola Saka Close, Peace estate, Ajao Estate, Lagos, Nigeria",
    },
    {
      icon: <Phone size={18} />,
      text: "+234 808 525 5769",
    },
    {
      icon: <Phone size={18} />,
      text: "+234 701 887 8343",
    },
    {
      icon: <Mail size={18} />,
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
      transition: { 
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.5 
      }
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
      className="relative bg-gradient-to-b from-gray-900 to-black w-full text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#2E8B57]/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#FF6B00]/10 blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      {/* Footer content */}
      <div className="relative z-10 pt-20 pb-10">
        <motion.div 
          className="max-w-7xl mx-auto px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Top section with logo and description */}
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-white to-[#FF6B00] mb-4"
              variants={itemVariants}
            >
              Festival Of Change
            </motion.h1>
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full mb-4"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p 
              className="text-white/70 max-w-xl mx-auto text-base"
              variants={itemVariants}
            >
              Pioneering the future of education through technological innovation and collaborative partnerships across all levels of learning.
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            variants={containerVariants}
          >
            {/* Column 1: About */}
            <motion.div 
              className="flex flex-col"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xl font-semibold mb-5 relative inline-block"
                variants={itemVariants}
              >
                About Us
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"></div>
              </motion.h2>
              <motion.p 
                className="text-white/60 text-sm leading-relaxed mb-6"
                variants={itemVariants}
              >
                Connecting Education and Technology at All Levels. The festival brings together educators, technologists, and industry leaders to drive innovation in education.
              </motion.p>
              <motion.div 
                className="flex gap-4 mt-2"
                variants={containerVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    href={link.link}
                    key={index}
                    className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 hover:border-white/30 transition-all duration-300"
                    variants={socialVariants}
                    whileHover={{ 
                      scale: 1.1, 
                      color: "#FF6B00",
                      boxShadow: "0 0 20px rgba(255, 107, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Column 2: Quick Links */}
            <motion.div 
              className="flex flex-col"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xl font-semibold mb-5 relative inline-block"
                variants={itemVariants}
              >
                Quick Links
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"></div>
              </motion.h2>
              <motion.ul
                className="space-y-3"
                variants={containerVariants}
              >
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                  >
                    <motion.a
                      href={link.link}
                      className="text-white/60 hover:text-white flex items-center group transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRight size={16} className="mr-2 text-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Column 3: Contact */}
            <motion.div 
              className="flex flex-col"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xl font-semibold mb-5 relative inline-block"
                variants={itemVariants}
              >
                Contact Us
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"></div>
              </motion.h2>
              <motion.ul
                className="space-y-4"
                variants={containerVariants}
              >
                {contactUs.map((contact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start group"
                    variants={itemVariants}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-3 group-hover:bg-gradient-to-r from-[#2E8B57]/30 to-[#FF6B00]/30 group-hover:border-white/30 transition-all duration-300">
                      <motion.span
                        className="text-[#FF6B00] w-8 h-8 flex items-center justify-center"
                        whileHover={{ rotate: 15, scale: 1.1 }}
                      >
                        {contact.icon}
                      </motion.span>
                    </div>
                    <span className="text-white/60 text-sm">{contact.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            {/* Column 4: Newsletter */}
            <motion.div 
              className="flex flex-col"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xl font-semibold mb-5 relative inline-block"
                variants={itemVariants}
              >
                Newsletter
                <div className="absolute -bottom-2 left-0 h-0.5 w-12 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"></div>
              </motion.h2>
              <motion.p 
                className="text-white/60 text-sm mb-5"
                variants={itemVariants}
              >
                Subscribe to receive updates about upcoming events, speakers, and educational insights.
              </motion.p>
              
              <motion.div
                className="relative"
                variants={itemVariants}
              >
                <motion.input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-full py-3 px-5 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B00]/50 focus:ring-1 focus:ring-[#FF6B00]/50 transition-all duration-300"
                  whileFocus={{ scale: 1.01 }}
                />
                <motion.button
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full w-10 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight size={16} />
                </motion.button>
              </motion.div>
              
              <motion.p 
                className="text-white/40 text-xs mt-3"
                variants={itemVariants}
              >
                We respect your privacy. Unsubscribe at any time.
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Divider */}
          <motion.div 
            className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          {/* Bottom section */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            variants={containerVariants}
          >
            <motion.p 
              className="text-white/40 text-sm"
              variants={itemVariants}
            >
              &copy; {new Date().getFullYear()} Festival Of Change. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex gap-6 text-sm text-white/40"
              variants={itemVariants}
            >
              <motion.a 
                href="/privacy" 
                className="hover:text-white transition-colors"
                whileHover={{ color: "#FF6B00" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms" 
                className="hover:text-white transition-colors"
                whileHover={{ color: "#FF6B00" }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="/cookie-policy" 
                className="hover:text-white transition-colors"
                whileHover={{ color: "#FF6B00" }}
              >
                Cookie Policy
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
