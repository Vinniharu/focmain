"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

export default function SponsorshipNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { title: "Overview", id: "hero" },
    { title: "Why Sponsor", id: "why-sponsor" },
    { title: "Packages", id: "packages" },
    { title: "Special Opportunities", id: "special" },
    { title: "FAQ", id: "faq" },
    { title: "Contact", id: "cta" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Track active section
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Section Nav - Desktop */}
      <div className={`fixed top-20 w-full z-40 transition-all duration-300 py-2 hidden md:block ${
        scrolled ? "bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.title}
                {activeSection === section.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"
                    layoutId="activeSectionNav"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
          <motion.a
            href="/FOC.pdf"
            target="_blank"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 border border-[#2E8B57]/30 hover:border-[#2E8B57]/70 text-white text-sm font-medium transition-all duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-1.5 w-4 h-4" />
            <span>Download Deck</span>
          </motion.a>
        </div>
      </div>
      
      {/* Mobile Section Nav Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] p-3 rounded-full shadow-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
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
          className="text-white"
        >
          {isMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </>
          )}
        </svg>
      </motion.button>
      
      {/* Mobile Section Nav Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl z-40 flex items-center justify-center md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col space-y-6 items-center w-full px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  className={`py-2 px-3 rounded-lg text-center text-xl font-medium transition-colors duration-200 w-full max-w-xs ${
                    activeSection === section.id
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {section.title}
                  {activeSection === section.id && (
                    <motion.div
                      className="h-px w-1/2 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mt-1 mx-auto"
                      layoutId="mobileActiveSection"
                    />
                  )}
                </motion.button>
              ))}
              
              <motion.a
                href="/FOC.pdf"
                target="_blank"
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium flex items-center justify-center w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="mr-2 w-5 h-5" />
                <span>Download Sponsorship Deck</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 