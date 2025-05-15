'use client'
import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaCalendarAlt, FaQuestionCircle, FaUsers, 
  FaBullseye, FaRocket, FaLightbulb, FaTools, FaBrain, 
  FaGamepad, FaShieldAlt, FaUniversity, FaMoneyBillWave, 
  FaChevronDown, FaClock, FaGlobe, FaFireAlt, FaLaptopCode,
  FaDiscord, FaSlack, FaGithub, FaVolumeUp, FaVolumeMute
} from 'react-icons/fa';

// Typewriter Effect Component
const TypewriterEffect = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);
    
    return () => clearTimeout(delayTimer);
  }, [delay]);
  
  useEffect(() => {
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 60); // Faster typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping]);
  
  return <span>{displayText}</span>;
}

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdownDate = new Date("2025-05-25T00:00:00").getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Pad with leading zeros for consistent display
  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="text-center">
        <div className="text-3xl font-bold">{formatTime(timeLeft.days)}</div>
        <div className="text-sm text-gray-300">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{formatTime(timeLeft.hours)}</div>
        <div className="text-sm text-gray-300">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{formatTime(timeLeft.minutes)}</div>
        <div className="text-sm text-gray-300">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">{formatTime(timeLeft.seconds)}</div>
        <div className="text-sm text-gray-300">Seconds</div>
      </div>
    </div>
  );
};

