"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mic, 
  Users, 
  Lightbulb, 
  Film, 
  Trophy, 
  Palette, 
  Clock, 
  UserCircle 
} from "lucide-react";

export default function ProgramSection() {
  const [activeTab, setActiveTab] = useState("keynotes");
  
  const programTypes = [
    { id: "keynotes", name: "Keynote Sessions", icon: <Mic size={20} /> },
    { id: "panels", name: "Panel Discussions", icon: <Users size={20} /> },
    { id: "workshops", name: "Workshops", icon: <Lightbulb size={20} /> },
    { id: "documentary", name: "Documentary", icon: <Film size={20} /> },
    { id: "competitions", name: "Competitions", icon: <Trophy size={20} /> },
    { id: "exhibitions", name: "Exhibitions", icon: <Palette size={20} /> }
  ];
  
  const programData = {
    keynotes: [
      {
        title: "The Future of Learning in Africa",
        time: "9:00 AM - 10:00 AM",
        speaker: "Dr. Ada Okonkwo",
        role: "UNESCO Education Advisor",
        description: "An inspiring vision for how technology can transform education across Africa, addressing challenges and opportunities."
      },
      {
        title: "Innovation at Scale: EdTech for the Masses",
        time: "2:00 PM - 3:00 PM",
        speaker: "Emmanuel Adebayo",
        role: "Founder & CEO of EduTechAfrica",
        description: "How to design and implement educational technology solutions that can reach millions of learners across diverse environments."
      }
    ],
    panels: [
      {
        title: "Bridging the Digital Divide in Education",
        time: "10:30 AM - 11:30 AM",
        participants: "Panel of 4 experts",
        description: "A critical discussion on ensuring equitable access to educational technology across different socioeconomic backgrounds."
      },
      {
        title: "The Future of Assessment in a Digital World",
        time: "3:30 PM - 4:30 PM",
        participants: "Panel of 4 experts",
        description: "Exploring innovative approaches to measuring learning outcomes beyond traditional testing methods."
      }
    ],
    workshops: [
      {
        title: "Creating Interactive Learning Experiences",
        time: "11:45 AM - 1:00 PM",
        facilitator: "Kande Johnson",
        role: "Learning Experience Designer",
        description: "A practical workshop on designing engaging digital learning experiences that promote active learning and retention."
      },
      {
        title: "AI Tools for Educators",
        time: "4:45 PM - 6:00 PM",
        facilitator: "Dr. Chidi Nwachukwu",
        role: "AI Education Specialist",
        description: "Hands-on exploration of artificial intelligence tools that can enhance teaching and personalize learning."
      }
    ],
    documentary: [
      {
        title: "Dreaming of a Brighter Classroom",
        time: "1:15 PM - 1:45 PM",
        director: "Ngozi Okeke",
        description: "A powerful documentary showcasing innovative approaches to education in challenging environments across Nigeria."
      }
    ],
    competitions: [
      {
        title: "EdTech Solution Showcase",
        eligibility: "Open to all attendees",
        description: "A competition for startups and innovators to present their educational technology solutions to a panel of judges and investors."
      },
      {
        title: "Student Challenge",
        eligibility: "For student teams",
        description: "A design challenge for student teams to create innovative solutions to real educational problems in their communities."
      }
    ],
    exhibitions: [
      {
        title: "Digital Art Showcase",
        curator: "Lagos Art Collective",
        description: "An exhibition of digital art created by students and artists exploring themes of education, technology, and future learning."
      }
    ]
  };
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10
      }
    }
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
                <Clock size={14} className="mr-2" />
                <span>Full Schedule</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-[#FF6B00] to-[#2E8B57]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Event Program
            </motion.h2>
            
            <motion.div 
              className="h-1 w-20 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-gray-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our comprehensive program of keynotes, panels, workshops, and special events. 
              Join us for a day filled with learning, collaboration, and innovation.
            </motion.p>
          </div>
          
          {/* Tab navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {programTypes.map((type) => (
              <motion.button
                key={type.id}
                className={`px-4 py-2 rounded-full flex items-center text-sm md:text-base transition-all duration-300 ${
                  activeTab === type.id 
                    ? "bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E8B57]/50"
                }`}
                onClick={() => setActiveTab(type.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{type.icon}</span>
                {type.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
            >
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {programData[activeTab]?.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-[#2E8B57]/5 hover:to-[#FF6B00]/5 transition-colors duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      {item.time && (
                        <div className="flex-shrink-0 flex items-center text-[#FF6B00] mb-2 md:mb-0">
                          <Clock size={18} className="mr-2" />
                          <span className="text-sm font-medium">{item.time}</span>
                        </div>
                      )}
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        
                        {(item.speaker || item.facilitator || item.director || item.curator) && (
                          <div className="flex items-center mb-3 text-[#2E8B57]">
                            <UserCircle size={16} className="mr-2" />
                            <span className="font-medium">
                              {item.speaker || item.facilitator || item.director || item.curator}
                              {item.role && <span className="text-gray-500 font-normal"> · {item.role}</span>}
                            </span>
                          </div>
                        )}
                        
                        {item.participants && (
                          <div className="flex items-center mb-3 text-[#2E8B57]">
                            <Users size={16} className="mr-2" />
                            <span>{item.participants}</span>
                          </div>
                        )}
                        
                        {item.eligibility && (
                          <div className="flex items-center mb-3 text-[#2E8B57]">
                            <Users size={16} className="mr-2" />
                            <span>{item.eligibility}</span>
                          </div>
                        )}
                        
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          {/* <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm text-[#2E8B57] font-medium hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(46,139,87,0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Schedule
            </motion.button>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
} 