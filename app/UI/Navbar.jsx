"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Handle click outside to close the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Event Details",
      href: "/event-details",
    },
    {
      label: "Sponsorship",
      href: "/sponsorship",
    },
  ];

  return (
    <motion.div 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-900/90 backdrop-blur-lg border-b border-gray-800/30 shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    >
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="text-2xl font-bold relative group">
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.h1 
              className="relative bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] font-bold"
              whileHover={{ scale: 1.05 }}
            >
              FOC<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#2E8B57]">'25</span>
            </motion.h1>
          </Link>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="relative md:hidden" ref={menuRef}>
          <motion.button 
            className="flex items-center z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-8 h-8 flex justify-center items-center">
              <motion.span 
                className="absolute block h-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-300"
                style={{ top: "calc(50% - 4px)" }}
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0, 
                  y: isMenuOpen ? 2 : 0, 
                  width: isMenuOpen ? 20 : 20 
                }}
              />
              <motion.span 
                className="absolute block h-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-300"
                animate={{ 
                  opacity: isMenuOpen ? 0 : 1,
                  width: isMenuOpen ? 0 : 20
                }}
              />
              <motion.span 
                className="absolute block h-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full transition-all duration-300"
                style={{ bottom: "calc(50% - 4px)" }}
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0, 
                  y: isMenuOpen ? -2 : 0, 
                  width: isMenuOpen ? 20 : 20 
                }}
              />
            </div>
          </motion.button>
          
          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-60 bg-gray-900/95 backdrop-blur-lg rounded-lg shadow-xl border border-gray-800/50 overflow-hidden z-50"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-4">
                  <nav className="flex flex-col space-y-3">
                    {links.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 * index }}
                        className="relative group"
                      >
                        <Link 
                          href={link.href} 
                          className={`text-white font-medium block py-2 px-3 rounded-md transition-colors duration-200 ${
                            pathname === link.href ? 'bg-gray-800 text-[#FF6B00]' : 'hover:bg-gray-800/70'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                        {pathname === link.href && (
                          <motion.div
                            className="h-0.5 w-1/2 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mt-0.5 mx-auto"
                            layoutId="mobileActiveItem"
                          />
                        )}
                      </motion.div>
                    ))}
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.25 }}
                      className="pt-2 mt-2 border-t border-gray-800"
                    >
                      <Link 
                        href="/register" 
                        className="flex items-center justify-center w-full py-2.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </motion.div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <motion.section 
            className="flex gap-8 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <Link href={link.href} className="relative font-medium text-white transition-colors">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="relative"
                  >
                    {link.label}
                    <motion.span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] ${
                        pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                      } transition-all duration-300`}
                    />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="relative group"
            >
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full blur opacity-0 group-hover:opacity-70 transition-all duration-500"
              />
              <Link 
                href="/register" 
                className="relative flex items-center justify-center text-white bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] px-6 py-2.5 rounded-full font-medium shadow-md"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="z-10"
                >
                  Register
                </motion.span>
                <div className="absolute inset-0 rounded-full bg-white/10" />
              </Link>
            </motion.div>
          </motion.section>
        </nav>
      </div>
    </motion.div>
  );
}

