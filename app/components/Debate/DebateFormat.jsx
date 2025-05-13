"use client";

import { motion } from "framer-motion";
import { FileText, AlertTriangle, Users, MessageSquare } from "lucide-react";

export default function DebateFormat() {
  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
                <MessageSquare size={14} className="mr-2" />
                <span>Format & Topics</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Competition Format
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Eligibility & Application Process</h3>
              
              <ul className="space-y-5">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Eligible Participants:</span> Senior secondary school students from all schools are welcome to apply.
                  </p>
                </li>
                <li className="flex items-start">
                  <FileText className="h-6 w-6 text-[#FF6B00] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Application Format:</span> Submit a written essay of not less than 600 words on the topic: "AI in Classrooms: Enhancing Learning or Undermining Educators?"
                  </p>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-800">Important Note:</span> The use of AI for essay generation is strictly prohibited.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Topics</h3>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#2E8B57]/5 to-[#FF6B00]/5 border border-[#2E8B57]/10">
                  <h4 className="font-semibold text-gray-800 mb-2">Essay Topic</h4>
                  <p className="text-gray-700 text-lg">"AI in Classrooms: Enhancing Learning or Undermining Educators?"</p>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-[#FF6B00]/5 to-[#2E8B57]/5 border border-[#FF6B00]/10">
                  <h4 className="font-semibold text-gray-800 mb-2">Debate Topic</h4>
                  <p className="text-gray-700 text-lg">"Considering the key ethics of AI, is Artificial Intelligence ethical in Africa?"</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Selection Process</h3>
              
              <p className="text-gray-600 mb-6">
                From all submitted applications, 10 of the best essays will be selected. These finalists will be invited to participate in the live debate competition at the Festival of Change event.
              </p>
              
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">10</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
