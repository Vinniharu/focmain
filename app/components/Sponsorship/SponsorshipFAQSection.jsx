"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle } from "lucide-react";

export default function SponsorshipFAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "How many attendees are expected at FOC'25?",
      answer: "Based on previous years and current registration trends, we expect 2,500-3,000 attendees including educators, technology leaders, policymakers, students, and industry professionals from over 50 countries."
    },
    {
      question: "What is the deadline to become a sponsor?",
      answer: "For full benefits, including print materials, sponsors should commit by April 30, 2025. For digital-only benefits, we can accommodate sponsors until June 15, 2025, subject to availability."
    },
    {
      question: "Can sponsorship packages be customized?",
      answer: "Yes, we're happy to tailor sponsorship packages to meet your specific marketing objectives and budget. Please contact our sponsorship team to discuss custom options that align with your goals."
    },
    {
      question: "When can sponsors set up their exhibition booths?",
      answer: "Booth setup is available from 1:00 PM to 8:00 PM on July 14, 2025, and from 7:00 AM to 9:00 AM on July 15, 2025. All booths must be ready before the exhibition hall opens at 10:00 AM on July 15."
    },
    {
      question: "Will sponsors receive attendee information?",
      answer: "Sponsors at Diamond, Platinum, and Gold levels receive attendee data (with consent) according to data protection regulations. This includes name, organization, job title, and email for attendees who opt to share their information."
    },
    {
      question: "What marketing materials will sponsors need to provide?",
      answer: "Sponsors should submit their logo (vector format), company description (50-200 words), website URL, and social media handles. Diamond and Platinum sponsors will need additional materials for advertisements and promotional content."
    },
    {
      question: "How are speaking opportunities allocated?",
      answer: "Speaking slots are assigned based on sponsorship level. Diamond sponsors receive keynote opportunities, while Platinum and Gold sponsors are offered panel or workshop sessions. Content must be educational rather than promotional and requires approval from the program committee."
    },
    {
      question: "What technical support is available for sponsors?",
      answer: "All sponsors have access to our technical support team before and during the event. We provide standard power connections, WiFi, and basic AV equipment. Special requirements can be accommodated with advance notice, potentially at additional cost."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 opacity-[0.07]"
          style={{
            background: "radial-gradient(circle at top right, rgba(46,139,87,0.5), transparent 70%)"
          }}
        />
        
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.07]"
          style={{
            background: "radial-gradient(circle at bottom left, rgba(255,107,0,0.5), transparent 70%)"
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
            d="M-100,100 C100,150 300,50 500,100 S700,150 900,100 S1100,50 1300,100" 
            stroke="#2E8B57" 
            strokeWidth="2" 
            strokeDasharray="8,12" 
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="h-1 w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Find answers to common questions about sponsoring the Festival of Change.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="mb-4"
              variants={itemVariants}
            >
              <div 
                className={`flex justify-between items-center p-6 rounded-t-xl cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 border-l-4 border-[#2E8B57]' : 'bg-gray-900/30 hover:bg-gray-900/50'}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                  <HelpCircle className={`w-5 h-5 mr-3 ${activeIndex === index ? 'text-[#2E8B57]' : 'text-gray-400'}`} />
                  <h3 className={`font-medium text-lg ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                    {faq.question}
                  </h3>
                </div>
                <div className={`p-2 rounded-full transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    className="p-6 bg-gray-900/20 rounded-b-xl border-l-4 border-[#2E8B57]"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-gray-300">
            Have more questions? Contact our sponsorship team at{' '}
            <a href="mailto:info@festivalofchange.org" className="text-[#2E8B57] hover:text-[#FF6B00] transition-colors">
              info@festivalofchange.org
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
} 