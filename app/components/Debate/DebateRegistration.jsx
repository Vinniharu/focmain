"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, AlertCircle, CheckCircle2 } from "lucide-react";

export default function DebateRegistration() {
  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" 
          style={{
            background: "radial-gradient(circle, rgba(46,139,87,0.2) 0%, rgba(46,139,87,0.1) 40%, transparent 70%)"
          }}
        />
        
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" 
          style={{
            background: "radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(255,107,0,0.1) 40%, transparent 70%)"
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="px-4 py-1 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 text-[#2E8B57] text-sm font-medium inline-flex items-center">
                <Calendar size={14} className="mr-2" />
                <span>Registration Plan</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              How to Register
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <motion.div 
              className="col-span-3 p-8 rounded-2xl bg-white shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Application Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#2E8B57]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#2E8B57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Prepare Your Essay</h4>
                    <p className="text-gray-600">Write your essay on the topic "AI in Classrooms: Enhancing Learning or Undermining Educators?" Ensure it has at least 600 words.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FF6B00]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Submit Your Application</h4>
                    <p className="text-gray-600">Send your essay to <a href="mailto:info@festivalofchange.org" className="text-[#2E8B57] hover:underline">info@festivalofchange.org</a> with the subject line "FOC Debate Competition Application".</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2E8B57]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-[#2E8B57]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Meet the Deadline</h4>
                    <p className="text-gray-600">All applications must be submitted by May 15, 2025.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FF6B00]/10 rounded-full p-2 mr-4 flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Selection Announcement</h4>
                    <p className="text-gray-600">The 10 finalists will be notified via email before the Festival of Change event.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-span-2 p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-[#FF6B00]" />
                Important Notes
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#2E8B57]" />
                  </div>
                  <p>Only senior secondary school students are eligible to apply</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#2E8B57]" />
                  </div>
                  <p>Essays must be original and not plagiarized</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#2E8B57]" />
                  </div>
                  <p>The use of AI for essay generation is not allowed</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#2E8B57]" />
                  </div>
                  <p>Include your full name, school, class, and contact information</p>
                </li>
                <li className="flex items-start">
                  <div className="rounded-full bg-white/10 p-1 mr-3 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-[#2E8B57]" />
                  </div>
                  <p>Late submissions will not be considered</p>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-semibold mb-2">Need Help?</h4>
                <p className="text-sm text-gray-300">
                  If you have any questions about the application process, please contact us at <a href="mailto:info@festivalofchange.org" className="text-[#FF6B00] hover:underline">info@festivalofchange.org</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
