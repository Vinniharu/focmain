"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function DebateJudges() {
  const judges = [
    {
      name: "Sunday Daniel",
      position: "Head of Judges",
      bio: "An experienced educator and debate coach with expertise in critical thinking and communication skills development.",
      imageSrc: "/judges/placeholder.jpg",
    },
    {
      name: "Omolola Lipede",
      position: "Judge",
      bio: "A renowned expert in educational technology and innovation with a passion for fostering young talent.",
      imageSrc: "/judges/placeholder.jpg",
    },
    {
      name: "Oluwapelumi Oresanya",
      position: "Judge",
      bio: "A distinguished professional with extensive experience in youth development and educational advancement programs.",
      imageSrc: "/judges/placeholder.jpg",
    },
  ];

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
                <Users size={14} className="mr-2" />
                <span>Competition Judges</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Distinguished Judges
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our panel of expert judges brings decades of experience in education, public speaking, and innovation to evaluate and guide our young debaters.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {judges.map((judge, index) => (
              <motion.div
                key={judge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]">
                    {judge.name.charAt(0)}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-1 text-gray-800">{judge.name}</h3>
                
                <p className="text-[#2E8B57] font-medium mb-4">{judge.position}</p>
                
                <p className="text-gray-600 mb-4">{judge.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
