"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";

// Import components
import AboutHero from "../components/About/AboutHero";
import OurMission from "../components/About/OurMission";
import OurVision from "../components/About/OurVision";
import OurHistory from "../components/About/OurHistory";
import Impact from "../components/About/Impact";
import OurTeam from "../components/About/OurTeam";
import AboutNavbar from "../components/About/AboutNavbar";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white overflow-hidden"
    >
      <AboutNavbar />
      
      {/* Hero section */}
      <div id="hero">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading About...</div>}>
          <AboutHero />
        </Suspense>
      </div>

      {/* Mission section */}
      <div id="mission">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Mission...</div>}>
          <OurMission />
        </Suspense>
      </div>

      {/* Vision section */}
      <div id="vision">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Vision...</div>}>
          <OurVision />
        </Suspense>
      </div>

      {/* History section */}
      <div id="history">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading History...</div>}>
          <OurHistory />
        </Suspense>
      </div>

      {/* Impact section */}
      <div id="impact">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Impact...</div>}>
          <Impact />
        </Suspense>
      </div>

      {/* Team section */}
      <div id="team">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Team...</div>}>
          <OurTeam />
        </Suspense>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#2E8B57]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#FF6B00]/20 blur-3xl"></div>
      </div>
    </motion.div>
  );
}
