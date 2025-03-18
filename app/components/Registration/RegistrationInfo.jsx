"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Clock, MapPin, Check } from "lucide-react";

export default function RegistrationInfo() {
  const eventDetails = [
    {
      icon: <Calendar className="w-5 h-5 text-[#FF6B00]" />,
      title: "June 12, 2025",
      description: "Mark your calendar",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#2E8B57]" />,
      title: "9:00 AM - 5:00 PM",
      description: "Full day of sessions",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#FF6B00]" />,
      title: "Unilag",
      description: "Lagos State",
    },
    {
      icon: <Users className="w-5 h-5 text-[#2E8B57]" />,
      title: "500+ Attendees",
      description: "Connect with leaders",
    },
  ];

  const includedItems = [
    "Full access to all conference sessions",
    "Exhibition area access",
    "Networking opportunities",
    "Lunch and refreshments",
    "Conference materials",
    "Certificate of participation",
  ];

  return (
    <motion.div 
      className="max-w-5xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2E8B57]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Event Information
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
            
            <motion.p 
              className="text-gray-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Join us for the Festival of Change 2025, Nigeria's premier education and technology 
              event. Connect with industry leaders, innovators, and change-makers in education.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="mt-1 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{detail.title}</h3>
                  <p className="text-gray-400 text-sm">{detail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 p-6 rounded-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Check className="text-[#2E8B57] mt-0.5 shrink-0 w-5 h-5" />
                  <span className="text-gray-300">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:pl-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="sticky top-28 space-y-8">
            <div className="space-y-4">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B00]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Free Admission
              </motion.h2>
              
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-[#FF6B00] to-[#2E8B57] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              />
            </div>
            
            <div className="space-y-6">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {/* Card glowing border effect */}
                <motion.div 
                  className="absolute -inset-0.5 bg-gradient-to-r from-[#2E8B57]/50 to-[#FF6B00]/50 rounded-xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-700 group-hover:duration-500"
                />
                
                <div className="relative bg-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-xl p-6 overflow-hidden">
                  <div className="absolute top-0 right-0">
                    <div className="w-40 h-40 bg-[#2E8B57]/20 rounded-full blur-3xl"></div>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-1">Free Event</h3>
                        <p className="text-lg text-gray-300">Register now to secure your spot</p>
                      </div>
                      <div className="bg-[#2E8B57]/20 px-3 py-1 rounded-full text-sm font-medium text-[#2E8B57]">
                        No Cost
                      </div>
                    </div>
                    
                    <p className="text-gray-300 my-4">
                      The Festival of Change 2025 is completely free for all attendees. We believe in making education and innovation accessible to everyone.
                    </p>
                    
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center gap-2">
                        <Check className="text-[#2E8B57] w-5 h-5" />
                        <span className="text-gray-300">No registration fee</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-[#2E8B57] w-5 h-5" />
                        <span className="text-gray-300">Complimentary refreshments</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-[#2E8B57] w-5 h-5" />
                        <span className="text-gray-300">Free access to all sessions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="text-[#2E8B57] w-5 h-5" />
                        <span className="text-gray-300">Networking opportunities included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-r from-[#FF6B00]/20 to-[#2E8B57]/20 p-6 rounded-xl border border-white/10 backdrop-blur-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">Limited Capacity</h3>
                <p className="text-gray-300">
                  While the event is free, space is limited. Register early to secure your spot at this premier education and technology event.
                </p>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}