"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar, Mail, Phone } from "lucide-react";

export default function SponsorshipCTASection() {
  return (
    <div className="relative bg-gray-950 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/5 to-[#FF6B00]/5"></div>
        
        <div className="absolute top-0 right-0 w-full h-[500px] opacity-20"
          style={{
            background: "radial-gradient(circle at top right, rgba(46,139,87,0.4), transparent 70%)"
          }}
        />
        
        <div className="absolute bottom-0 left-0 w-full h-[500px] opacity-20"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(255,107,0,0.4), transparent 70%)"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '35px 35px'
          }}>
        </div>
        
        {/* Digital circuit lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.path 
            d="M-100,200 C100,100 400,300 600,200 S900,100 1200,200 S1500,300 1800,200" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          <motion.path 
            d="M-50,400 C150,500 350,300 550,400 S750,500 950,400 S1150,300 1350,400" 
            stroke="#FF6B00" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Be Part of the Change
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join forward-thinking organizations in supporting education innovation at FOC'25. Connect with leaders, showcase your solutions, and drive positive change.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12 mb-12 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Key Event Information</h3>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Calendar className="w-6 h-6 text-[#2E8B57] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Dates</h4>
                      <p className="text-gray-300">June 12, 2025</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Clock className="w-6 h-6 text-[#FF6B00] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Sponsorship Deadline</h4>
                      <p className="text-gray-300">May 20, 2025 (for full benefits)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Mail className="w-6 h-6 text-[#2E8B57] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Contact Email</h4>
                      <p className="text-gray-300">
                        <a href="mailto:info@festivalofchange.org" className="hover:text-[#2E8B57] transition-colors">
                        info@festivalofchange.org
                        </a>
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <Phone className="w-6 h-6 text-[#FF6B00] mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Sponsorship Hotline</h4>
                      <p className="text-gray-300">+234 (800) 123 4567</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Sponsor?</h3>
                <p className="text-gray-300 mb-8">
                  Download our comprehensive sponsorship prospectus or contact our team directly to discuss how your organization can participate.
                </p>
                
                <div className="space-y-4">
                  <motion.a
                    href="/FOC.pdf"
                    target="_blank"
                    className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Download Sponsorship Deck
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:info@festivalofchange.org?subject=FOC'25%20Sponsorship%20Inquiry"
                    className="flex items-center justify-center w-full px-8 py-4 rounded-full bg-transparent border border-[#2E8B57]/30 hover:border-[#2E8B57]/70 text-white font-medium transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Contact Sponsorship Team
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Our Promise to Sponsors</h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              At FOC'25, we're committed to providing exceptional value to our sponsors. 
              We'll work closely with your team to ensure your sponsorship goals are met 
              and your participation in the Festival of Change delivers meaningful returns 
              for your organization.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 