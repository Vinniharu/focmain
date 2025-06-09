"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaClock, FaUsers, FaGraduationCap, FaSchool, FaUniversity, 
  FaMicrophone, FaTrophy, FaPlay, FaCalendarAlt, FaMapMarkerAlt,
  FaChevronDown, FaChevronUp, FaStar, FaQuoteLeft, FaLightbulb,
  FaRocket, FaHandshake, FaMedal, FaFireAlt, FaChartLine,
  FaVideo, FaComments, FaMusic, FaBullhorn, FaBookOpen, FaTimes,
  FaLinkedin, FaTwitter, FaInstagram
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Completely Redesigned Speaker Modal Component
const SpeakerModal = ({ speaker, panel, isOpen, onClose }) => {
  if (!isOpen || !speaker) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
                  <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="max-w-6xl w-full max-h-[90vh] perspective-1000"
            onClick={(e) => e.stopPropagation()}
          >
                      {/* Modern Split Layout Card */}
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden relative max-h-[90vh]">
            
            {/* Left Side - Speaker Image & Info */}
            <div className="lg:w-2/5 relative overflow-hidden bg-gradient-to-br from-orange-400 via-orange-500 to-green-500">
              {/* Animated Background Elements */}
              <div className="absolute inset-0">
                <motion.div 
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-10 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full"
                />
                <motion.div 
                  animate={{ 
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 left-10 w-24 h-24 bg-white bg-opacity-15 rounded-full"
                />
                <motion.div 
                  animate={{ 
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-5 w-16 h-16 bg-white bg-opacity-20 rounded-lg"
                />
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300 group backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaTimes className="text-white text-xl" />
                </motion.div>
              </button>

              {/* Speaker Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                {/* Large Profile Image */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl mb-6 bg-white"
                >
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-orange-500 to-green-500 flex items-center justify-center hidden">
                    <span className="text-4xl font-bold text-white">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </motion.div>

                {/* Speaker Name with Animation */}
                <motion.h2 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight"
                >
                  {speaker.name}
                </motion.h2>

                {/* Title with Animation */}
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xl text-white text-opacity-95 mb-6 drop-shadow font-medium"
                >
                  {speaker.title}
                </motion.p>

                {/* Expertise Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4, type: "spring" }}
                  className="inline-flex items-center bg-white bg-opacity-25 backdrop-blur-sm px-6 py-3 rounded-full border border-white border-opacity-30"
                >
                  <FaStar className="text-yellow-300 mr-3 text-lg" />
                  <span className="text-black font-bold text-lg">{speaker.expertise}</span>
                </motion.div>
              </div>
            </div>

                          {/* Right Side - Content */}
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col bg-gradient-to-br from-gray-50 to-white overflow-y-auto custom-modal-scroll relative" style={{ scrollBehavior: 'smooth' }}>
              
              {/* Panel Information */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 border-l-8 border-gradient-to-b from-orange-500 to-green-500 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-orange-500 to-green-500 p-4 rounded-xl mr-5 shadow-lg">
                      {panel?.icon && <panel.icon className="text-white text-2xl" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{panel?.title}</h3>
                      <p className="text-gray-600">
                        Moderated by <span className="font-bold text-orange-600">{panel?.moderator}</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-60 rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-medium">
                      <FaUsers className="inline text-green-600 mr-2" />
                      Panel Discussion • FOC'25 Festival of Change
                    </p>
                  </div>
                </div>
              </motion.div>

                              {/* Biography Section */}
                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex-1 mb-8 min-h-0"
                >
                <div className="mb-6">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-r from-orange-500 to-green-500 p-3 rounded-xl mr-4 shadow-lg"
                    >
                      <FaQuoteLeft className="text-white text-xl" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-800">
                      Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                        {speaker.name.split(' ')[0]}
                      </span>
                    </h3>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-green-100 rounded-full -translate-y-16 translate-x-16 opacity-40"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-100 to-orange-100 rounded-full translate-y-12 -translate-x-12 opacity-40"></div>
                    
                                      <div className="relative z-10">
                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Scroll Indicator for longer content */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="sticky bottom-4 left-0 right-0 flex justify-center pointer-events-none"
            >
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center"
              >
                <span className="mr-1">Scroll for more</span>
                <FaChevronDown className="text-xs" />
              </motion.div>
            </motion.div>

          </div>
        </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Live Status Component
const LiveStatusBadge = ({ isLive, eventName }) => {
  if (!isLive) return null;
  
  return (
    <div className="flex items-center space-x-3 animate-pulse mb-4">
      <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="bg-red-600 px-4 py-2 rounded-full">
        <span className="text-white font-bold text-sm uppercase tracking-wider">
          🔴 LIVE NOW • {eventName}
        </span>
      </div>
    </div>
  );
};

// Enhanced Countdown Timer
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-gray-800 bg-opacity-60 rounded-xl p-4 border border-purple-500">
          <div className="text-3xl font-bold text-purple-400">{value}</div>
          <div className="text-sm text-gray-300 uppercase tracking-wider">{unit}</div>
        </div>
      ))}
    </div>
  );
};

// Current Time Display
const getCurrentTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
};

// Check if event is currently happening (only on June 12, 2025)
const isEventLive = (startTime, endTime) => {
  const now = new Date();
  const eventDate = new Date('2025-06-12');
  
  // Check if it's the event date (June 12, 2025)
  const isEventDay = now.getFullYear() === 2025 && 
                     now.getMonth() === 5 && // June is month 5 (0-indexed)
                     now.getDate() === 12;
  
  if (!isEventDay) return false;
  
  const currentTime = now.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  // Convert times to 24-hour format for comparison
  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(/([ap]m)/i);
    let [hours, minutes] = time.split(':');
    if (hours === '12') hours = '00';
    if (modifier && modifier.toLowerCase() === 'pm') {
      hours = (parseInt(hours, 10) + 12).toString();
    }
    return `${hours.padStart(2, '0')}:${minutes}`;
  };

  const start24 = convertTo24Hour(startTime);
  const end24 = convertTo24Hour(endTime);
  
  return currentTime >= start24 && currentTime <= end24;
};

export default function EventDetailPage() {
  const [activeTab, setActiveTab] = useState('schedule');
  const [currentTime, setCurrentTime] = useState('');
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Add custom scrollbar styles once when component mounts
  useEffect(() => {
    const styleId = 'custom-scrollbar-styles';
    
    // Check if styles already exist
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .custom-modal-scroll::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-modal-scroll::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        
        .custom-modal-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f97316, #22c55e);
          border-radius: 10px;
          border: 2px solid #f1f5f9;
        }
        
        .custom-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ea580c, #16a34a);
        }
        
        .custom-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #f1f5f9;
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Modal functions
  const openSpeakerModal = (speaker, panel) => {
    setSelectedSpeaker(speaker);
    setSelectedPanel(panel);
    setIsModalOpen(true);
  };

  const closeSpeakerModal = () => {
    setSelectedSpeaker(null);
    setSelectedPanel(null);
    setIsModalOpen(false);
  };

  // Panel data
  const panelData = {
    primary: {
      title: "Primary School Panel",
      icon: FaSchool,
      color: "from-green-500 to-green-600",
      moderator: "Treasure Oladunni",
      convener: "Erioluwa Adeyinka",
      panelists: [
        {
          name: "Deborah Adelaja",
          title: "Founder, Why Education",
          expertise: "Educational Innovation",
          image: "primary/DeborahAdelaja.jpeg",
          bio: "Deborah Adelaja is a passionate education advocate and founder of Why Education, an organization dedicated to transforming learning experiences for children across Africa. With over 8 years of experience in educational innovation, she has successfully implemented numerous programs that have improved literacy rates and learning outcomes in underserved communities. Her work focuses on creating inclusive, technology-enhanced learning environments that prepare students for the future.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/deborah-adelaja",
            twitter: "https://twitter.com/deborah_adelaja"
          }
        },
        {
          name: "Sunday Daniel",
          title: "Senior Coach, Teach For Nigeria",
          expertise: "Teacher Development",
          image: "primary/SundayDaniel.jpg",
          bio: "Sunday Daniel is a Senior Coach at Teach For Nigeria with a deep commitment to developing exceptional teachers who can transform education in Nigeria. With a background in curriculum development and teacher training, he has coached over 200 teachers across various schools, helping them implement innovative teaching methodologies. His expertise lies in building capacity for sustainable educational improvement through effective teacher development programs.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/sunday-daniel"
          }
        },
        {
          name: "Fowowe Omolewa",
          title: "Asst Director, SUBEB Lagos",
          expertise: "Educational Policy",
          image: "primary/MrsFowoweOmolewaTemilola.jpg",
          bio: "Fowowe Omolewa serves as Assistant Director at the State Universal Basic Education Board (SUBEB) Lagos, where he plays a crucial role in shaping educational policies for primary education across Lagos State. With over 12 years in educational administration, he has been instrumental in implementing policies that have improved school infrastructure, teacher welfare, and student outcomes. His work focuses on ensuring equitable access to quality education for all children.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/fowowe-omolewa"
          }
        },
        {
          name: "Folashade Adebanwo",
          title: "Head-Teacher, Ensign",
          expertise: "School Management",
          image: "primary/FolashadeAdebanwo.jpg",
          bio: "Folashade Adebanwo is an experienced Head-Teacher at Ensign School with over 15 years of experience in educational leadership and school management. She has successfully transformed her school into a model institution known for academic excellence and innovative teaching practices. Her leadership philosophy centers on creating supportive learning environments where both students and teachers can thrive, implementing data-driven approaches to improve educational outcomes.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/folashade-adebanwo"
          }
        }
      ]
    },
    secondary: {
      title: "Secondary School Panel",
      icon: FaGraduationCap,
      color: "from-orange-500 to-orange-600",
      moderator: "Ebunoluwa Adeyinka",
      convener: "Erioluwa Adeyinka",
      panelists: [
        {
          name: "Olufumilayo Odeleye",
          title: "Chief Education Officer, Lagos State Ministry of Education",
          expertise: "Educational Leadership",
          image: "primary/olufumilayo.jpeg",
          bio: "Olufumilayo Odeleye is the Chief Education Officer at Lagos State Ministry of Education, bringing over 20 years of experience in educational leadership and policy development. She has been instrumental in driving major educational reforms across Lagos State, including the implementation of technology-enhanced learning programs and teacher capacity building initiatives. Her visionary leadership has contributed significantly to improving educational outcomes and infrastructure development across the state.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/olufumilayo-odeleye"
          }
        },
        {
          name: "Oluwaseun Kayode",
          title: "Founder Schoolinka",
          expertise: "EdTech Innovation",
          image: "secondary/OluwaseunKayode.jpg",
          bio: "Oluwaseun Kayode is the visionary founder of Schoolinka, a leading educational technology platform that has revolutionized learning across Africa. With a background in software engineering and education, he has built solutions that serve over 100,000 students and teachers. His innovative approach to educational technology has earned recognition from various international organizations, and he continues to pioneer new ways to make quality education accessible to all.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/oluwaseun-kayode",
            twitter: "https://twitter.com/seunkayode"
          }
        },
        {
          name: "Santos Akhilele",
          title: "Senior Associate, Human Capital Africa",
          expertise: "Human Development",
          image: "Secondary/Santos.jpeg",
          bio: "Santos Akhilele is a Senior Associate at Human Capital Africa, specializing in human development and capacity building initiatives across the continent. With extensive experience in education policy and development economics, he has worked on numerous projects aimed at improving educational systems and workforce development. His expertise in designing and implementing large-scale educational interventions has made him a sought-after consultant for governments and international organizations.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/santos-akhilele"
          }
        },
        {
          name: "Julius Ilori",
          title: "Founder, Learners Corner",
          expertise: "Educational Technology",
          image: "Secondary/Julius.jpeg",
          bio: "Julius Ilori is the innovative founder of Learners Corner, an educational platform that has transformed how students access quality educational content. With a passion for democratizing education through technology, he has developed solutions that bridge the gap between traditional learning and modern digital education. His work has impacted thousands of students across Nigeria, providing them with access to world-class educational resources and personalized learning experiences.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/julius-ilori",
            twitter: "https://twitter.com/julius_ilori"
          }
        }
      ]
    },
    tertiary: {
      title: "Tertiary Panel",
      icon: FaUniversity,
      color: "from-green-600 to-orange-500",
      moderator: "Samuel Badekale",
      convener: "Erioluwa Adeyinka",
      panelists: [
        {
          name: "Temitope Abere",
          title: "ED, Smartan House",
          expertise: "Educational Management",
          image: "Tetiary/TemitopeAbere.jpeg",
          bio: "Temitope Abere is the Executive Director of Smartan House, a leading educational management organization that specializes in developing innovative learning solutions for higher education institutions. With over 15 years of experience in educational leadership and strategic planning, she has successfully implemented transformative programs that have enhanced learning outcomes and institutional effectiveness across multiple universities in West Africa.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/temitope-abere"
          }
        },
        {
          name: "PROF. Oladipo Adebayo",
          title: "Dean, Unilag",
          expertise: "Higher Education",
          image: "Tetiary/ProfessorOladipo.jpeg",
          bio: "Professor Oladipo Adebayo is a distinguished academic leader serving as Dean at the University of Lagos (UNILAG). With over 25 years in higher education, he has contributed significantly to academic excellence, research innovation, and institutional development. His leadership has been instrumental in driving digital transformation initiatives and establishing strategic partnerships that have enhanced the university's global reputation and student outcomes.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/prof-oladipo-adebayo"
          }
        },
        {
          name: "Ilerioluwa Brown",
          title: "Director of Product, Moniepoint",
          expertise: "Product Development",
          image: "Tetiary/IleriBrown.jpg",
          bio: "Ilerioluwa Brown is the Director of Product at Moniepoint, one of Africa's leading fintech companies. With a strong background in product management and user experience design, he has been instrumental in developing innovative financial products that serve millions of users across Africa. His expertise in building scalable, user-centric products provides valuable insights into how technology can be leveraged to solve educational challenges.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/ilerioluwa-brown",
            twitter: "https://twitter.com/ilerioluwa_b"
          }
        },
        {
          name: "Dr Oluwakemi Olurinola",
          title: "Lecturer, Edtech Consultant",
          expertise: "Educational Technology",
          image: "Tetiary/oluwakemiolurinola.jpeg",
          bio: "Dr. Oluwakemi Olurinola is a distinguished lecturer and EdTech consultant with a Ph.D. in Educational Technology. She has extensive experience in designing and implementing technology-enhanced learning solutions for various educational institutions. Her research focuses on the intersection of pedagogy and technology, and she has published numerous papers on digital learning, online education, and the effective integration of technology in education across African contexts.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/dr-oluwakemi-olurinola"
          }
        }
      ]
    },
    genz: {
      title: "GenZ Panel",
      icon: FaRocket,
      color: "from-orange-600 to-green-500",
      moderator: "Prisca",
      convener: "Erioluwa Adeyinka",
      panelists: [
        {
          name: "Joshua",
          title: "Student Representative",
          expertise: "Youth Perspective",
          image: "genz/joshua.jpeg",
          bio: "Joshua is a dynamic student representative who advocates for youth voices in educational reform. His perspective represents the aspirations and challenges of today's students, making him a vital voice in discussions about the future of education.",
          socialLinks: {
            twitter: "https://twitter.com/joshua_student",
            instagram: "https://instagram.com/joshua_learns"
          }
        },
        {
          name: "Adesuwa",
          title: "Student Representative",
          expertise: "Technology & Education",
          image: "genz/adesuwa.jpeg",
          bio: "Adesuwa is a passionate student representative specializing in the intersection of technology and education. As a Product Manager, Her unique perspective on how Gen Z students prefer to learn and interact with technology makes her insights invaluable for designing future educational systems.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/adesuwa-student",
            twitter: "https://twitter.com/adesuwa_tech"
          }
        },
        {
          name: "Isreal",
          title: "Student Representative",
          expertise: "Innovation",
          image: "genz/isreal.jpeg",
          bio: "Isreal is an innovative student representative known for his creative approach to problem-solving in education. As an Computer Science Graduate, His work in organizing hackathons and innovation challenges for students has made him a recognized voice in promoting entrepreneurial thinking in education.",
          socialLinks: {
            linkedin: "https://linkedin.com/in/isreal-innovator",
            instagram: "https://instagram.com/isreal_creates"
          }
        },
        {
          name: "Femi",
          title: "Student Representative",
          expertise: "Digital Learning",
          image: "genz/femi.jpeg",
          bio: "Femi is a student representative who specializes in digital learning methodologies and online education platforms. As a digital media student, he has extensive experience with various learning technologies and platforms. His insights into how students engage with digital content and his advocacy for accessible, engaging online learning experiences make him a valuable contributor to educational discussions.",
          socialLinks: {
            twitter: "https://twitter.com/femi_digital",
            instagram: "https://instagram.com/femi_learns"
          }
        }
      ]
    }
  };

     // Program schedule
   const programSchedule = [
     {
       time: '9:00am - 9:30am',
       startTime: '9:00am',
       endTime: '9:30am',
       event: 'Registration & Welcome',
       description: 'Welcome and check-in for all participants',
       icon: FaUsers,
       type: 'registration'
     },
     {
       time: '9:30am - 10:00am',
       startTime: '9:30am',
       endTime: '10:00am',
       event: 'Opening Ceremony',
       description: 'Official opening of FOC\'25 - Festival of Change 2025',
       icon: FaPlay,
       type: 'ceremony'
     },
    {
      time: '9:35am - 9:45am',
      startTime: '9:35am',
      endTime: '9:45am',
      event: 'Welcome Address',
      description: 'Warm welcome to all participants and stakeholders',
      icon: FaHandshake,
      type: 'address'
    },
    {
      time: '9:50am - 10:10am',
      startTime: '9:50am',
      endTime: '10:10am',
      event: 'Opening Address',
      description: 'Setting the tone for the day\'s discussions',
      icon: FaMicrophone,
      type: 'keynote'
    },
    {
      time: '10:15am - 10:25am',
      startTime: '10:15am',
      endTime: '10:25am',
      event: 'Dean\'s Address',
      description: 'Insights from academic leadership',
      icon: FaUniversity,
      type: 'address'
    },
    {
      time: '10:30am - 10:40am',
      startTime: '10:30am',
      endTime: '10:40am',
      event: 'Program Overview Orientation',
      description: 'Detailed overview of the day\'s agenda',
      icon: FaBookOpen,
      type: 'orientation'
    },
    {
      time: '10:45am - 11:05am',
      startTime: '10:45am',
      endTime: '11:05am',
      event: '1st Keynote',
      description: 'Transforming Education Through Innovation',
      icon: FaLightbulb,
      type: 'keynote'
    },
    {
      time: '11:10am - 11:40am',
      startTime: '11:10am',
      endTime: '11:40am',
      event: 'Panel Session (Tertiary)',
      description: 'Higher education challenges and opportunities',
      icon: FaUniversity,
      type: 'panel',
      panelType: 'tertiary'
    },
    {
      time: '11:45am - 12:35pm',
      startTime: '11:45am',
      endTime: '12:35pm',
      event: 'Debate',
      description: 'Interactive debate on educational transformation',
      icon: FaComments,
      type: 'debate'
    },
    {
      time: '12:40pm - 1:00pm',
      startTime: '12:40pm',
      endTime: '1:00pm',
      event: '2nd Keynote',
      description: 'The Future of Learning in Africa',
      icon: FaRocket,
      type: 'keynote'
    },
    {
      time: '1:05pm - 1:35pm',
      startTime: '1:05pm',
      endTime: '1:35pm',
      event: 'Panel Session (Primary)',
      description: 'Foundation learning and early childhood education',
      icon: FaSchool,
      type: 'panel',
      panelType: 'primary'
    },
    {
      time: '1:40pm - 2:00pm',
      startTime: '1:40pm',
      endTime: '2:00pm',
      event: '3rd Keynote',
      description: 'Technology Integration in Education',
      icon: FaChartLine,
      type: 'keynote'
    },
    {
      time: '2:00pm - 3:20pm',
      startTime: '2:00pm',
      endTime: '3:20pm',
      event: 'Connect Hour: Career Fair',
      description: 'Networking and career opportunities',
      icon: FaHandshake,
      type: 'networking'
    },
    {
      time: '3:25pm - 3:35pm',
      startTime: '3:25pm',
      endTime: '3:35pm',
      event: 'Teachers Musicale',
      description: 'Musical performances by educators',
      icon: FaMusic,
      type: 'entertainment'
    },
    {
      time: '3:40pm - 4:10pm',
      startTime: '3:40pm',
      endTime: '4:10pm',
      event: 'Panel Session (Secondary)',
      description: 'Secondary education innovation and challenges',
      icon: FaGraduationCap,
      type: 'panel',
      panelType: 'secondary'
    },
    {
      time: '4:15pm - 4:45pm',
      startTime: '4:15pm',
      endTime: '4:45pm',
      event: 'Award Presentation',
      description: 'Recognition and awards ceremony',
      icon: FaTrophy,
      type: 'awards'
    },
         {
       time: '4:50pm - 5:00pm',
       startTime: '4:50pm',
       endTime: '5:00pm',
       event: 'Closing Remarks & Networking',
       description: 'Final thoughts, next steps, and networking session',
       icon: FaBullhorn,
       type: 'closing'
     }
  ];

     // Event date (FOC'25 - Festival of Change 2025)
   const eventDate = new Date('2025-06-12T09:00:00').getTime();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-900 via-orange-900 to-green-800">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                             <div className="mb-6">
                 <span className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                   FOC'25 - Festival of Change 2025
                 </span>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                 Festival of Change 2025
               </h1>
               
               <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                 Transforming African Education Through Innovation, Collaboration, and Technology
               </p>

               <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                 <div className="flex items-center text-orange-300">
                   <FaCalendarAlt className="mr-2" />
                   <span>June 12, 2025</span>
                 </div>
                 <div className="flex items-center text-orange-300">
                   <FaClock className="mr-2" />
                   <span>9:00 AM - 6:00 PM</span>
                 </div>
                 <div className="flex items-center text-orange-300">
                   <FaMapMarkerAlt className="mr-2" />
                   <span>Tayo Aderinokun Auditorium, UNILAG</span>
                 </div>
               </div>

               {/* Location Details */}
               <div className="mb-8">
                 <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 max-w-2xl mx-auto">
                   <h3 className="text-lg font-semibold text-gray-200 mb-2">📍 Venue Details</h3>
                   <p className="text-orange-300 font-medium">Tayo Aderinokun Auditorium</p>
                   <p className="text-gray-300 text-sm">University of Lagos</p>
                   <p className="text-gray-400 text-sm">University Road, Lagos Mainland Alina, Yaba, Lagos</p>
                 </div>
               </div>

              {/* Live Time Display */}
              <div className="mb-8">
                <div className="bg-gray-800 bg-opacity-50 rounded-xl p-4 max-w-md mx-auto">
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Current Time</h3>
                  <div className="text-3xl font-bold text-green-400">{currentTime}</div>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-6">Event Countdown</h3>
                <CountdownTimer targetDate={eventDate} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center space-x-2">
            {['schedule', 'panels', 'speakers'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                                 className={`px-6 py-3 rounded-lg font-medium transition-all uppercase tracking-wider ${
                   activeTab === tab
                     ? 'bg-gradient-to-r from-orange-500 to-green-500 text-white'
                     : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                 }`}
              >
                {tab === 'schedule' && <FaClock className="inline mr-2" />}
                {tab === 'panels' && <FaUsers className="inline mr-2" />}
                {tab === 'speakers' && <FaMicrophone className="inline mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <motion.div
                key="schedule"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                                     <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                     Program Schedule
                   </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Follow our comprehensive program designed to transform education in Africa
                  </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                  {programSchedule.map((item, index) => {
                    const isLive = isEventLive(item.startTime, item.endTime);
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-xl overflow-hidden transition-all duration-300 ${
                          isLive
                                                         ? 'bg-gradient-to-r from-red-800 to-pink-800 border-2 border-red-500 shadow-lg transform scale-105'
                             : 'bg-gray-800 bg-opacity-60 border border-gray-700 hover:border-orange-500'
                        }`}
                      >
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                                             <div className={`p-3 rounded-lg mr-4 ${
                                 isLive ? 'bg-red-600' : 'bg-orange-600'
                               }`}>
                                <item.icon className="text-xl text-white" />
                              </div>
                              <div>
                                <h3 className={`text-xl font-bold ${
                                  isLive ? 'text-red-100' : 'text-gray-100'
                                }`}>
                                  {item.event}
                                </h3>
                                <p className={`text-sm ${
                                  isLive ? 'text-red-200' : 'text-gray-400'
                                }`}>
                                  {item.time}
                                </p>
                              </div>
                            </div>
                            {isLive && <LiveStatusBadge isLive={true} eventName={item.event} />}
                          </div>
                          <p className={`${
                            isLive ? 'text-red-100' : 'text-gray-300'
                          }`}>
                            {item.description}
                          </p>
                          {item.panelType && (
                                                         <div className="mt-3">
                               <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs">
                                 {panelData[item.panelType]?.title}
                               </span>
                             </div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Panels Tab */}
            {activeTab === 'panels' && (
              <motion.div
                key="panels"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                                     <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                     Expert Panel Discussions
                   </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Four specialized panels bringing together education leaders, innovators, and students
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  {Object.entries(panelData).map(([key, panel], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                                             className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500 transition-all"
                    >
                      <div className={`h-32 bg-gradient-to-r ${panel.color} relative`}>
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="absolute bottom-4 left-6 right-6">
                          <div className="flex items-center">
                            <panel.icon className="text-3xl text-white mr-4" />
                            <h3 className="text-2xl font-bold text-white">{panel.title}</h3>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-6">
                          <div className="flex justify-between mb-4">
                                                         <div>
                               <h4 className="font-semibold text-gray-200">Moderator</h4>
                               <p className="text-orange-400">{panel.moderator}</p>
                             </div>
                             <div>
                               <h4 className="font-semibold text-gray-200">Convener</h4>
                               <p className="text-green-400">{panel.convener}</p>
                             </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setExpandedPanel(expandedPanel === key ? null : key)}
                          className="w-full flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <span className="font-medium">View Panelists ({panel.panelists.length})</span>
                          {expandedPanel === key ? <FaChevronUp /> : <FaChevronDown />}
                        </button>

                        <AnimatePresence>
                          {expandedPanel === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 space-y-3"
                            >
                              {panel.panelists.map((panelist, idx) => (
                                                                 <div key={idx} className="bg-gray-900 bg-opacity-50 rounded-lg p-4">
                                   <h5 className="font-semibold text-gray-100">{panelist.name}</h5>
                                   <p className="text-sm text-orange-400 mb-1">{panelist.title}</p>
                                   <span className="text-xs bg-gradient-to-r from-orange-500 to-green-500 text-white px-2 py-1 rounded-full">
                                     {panelist.expertise}
                                   </span>
                                 </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Speakers Tab */}
            {activeTab === 'speakers' && (
              <motion.div
                key="speakers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-12">
                                     <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                     Distinguished Speakers
                   </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Meet the thought leaders and innovators shaping the future of education
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {Object.values(panelData).flatMap(panel => 
                    panel.panelists.map((speaker, index) => (
                      <motion.div
                        key={`${panel.title}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                                                 className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-all group cursor-pointer"
                        onClick={() => openSpeakerModal(speaker, panel)}
                      >
                        <div className="text-center">
                                                     <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-110 transition-transform border-4 border-orange-500">
                            <img 
                              src={speaker.image} 
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextElementSibling.style.display = 'flex';
                              }}
                            />
                                                         <div className="w-full h-full bg-gradient-to-r from-orange-500 to-green-500 flex items-center justify-center hidden">
                              <span className="text-2xl font-bold text-white">
                                {speaker.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          </div>
                                                     <h3 className="text-lg font-bold text-gray-100 mb-2">{speaker.name}</h3>
                           <p className="text-orange-400 text-sm mb-3">{speaker.title}</p>
                           <span className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-3 py-1 rounded-full text-xs">
                             {speaker.expertise}
                           </span>
                          <div className="mt-3 text-xs text-gray-400">
                            {panel.title}
                          </div>
                                                     <div className="mt-3 text-xs text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity">
                             Click to view bio
                           </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

             {/* Call to Action */}
       <section className="py-16 bg-gradient-to-r from-orange-900 to-green-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Be Part of the Educational Revolution
          </h2>
                     <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join us as we explore, discuss, and shape the future of education in Africa. 
            Together, we can transform learning experiences for millions of students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <button className="px-8 py-4 bg-white text-orange-900 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg">
               <FaVideo className="inline mr-2" />
               Join Live Stream
             </button>
             <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-orange-900 transition-all">
               <FaHandshake className="inline mr-2" />
               Network & Connect
             </button>
                     </div>
         </div>
       </section>

       {/* Speaker Modal */}
       <SpeakerModal
         speaker={selectedSpeaker}
         panel={selectedPanel}
         isOpen={isModalOpen}
         onClose={closeSpeakerModal}
       />
     </div>
   );
 } 