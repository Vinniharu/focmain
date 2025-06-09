'use client'
import React, { useState, useEffect } from 'react';
import { 
  FaAward, FaCalendarAlt, FaQuestionCircle, FaUsers, 
  FaBullseye, FaRocket, FaLightbulb, FaTools, FaBrain, 
  FaGamepad, FaShieldAlt, FaUniversity, FaMoneyBillWave, 
  FaChevronDown, FaClock, FaGlobe, FaFireAlt, FaLaptopCode,
  FaDiscord, FaSlack, FaGithub, FaVolumeUp, FaVolumeMute,
  FaTrophy, FaCode, FaCogs, FaChartLine, FaPlay, FaCheckCircle,
  FaStar, FaHandshake, FaLink, FaVideo, FaComments, FaLaugh
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
      }, 60);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping]);
  
  return <span>{displayText}</span>;
}

// Live Status Component
const LiveStatusBadge = ({ day, isActive }) => {
  if (!isActive) return null;
  
  return (
    <div className="flex items-center space-x-2 animate-pulse">
      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
      <span className="text-red-400 font-bold text-sm uppercase tracking-wider">
        LIVE • Day {day}
      </span>
    </div>
  );
};

// Enhanced RetroComputer Component with Fun Features
const RetroComputer = () => {
  const [powerOn, setPowerOn] = useState(true);
  const [audioOn, setAudioOn] = useState(false);
  const [gameMode, setGameMode] = useState(false);
  const [score, setScore] = useState(0);
  const [snakeGame, setSnakeGame] = useState(false);
  const [matrixMode, setMatrixMode] = useState(false);
  const [hackingMode, setHackingMode] = useState(false);
  const [currentMode, setCurrentMode] = useState('terminal'); // terminal, game, matrix, hacking
  
  const togglePower = () => {
    setPowerOn(!powerOn);
    if (!powerOn) {
      setCurrentMode('terminal');
      setGameMode(false);
      setMatrixMode(false);
      setHackingMode(false);
    }
  };
  
  const toggleAudio = () => {
    setAudioOn(!audioOn);
  };

  const cycleMode = () => {
    if (!powerOn) return;
    const modes = ['terminal', 'game', 'matrix', 'hacking'];
    const currentIndex = modes.indexOf(currentMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setCurrentMode(modes[nextIndex]);
  };

  // Enhanced Matrix Effect
  const MatrixRain = () => {
    const chars = ['0', '1', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', '猫', '犬', '鳥', 'H', 'A', 'C', 'K'];
    
    return (
      <div className="h-full w-full bg-black relative overflow-hidden">
        <div className="text-center mb-4 relative z-10">
          <div className="text-green-400 font-mono text-lg animate-pulse">
            ⚡ MATRIX SIMULATION ⚡
          </div>
          <div className="text-green-300 text-sm mt-2">
            CONNECTING TO THE MAINFRAME...
          </div>
        </div>
        
        {/* Matrix Rain Columns */}
        {[...Array(15)].map((_, columnIndex) => (
          <div
            key={columnIndex}
            className="absolute top-0 text-green-400 font-mono text-sm flex flex-col"
            style={{
              left: `${(columnIndex * 6.67)}%`,
              animation: `matrixColumn ${2 + columnIndex * 0.1}s linear infinite`
            }}
          >
            {[...Array(20)].map((_, charIndex) => (
              <div
                key={charIndex}
                className="h-4 leading-4"
                style={{
                  opacity: Math.max(0, 1 - (charIndex * 0.05)),
                  color: charIndex < 3 ? '#00ff00' : '#00aa00'
                }}
              >
                {chars[Math.floor(Math.random() * chars.length)]}
              </div>
            ))}
          </div>
        ))}
        
        {/* Floating Matrix Code */}
        <div className="absolute bottom-4 left-0 right-0 text-center z-10">
          <div 
            className="text-green-400 text-xs animate-bounce cursor-pointer hover:text-green-300"
            onClick={() => setScore(prev => prev + 25)}
          >
            🔮 REALITY IS AN ILLUSION 🔮
          </div>
          <div className="text-green-300 text-xs mt-1">
            CLICK TO HACK THE MATRIX (+25 pts)
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Snake Game Display
  const SnakeGameDisplay = () => {
    const [snakePosition, setSnakePosition] = useState([0, 1, 2]);
    const [foodPosition, setFoodPosition] = useState(15);
    
    const moveSnake = () => {
      setSnakePosition(prev => {
        const newSnake = [...prev];
        const head = newSnake[0];
        let newHead = head + 8; // Move down
        
        // Wrap around
        if (newHead >= 64) newHead = newHead % 8;
        
        newSnake.unshift(newHead);
        if (newHead === foodPosition) {
          setScore(prev => prev + 50);
          setFoodPosition(Math.floor(Math.random() * 64));
        } else {
          newSnake.pop();
        }
        
        return newSnake;
      });
    };

    return (
      <div className="text-center">
        <div className="text-green-400 font-mono mb-3 text-lg animate-pulse">
          🐍 RETRO SNAKE 🐍
        </div>
        
        {/* Game Board */}
        <div className="inline-block bg-gray-900 p-2 rounded border-2 border-green-500">
          <div className="grid grid-cols-8 gap-1 mb-3">
            {[...Array(64)].map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 border border-gray-700 transition-all duration-200 ${
                  snakePosition.includes(i)
                    ? snakePosition[0] === i 
                      ? 'bg-green-300 shadow-lg animate-pulse' // Head
                      : 'bg-green-500' // Body
                    : i === foodPosition
                    ? 'bg-red-500 animate-bounce shadow-lg' // Food
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {snakePosition[0] === i && '●'}
                {i === foodPosition && '🍎'}
              </div>
            ))}
          </div>
        </div>
        
        {/* Game Info */}
        <div className="mt-3 space-y-2">
          <div className="text-green-400 text-sm font-bold">
            SCORE: <span className="text-yellow-400 animate-pulse">{score}</span>
          </div>
          <div className="text-green-300 text-xs">
            LENGTH: {snakePosition.length}
          </div>
          <button
            onClick={moveSnake}
            className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-xs rounded transition-all transform hover:scale-105"
          >
            🎮 MOVE SNAKE
          </button>
        </div>
      </div>
    );
  };

  // Hacking Simulator
  const HackingSimulator = () => (
    <div className="space-y-1 text-xs">
      <div className="text-green-400">
        <span className="animate-pulse">&gt;</span> Accessing mainframe...
      </div>
      <div className="text-green-400">
        <span className="animate-pulse">&gt;</span> Bypassing firewall...
      </div>
      <div className="text-green-400">
        <span className="animate-pulse">&gt;</span> Decrypting data...
      </div>
      <div className="text-red-400 animate-pulse">
        <span className="animate-pulse">&gt;</span> ACCESS GRANTED ✓
      </div>
      <div className="text-green-400">
        <span className="animate-pulse">&gt;</span> Welcome, Elite Hacker!
      </div>
      <div className="text-yellow-400 text-center mt-2 animate-bounce">
        🎯 TARGET: ED-TECH SOLUTIONS
      </div>
    </div>
  );
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="bg-gray-400 rounded-lg p-6 shadow-2xl border-8 border-gray-500 relative" style={{ 
        maxWidth: "450px", 
        width: "100%",
        background: "linear-gradient(to bottom, #a0a0a0, #808080)",
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)"
      }}>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gray-600 px-4 py-1 rounded-md text-center">
          <span className="font-bold text-sm tracking-widest text-gray-300">HACKATHON-LIVE</span>
        </div>
        
        <div className="absolute top-3 right-4 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-6 bg-gray-600 rounded-sm"></div>
          ))}
        </div>
        
        <div className="bg-gray-900 rounded-lg p-5 shadow-inner border-8 border-gray-700">
          <div className="relative overflow-hidden rounded-lg h-64" style={{ 
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)",
            background: powerOn ? "radial-gradient(circle at center, #001800 0%, #000800 100%)" : "#000000",
            borderRadius: "20px 20px 10px 10px"
          }}>
            {powerOn && (
              <>
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  backgroundImage: "linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 50%)",
                  backgroundSize: "100% 4px",
                  mixBlendMode: "overlay"
                }}></div>
                
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 60%)",
                  mixBlendMode: "overlay"
                }}></div>
                
                <div className="absolute inset-0 pointer-events-none z-10" style={{
                  borderRadius: "100%/10%",
                  boxShadow: "inset 0 0 50px rgba(0,0,0,0.5)"
                }}></div>
                
                <div 
                  className="absolute w-full h-8 pointer-events-none z-10 bg-gradient-to-b from-transparent via-green-500 to-transparent" 
                  style={{
                    animation: "scanline 8s linear infinite",
                    opacity: 0.08
                  }}
                ></div>
                
                <div className="p-4 h-full font-mono text-green-500 text-sm relative z-0">
                  <div className="flex justify-between items-center mb-2 border-b border-green-700 pb-1">
                    <div className="text-green-500 font-mono tracking-wider text-xs">
                      {currentMode === 'terminal' && 'HACKATHON@LIVE:~'}
                      {currentMode === 'game' && 'GAME@MODE:~'}
                      {currentMode === 'matrix' && 'MATRIX@SIM:~'}
                      {currentMode === 'hacking' && 'HACK@SIM:~'}
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                  </div>
                  
                  {/* Terminal Mode */}
                  {currentMode === 'terminal' && (
                    <div className="space-y-2 text-sm">
                      <div className="flex">
                        <span className="mr-2 text-green-600">$</span>
                        <span>
                          <TypewriterEffect 
                            text="HACKATHON IS LIVE!"
                          />
                        </span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 text-green-600">$</span>
                        <span>
                          <TypewriterEffect 
                            text="Building Africa's future now..."
                            delay={2000}
                          />
                        </span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 text-green-600">$</span>
                        <span>
                          <TypewriterEffect 
                            text="28 brilliant minds connected" 
                            delay={4000}
                          />
                        </span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 text-green-600">$</span>
                        <span>
                          <TypewriterEffect 
                            text="Code. Create. Change." 
                            delay={6000}
                          />
                        </span>
                      </div>
                      <div className="flex">
                        <span className="mr-2 text-green-600">$</span>
                        <span className="animate-pulse">_</span>
                      </div>
                    </div>
                  )}

                  {/* Game Mode */}
                  {currentMode === 'game' && <SnakeGameDisplay />}

                  {/* Matrix Mode */}
                  {currentMode === 'matrix' && <MatrixRain />}

                  {/* Hacking Mode */}
                  {currentMode === 'hacking' && <HackingSimulator />}
                </div>
              </>
            )}
          </div>
        </div>
        
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
          
          <div className="flex items-center space-x-2">
            <button
              onClick={cycleMode}
              disabled={!powerOn}
              className={`px-2 py-1 text-xs rounded transition-colors ${
                powerOn 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              MODE
            </button>
            <div className="bg-gray-800 h-2 w-12 rounded-full"></div>
            <div onClick={toggleAudio} className="cursor-pointer">
              {audioOn ? 
                <FaVolumeUp className="text-green-500 text-lg" /> :
                <FaVolumeMute className="text-gray-500 text-lg" />
              }
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto relative">
        <div className="h-4 bg-gray-600 rounded-b-lg mx-auto w-2/3"></div>
        <div className="h-3 bg-gray-800 rounded-lg mx-auto w-4/5 mt-1"></div>
      </div>
      
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

// Current Day Component
const getCurrentHackathonDay = () => {
  const hackathonStart = new Date("2025-06-06T00:00:00");
  const now = new Date();
  const daysDiff = Math.floor((now - hackathonStart) / (1000 * 60 * 60 * 24));
  
  if (daysDiff < 0) return 0; // Before hackathon
  if (daysDiff > 4) return -1; // After hackathon
  return daysDiff + 1; // Day 1-5
};

// Main Component
export default function HackathonPage() {
  const [activeTab, setActiveTab] = useState('live');
  const [showGlitchEffect, setShowGlitchEffect] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  
  useEffect(() => {
    setCurrentDay(getCurrentHackathonDay());
  }, []);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setShowGlitchEffect(true);
      setTimeout(() => {
        setShowGlitchEffect(false);
      }, 200);
    }, 8000);
    
    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scanline {
        0% { top: -8px; }
        100% { top: 100%; }
      }
      
      @keyframes glitch {
        0% { transform: translate(0) }
        20% { transform: translate(-2px, 2px) }
        40% { transform: translate(-2px, -2px) }
        60% { transform: translate(2px, 2px) }
        80% { transform: translate(2px, -2px) }
        100% { transform: translate(0) }
      }
      
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
        50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8); }
      }
      
      @keyframes matrixDrop {
        0% { transform: translateY(-100px); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(300px); opacity: 0; }
      }
      
      @keyframes matrixColumn {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const trackData = [
    {
      title: 'Inclusive & Accessible Learning',
      icon: FaUsers,
      description: 'Solutions for learners with disabilities, rural/underserved communities, and multilingual access.',
      examples: 'Voice-enabled apps, offline courseware, sign-language tutors.',
      teams: 3
    },
    {
      title: 'AI for Personalized Education',
      icon: FaBrain,
      description: 'Adaptive content and pacing via machine learning.',
      examples: 'AI tutors, adaptive tests, predictive analytics.',
      teams: 6
    },
    {
      title: 'Teacher Empowerment Tools',
      icon: FaTools,
      description: 'Platforms to streamline content delivery, assessment, and classroom management.',
      examples: 'Auto-grading, lesson generators, feedback apps.',
      teams: 4
    },
    {
      title: 'Digital Credentials & Microlearning',
      icon: FaAward,
      description: 'Short courses with verifiable certificates.',
      examples: 'Blockchain certificates, mobile micro-courses.',
      teams: 2
    },
    {
      title: 'STEM Education for All',
      icon: FaRocket,
      description: 'Interactive tools for K–12 science, tech, engineering, and math.',
      examples: 'Coding games, math bots, lab simulators.',
      teams: 7
    },
    {
      title: 'Gaming & Gamification',
      icon: FaGamepad,
      description: 'Game-based learning and engagement mechanics.',
      examples: 'Educational games, simulations, leaderboards.',
      teams: 4
    },
    {
      title: 'Learning in Conflict & Crisis Zones',
      icon: FaShieldAlt,
      description: 'Ed-tech for refugees, IDPs, and offline scenarios.',
      examples: 'Radio lessons, SMS tutoring bots, kits.',
      teams: 2
    }
  ];

  const prizeData = [
    { 
      title: "1st Place", 
      amount: "₦250,000", 
      details: "Plus Incubation Support & Certificate of Excellence", 
      color: "yellow",
      icon: FaTrophy
    },
    { 
      title: "2nd Place", 
      amount: "₦150,000", 
      details: "Plus Mentorship & Certificate of Excellence", 
      color: "gray",
      icon: FaAward
    },
    { 
      title: "3rd Place", 
      amount: "₦100,000", 
      details: "Plus Swag Pack & Certificate of Excellence", 
      color: "orange",
      icon: FaStar
    },
  ];

  const schedule = [
    ['Day 1', '10:00 AM', 'Kick-off & orientation', 'completed'],
    ['Day 1', '13:00 PM', 'Team formation & ideation', 'completed'],
    ['Day 2', '09:00 AM', 'Check-ins & mentor hours', currentDay === 2 ? 'active' : currentDay > 2 ? 'completed' : 'upcoming'],
    ['Day 2', '17:00 PM', 'Progress updates', currentDay === 2 ? 'active' : currentDay > 2 ? 'completed' : 'upcoming'],
    ['Day 3', '09:00 AM', 'Check-ins & mentor hours', currentDay === 3 ? 'active' : currentDay > 3 ? 'completed' : 'upcoming'],
    ['Day 3', '17:00 PM', 'Progress updates', currentDay === 3 ? 'active' : currentDay > 3 ? 'completed' : 'upcoming'],
    ['Day 4', '09:00 AM', 'Check-ins & mentor hours', currentDay === 4 ? 'active' : currentDay > 4 ? 'completed' : 'upcoming'],
    ['Day 4', '17:00 PM', 'Progress updates', currentDay === 4 ? 'active' : currentDay > 4 ? 'completed' : 'upcoming'],
    ['Day 5', '12:00 PM', 'Submission deadline', currentDay === 5 ? 'active' : currentDay > 5 ? 'completed' : 'upcoming'],
    ['Day 5', '14:00 PM', 'Demos & judging', currentDay === 5 ? 'active' : currentDay > 5 ? 'completed' : 'upcoming'],
    ['Day 5', '16:00 PM', 'Winners & closing', currentDay === 5 ? 'active' : currentDay > 5 ? 'completed' : 'upcoming']
  ];

  const resources = [
    {
      title: "GitHub Repository",
      description: "Access shared resources and submission templates",
      icon: FaGithub,
      link: "#",
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Mentor Office Hours",
      description: "Get 1-on-1 guidance from industry experts",
      icon: FaHandshake,
      link: "#",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Live Workshops",
      description: "Daily skill-building sessions and demos",
      icon: FaVideo,
      link: "#",
      color: "from-red-500 to-pink-600"
    }
  ];

  const liveStats = [
    { label: "Registered Participants", value: "28", icon: FaUsers, color: "text-green-400" },
    { label: "Active Tracks", value: "7", icon: FaLaptopCode, color: "text-blue-400" },
    { label: "Days of Innovation", value: "5", icon: FaCalendarAlt, color: "text-yellow-400" },
    { label: "Prize Pool", value: "₦500k", icon: FaTrophy, color: "text-purple-400" }
  ];

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-100 ${showGlitchEffect ? 'animate-glitch' : ''}`}>
      
      {/* Hero Section - Completely Revamped */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-6">
                <LiveStatusBadge day={currentDay} isActive={currentDay > 0 && currentDay <= 5} />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">
                Hackathon Live!
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                Building <span className="text-green-400">Africa's Future</span> Together
              </p>
              <p className="max-w-lg mx-auto md:mx-0 mb-8 text-gray-300">
                {currentDay > 0 && currentDay <= 5 
                  ? `Day ${currentDay} of 5 • 28 amazing innovators are building groundbreaking ed-tech solutions right now!`
                  : "28 amazing innovators building the future of ed-tech for Africa!"
                }
              </p>
              
              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 rounded-lg font-bold transition-all shadow-lg hover:shadow-purple-500/25 text-center">
                  <FaGithub className="inline mr-2" />
                  View Resources
                </button>

              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <RetroComputer />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      {/* Live Stats Section */}
      <section className="py-16 bg-gray-800 bg-opacity-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Hackathon Live Statistics
            </h2>
            <p className="text-gray-300">Real-time updates from our amazing community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {liveStats.map((stat, index) => (
              <div key={index} className="bg-gray-700 bg-opacity-50 rounded-xl p-6 hover:bg-opacity-70 transition border border-gray-600 group">
                <stat.icon className={`text-4xl ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className={`text-3xl font-bold ${stat.color} animate-pulse`}>{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Hackathon Central
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Everything you need to succeed in the hackathon
            </p>
          </div>
          
          {/* Enhanced Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-10 space-x-2">
            {['live', 'tracks', 'resources', 'schedule', 'prizes'].map((tab) => (
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
                {tab === 'live' && <FaPlay className="inline mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="mt-8">
            {/* Live Tab */}
            {activeTab === 'live' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-800 to-emerald-800 rounded-xl p-6 border border-green-600">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <h3 className="text-2xl font-bold text-green-100">Hackathon is Live!</h3>
                  </div>
                  <p className="text-green-200 mb-4">
                    {currentDay > 0 && currentDay <= 5 
                      ? `We're currently on Day ${currentDay} of the hackathon. Keep building amazing solutions!`
                      : "The hackathon is in progress with amazing innovations happening every minute!"
                    }
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-900 bg-opacity-50 rounded-lg p-3">
                      <h4 className="font-medium text-gray-200">📢 Latest Announcement</h4>
                      <p className="text-sm text-gray-400">Mentor office hours are now extended until 8 PM daily. Check the resources section to book your slot!</p>
                    </div>
                    <div className="bg-green-900 bg-opacity-50 rounded-lg p-3">
                      <h4 className="font-medium text-gray-200">🎯 Today's Focus</h4>
                      <p className="text-sm text-gray-400">MVP development and user interface design. Remember to document your progress!</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Tracks */}
            {activeTab === 'tracks' && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {trackData.map((track, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl overflow-hidden group hover:border-purple-500 transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <track.icon className="text-2xl text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-100">{track.title}</h3>
                            <p className="text-sm text-purple-400">{track.teams} teams working</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4 text-sm">{track.description}</p>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3 border border-gray-700">
                        <p className="text-xs text-gray-400">
                          <strong className="text-purple-400">Examples:</strong> {track.examples}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Resources */}
            {activeTab === 'resources' && (
              <div className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                      <FaTools className="text-orange-400 mr-3" />
                      Development Tools
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">GitHub Template</h4>
                        <p className="text-sm text-gray-400">Starter code and project structure</p>
                      </div>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">API Documentation</h4>
                        <p className="text-sm text-gray-400">Available APIs and integration guides</p>
                      </div>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">Design Resources</h4>
                        <p className="text-sm text-gray-400">UI kits, icons, and design guidelines</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 bg-opacity-60 border border-gray-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-100 mb-4 flex items-center">
                      <FaHandshake className="text-green-400 mr-3" />
                      Support & Guidance
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">Mentor Sessions</h4>
                        <p className="text-sm text-gray-400">1-on-1 guidance from industry experts</p>
                      </div>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">Technical Support</h4>
                        <p className="text-sm text-gray-400">Get help with coding and debugging</p>
                      </div>
                      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-3">
                        <h4 className="font-medium text-gray-200">Submission Guidelines</h4>
                        <p className="text-sm text-gray-400">Project requirements and deadlines</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Enhanced Schedule with Current Day Highlighting */}
            {activeTab === 'schedule' && (
              <div className="space-y-4">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">Hackathon Timeline</h3>
                  <p className="text-gray-400">Track your progress through the 5-day journey</p>
                </div>
                
                {schedule.map((item, index) => {
                  const status = item[3];
                  const isActive = status === 'active';
                  const isCompleted = status === 'completed';
                  const isUpcoming = status === 'upcoming';
                  
                  return (
                    <div
                      key={index}
                      className={`rounded-xl overflow-hidden transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-green-800 to-emerald-800 border-2 border-green-500 shadow-lg transform scale-105' 
                          : isCompleted
                          ? 'bg-gray-800 bg-opacity-60 border border-gray-600'
                          : 'bg-gray-800 bg-opacity-30 border border-gray-700'
                      }`}
                      style={isActive ? { animation: 'pulse-glow 2s infinite' } : {}}
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <div className={`w-4 h-4 rounded-full mr-4 ${
                              isActive ? 'bg-green-400 animate-pulse' :
                              isCompleted ? 'bg-green-600' : 'bg-gray-600'
                            }`}></div>
                            <span className={`font-bold text-lg ${
                              isActive ? 'text-green-100' :
                              isCompleted ? 'text-purple-400' : 'text-gray-400'
                            }`}>
                              {item[0]}
                            </span>
                            {isActive && (
                              <span className="ml-3 px-2 py-1 bg-green-500 text-green-100 text-xs font-bold rounded-full animate-pulse">
                                LIVE NOW
                              </span>
                            )}
                            {isCompleted && (
                              <FaCheckCircle className="ml-3 text-green-500" />
                            )}
                          </div>
                          <span className={`${
                            isActive ? 'text-green-200' :
                            isCompleted ? 'text-gray-300' : 'text-gray-500'
                          }`}>
                            {item[1]}
                          </span>
                        </div>
                        <p className={`${
                          isActive ? 'text-green-100 font-medium' :
                          isCompleted ? 'text-gray-200' : 'text-gray-400'
                        }`}>
                          {item[2]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Prizes */}
            {activeTab === 'prizes' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-100 mb-4">Amazing Prizes Await!</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Beyond the monetary rewards, winners get access to incubation programs, mentorship, and a platform to scale their solutions across Africa.
                  </p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                  {prizeData.map((prize, index) => (
                    <div
                      key={index}
                      className={`bg-gray-800 bg-opacity-60 border rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 ${
                        index === 0 ? 'border-yellow-500 hover:border-yellow-400' :
                        index === 1 ? 'border-gray-400 hover:border-gray-300' :
                        'border-orange-500 hover:border-orange-400'
                      }`}
                    >
                      <div className="p-6 text-center">
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          'bg-gradient-to-r from-orange-400 to-orange-600'
                        }`}>
                          <prize.icon className="text-2xl text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100 mb-2">{prize.title}</h3>
                        <div className={`text-4xl font-bold mb-4 ${
                          index === 0 ? 'text-yellow-400' :
                          index === 1 ? 'text-gray-400' :
                          'text-orange-400'
                        }`}>
                          {prize.amount}
                        </div>
                        <p className="text-gray-300">{prize.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Message */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-fuchsia-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-white">
              You're Part of Something Amazing! 🚀
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Together, we're building the future of education in Africa. Every line of code, every creative solution, and every collaboration is making a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/EbookFoundation/free-programming-books"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white text-purple-900 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg text-center"
              >
                <FaRocket className="inline mr-2" />
                Keep Building
              </a>
              <a
                href="https://adplist.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-purple-900 transition-all text-center"
              >
                <FaHandshake className="inline mr-2" />
                Find Mentors
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
