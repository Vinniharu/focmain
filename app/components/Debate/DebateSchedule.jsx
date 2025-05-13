"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, ChevronRight } from "lucide-react";

export default function DebateSchedule() {
  const schedule = [
    {
      time: "3 mins",
      title: "Opening Remarks",
      description: "Welcome address and introduction of the debate competition, judges, and participants.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "4 mins per person",
      title: "First Debate Round",
      description: "Each finalist presents their opening arguments on the topic.",
      icon: <ChevronRight className="h-5 w-5" />,
    },
    {
      time: "10 mins",
      title: "Icebreaker Activity",
      description: "A brief interactive session to engage the audience and participants.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "4 mins per person",
      title: "Second Debate Round",
      description: "Rebuttal and counter-arguments from each participant.",
      icon: <ChevronRight className="h-5 w-5" />,
    },
    {
      time: "3 mins",
      title: "Judges Deliberation",
      description: "Panel of judges confer to determine the winners based on presentation, argument quality, and delivery.",
      icon: <Clock className="h-5 w-5" />,
    },
    {
      time: "3 mins",
      title: "Award Ceremony & Closing",
      description: "Announcement of winners, presentation of prizes, and closing remarks.",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

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
                <Calendar size={14} className="mr-2" />
                <span>Event Schedule</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Competition Timeline
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
              The debate competition will last approximately 30 minutes, packed with engaging intellectual discourse and thoughtful argumentation.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2E8B57] to-[#FF6B00] transform -translate-x-1/2 hidden md:block"></div>

            {/* Schedule items */}
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 w-full 
                                    ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className={`flex items-center text-[#FF6B00] ${index % 2 === 0 ? 'justify-end' : ''}`}>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative md:w-4 md:h-4 hidden md:flex">
                    <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"></div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2"></div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <a
                href="mailto:info@festivalofchange.org"
                className="inline-flex items-center text-[#2E8B57] hover:text-[#FF6B00] transition-colors font-medium"
              >
                <span>Have questions about the schedule?</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