// RetroComputer Component
const RetroComputer = () => {
  const [powerOn, setPowerOn] = useState(true);
  const [audioOn, setAudioOn] = useState(false);
  
  // Handle power toggle
  const togglePower = () => {
    setPowerOn(!powerOn);
  };
  
  // Handle audio toggle
  const toggleAudio = () => {
    setAudioOn(!audioOn);
  };
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Computer Case */}
      <div className="bg-gray-400 rounded-lg p-6 shadow-2xl border-8 border-gray-500 relative" style={{ 
        maxWidth: "450px", 
        width: "100%",
        background: "linear-gradient(to bottom, #a0a0a0, #808080)",
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)"
      }}>
        {/* Retro Brand Name */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-600 px-4 py-1 rounded-md text-center">
          <span className="font-bold text-sm tracking-widest text-gray-300">HACKATHON-3000</span>
        </div>
        
        {/* Air Vents */}
        <div className="absolute top-3 right-4 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-6 bg-gray-600 rounded-sm"></div>
          ))}
        </div>
        
        {/* Monitor Frame */}
        <div className="bg-gray-900 rounded-lg p-5 shadow-inner border-8 border-gray-700">
          {/* CRT Screen with Bulge Effect */}
          <div className="relative overflow-hidden rounded-lg h-64" style={{ 
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)",
            background: powerOn ? "radial-gradient(circle at center, #001800 0%, #000800 100%)" : "#000000",
            borderRadius: "20px 20px 10px 10px"
          }}>
            {powerOn && (
              <>
                {/* Scanlines */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%)",
                  backgroundSize: "100% 4px",
                  mixBlendMode: "overlay"
                }}></div>
                
                {/* Screen Glare */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 60%)",
                  mixBlendMode: "overlay"
                }}></div>
                
                {/* CRT Curvature Effect */}
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  borderRadius: "100%/10%",
                  boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)"
                }}></div>
                
                {/* Moving Scanline */}
                <div 
                  className="absolute w-full h-8 pointer-events-none z-10 bg-gradient-to-b from-transparent via-green-500 to-transparent" 
                  style={{
                    animation: "scanline 8s linear infinite",
                    opacity: 0.08
                  }}
                ></div>
                
                {/* Terminal Content */}
                <div className="p-4 h-full font-mono text-green-500 text-sm relative z-0">
                  {/* Terminal Header */}
                  <div className="flex justify-between items-center mb-2 border-b border-green-700 pb-1">
                    <div className="text-green-500 font-mono tracking-wider text-xs">TERMINAL@FESTIVAL:~</div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  
                  {/* Terminal Lines */}
                  <div className="space-y-2 text-sm">
                    <div className="flex">
                      <span className="mr-2 text-green-600">$</span>
                      <span>
                        <TypewriterEffect 
                          text="Festival of Change 2025 Hackathon"
                        />
                      </span>
                    </div>
                    <div className="flex">
                      <span className="mr-2 text-green-600">$</span>
                      <span>
                        <TypewriterEffect 
                          text="Build solutions for Africa's future"
                          delay={2000}
                        />
                      </span>
                    </div>
                    <div className="flex">
                      <span className="mr-2 text-green-600">$</span>
                      <span>
                        <TypewriterEffect 
                          text="Join us May 25-30, 2025" 
                          delay={4000}
                        />
                      </span>
                    </div>
                    <div className="flex">
                      <span className="mr-2 text-green-600">$</span>
                      <span>
                        <TypewriterEffect 
                          text="Applications close May 15, 2025" 
                          delay={6000}
                        />
                      </span>
                    </div>
                    <div className="flex">
                      <span className="mr-2 text-green-600">$</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Computer Controls */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={togglePower}
              className={`w-10 h-6 rounded-full mr-4 flex items-center transition-colors duration-300 focus:outline-none ${powerOn ? 'bg-green-500 justify-end' : 'bg-gray-700 justify-start'}`}
            >
              <span className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300`}></span>
            </button>
            <div className={`w-3 h-3 rounded-full ${powerOn ? 'bg-green-500' : 'bg-red-500'} mr-2`}></div>
            <span className="text-xs text-gray-200">POWER</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gray-800 h-2 w-16 rounded-full"></div>
            <div onClick={toggleAudio} className="cursor-pointer">
              {audioOn ? 
                <FaVolumeUp className="text-green-500 text-lg" /> :
                <FaVolumeMute className="text-gray-500 text-lg" />
              }
            </div>
          </div>
        </div>
      </div>
      
      {/* Computer Base/Stand */}
      <div className="mx-auto relative">
        <div className="h-4 bg-gray-600 rounded-b-lg mx-auto w-2/3"></div>
        <div className="h-3 bg-gray-800 rounded-lg mx-auto w-4/5 mt-1"></div>
      </div>
      
      {/* Physical Keyboard */}
      <div className="mt-3 bg-gray-700 rounded-lg p-2 mx-auto w-full max-w-md shadow-lg" style={{
        background: "linear-gradient(to bottom, #555555, #333333)",
        maxWidth: "90%"
      }}>
        <div className="grid grid-cols-10 gap-1">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="bg-gray-900 h-4 rounded-sm"></div>
          ))}
        </div>
        <div className="mt-2 bg-gray-900 h-5 rounded-sm"></div>
      </div>
    </div>
  );
};

// Main Component
export default function HackathonPage() {
  const [activeTab, setActiveTab] = useState('tracks');
  const [activeFaq, setActiveFaq] = useState(null);
  const [showGlitchEffect, setShowGlitchEffect] = useState(false);
  
  // Create glitch effect periodically
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitchEffect(true);
      setTimeout(() => {
        setShowGlitchEffect(false);
      }, 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  // Add keyframes to document head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scanline {
        0% { top: -8px; }
        100% { top: 100%; }
      }
      
      @keyframes textFlicker {
        0% { opacity: 0.98; }
        50% { opacity: 1; }
        100% { opacity: 0.96; }
      }
      
      @keyframes glitch {
        0% { transform: translate(0) }
        20% { transform: translate(-2px, 2px) }
        40% { transform: translate(-2px, -2px) }
        60% { transform: translate(2px, 2px) }
        80% { transform: translate(2px, -2px) }
        100% { transform: translate(0) }
      }
      
      @keyframes crt-effect {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const trackData = [
    {
      title: 'Inclusive & Accessible Learning',
      icon: FaUsers,
      description: 'Solutions for learners with disabilities, rural/underserved communities, and multilingual access.',
      examples: 'Voice-enabled apps, offline courseware, sign-language tutors.'
    },
    {
      title: 'AI for Personalized Education',
      icon: FaBrain,
      description: 'Adaptive content and pacing via machine learning.',
      examples: 'AI tutors, adaptive tests, predictive analytics.'
    },
    {
      title: 'Teacher Empowerment Tools',
      icon: FaTools,
      description: 'Platforms to streamline content delivery, assessment, and classroom management.',
      examples: 'Auto-grading, lesson generators, feedback apps.'
    },
    {
      title: 'Digital Credentials & Microlearning',
      icon: FaAward,
      description: 'Short courses with verifiable certificates.',
      examples: 'Blockchain certificates, mobile micro-courses.'
    },
    {
      title: 'STEM Education for All',
      icon: FaRocket,
      description: 'Interactive tools for K–12 science, tech, engineering, and math.',
      examples: 'Coding games, math bots, lab simulators.'
    },
    {
      title: 'Gaming & Gamification',
      icon: FaGamepad,
      description: 'Game-based learning and engagement mechanics.',
      examples: 'Educational games, simulations, leaderboards.'
    },
    {
      title: 'Learning in Conflict & Crisis Zones',
      icon: FaShieldAlt,
      description: 'Ed-tech for refugees, IDPs, and offline scenarios.',
      examples: 'Radio lessons, SMS tutoring bots, kits.'
    }
  ];

  const prizeData = [
    { title: "1st Place", amount: "₦250,000", details: "Plus Incubation Support & Certificate of Excellence", color: "amber" },
    { title: "2nd Place", amount: "₦150,000", details: "Plus Mentorship & Certificate of Excellence", color: "gray" },
    { title: "3rd Place", amount: "₦100,000", details: "Plus Swag Pack & Certificate of Excellence", color: "orange" },
  ];

  const faqData = [
    { q: "Who can participate?", a: "The hackathon is open to developers, designers, educators, and young innovators across the world who are passionate about solving educational challenges in Africa." },
    { q: "Is this an in-person or virtual event?", a: "This is a fully virtual 5-day hackathon. All activities will take place online via Zoom, Slack/Discord, and a shared submission drive." },
    { q: "Do I need to have a team before applying?", a: "No, you can apply as an individual and form a team during Day 1 of the hackathon, or you can apply with a pre-formed team (maximum 5 members)." },
    { q: "What kind of projects are eligible?", a: "Projects must align with one of the seven hackathon tracks and address educational challenges in Africa. Your solution should leverage technology to create innovative, scalable, and impactful educational tools." },
    { q: "What is the selection criteria?", a: "Applications will be evaluated based on the innovation, feasibility, and potential impact of the proposed project idea. We aim to select a diverse group of participants with complementary skills." },
  ];

  const schedule = [
    ['Day 1', '10:00 AM', 'Kick-off & orientation'],
    ['Day 1', '13:00 PM', 'Team formation & ideation'],
    ['Day 2', '09:00 AM', 'Check-ins & mentor hours'],
    ['Day 2', '17:00 PM', 'Progress updates'],
    ['Day 3', '09:00 AM', 'Check-ins & mentor hours'],
    ['Day 3', '17:00 PM', 'Progress updates'],
    ['Day 4', '09:00 AM', 'Check-ins & mentor hours'],
    ['Day 4', '17:00 PM', 'Progress updates'],
    ['Day 5', '12:00 PM', 'Submission deadline'],
    ['Day 5', '14:00 PM', 'Demos & judging'],
    ['Day 5', '16:00 PM', 'Winners & closing']
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-100 ${showGlitchEffect ? 'animate-glitch' : ''}`}>

      {/* CRT Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Removing the green glow effect */}
      </div>
      
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900">
        {/* Retro Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Abstract tech lines */}
        <div className="absolute inset-0 opacity-20">
          {/* Removing the random tech lines that cause hydration errors */}
        </div>
        
        <div className="container mx-auto px-6 py-20 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <div className="inline-block px-3 py-1 bg-fuchsia-700 bg-opacity-70 rounded-full text-sm font-medium mb-4 border border-fuchsia-500">
                <span className="mr-2">●</span> MAY 25-30, 2025 • VIRTUAL EVENT
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Festival of Change 2025
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                <span className="text-green-400">Ed-Tech</span> Hackathon for Africa's Future
              </p>
              <p className="max-w-lg mx-auto md:mx-0 mb-8 text-gray-300">
                Join innovators from around the globe to build solutions that transform education across Africa through cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="https://airtable.com/appSPaYgfUWVrGW0s/pagJn3STM5bl4SBQF/form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 rounded-lg font-bold transition-all shadow-lg hover:shadow-fuchsia-500/25 text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <RetroComputer />
            </div>
          </div>
        </div>
        
        {/* Background animated elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Countdown Timer */}
      <div className="bg-gray-900 py-10">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-xl p-6 shadow-lg border border-purple-700">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center mb-2">
                  <FaFireAlt className="text-red-400 mr-2 animate-pulse" />
                  <h3 className="text-xl font-bold">Applications Closing Soon</h3>
                </div>
                <p className="text-gray-300">Don't miss your chance to participate</p>
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className="py-16 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition border border-gray-600">
              <FaCalendarAlt className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-300">5 Days</h3>
              <p className="text-gray-300">Intensive hackathon sprint</p>
            </div>
            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition border border-gray-600">
              <FaUsers className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-300">100+ Participants</h3>
              <p className="text-gray-300">Global innovators</p>
            </div>
            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition border border-gray-600">
              <FaLaptopCode className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-300">7 Tracks</h3>
              <p className="text-gray-300">Specialized challenges</p>
            </div>
            <div className="bg-gray-700 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition border border-gray-600">
              <FaGlobe className="text-4xl text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-300">24/7 Mentorship</h3>
              <p className="text-gray-300">Expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Hack For Education
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Build groundbreaking education technology solutions for Africa's most pressing challenges
            </p>
          </div>
          
          {/* Tab Navigation - Retro Style */}
          <div className="flex flex-wrap justify-center mb-10 space-x-2">
            {['tracks', 'prizes', 'schedule', 'faq'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all uppercase tracking-wider border ${
                  activeTab === tab ? 
                  'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white border-purple-500' : 
                  'bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700'
                }`}
                style={{
                  boxShadow: activeTab === tab ? '0 0 10px rgba(147, 51, 234, 0.5)' : 'none'
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="mt-8">
            {/* Tracks */}
            {activeTab === 'tracks' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {trackData.map((track, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden group hover:border-purple-500 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300"
                          style={{
                            boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)'
                          }}
                        >
                          <track.icon className="text-2xl text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-100">{track.title}</h3>
                      </div>
                      <p className="text-gray-300 mb-4">{track.description}</p>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3 border border-gray-700">
                        <p className="text-sm text-gray-400">
                          <strong className="text-purple-400">Examples:</strong> {track.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Prizes */}
            {activeTab === 'prizes' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {prizeData.map((prize, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden group hover:border-purple-500 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 15px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-100">{prize.title}</h3>
                        <div className={`text-3xl font-bold text-${prize.color}-400`}>{prize.amount}</div>
                      </div>
                      <p className="text-gray-300">{prize.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FAQ */}
            {activeTab === 'faq' && (
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-100 mb-2">{faq.q}</h3>
                      <p className="text-gray-300">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Schedule */}
            {activeTab === 'schedule' && (
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 font-bold">{item[0]}</span>
                        <span className="text-gray-400">{item[1]}</span>
                      </div>
                      <p className="text-gray-300">{item[2]}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
