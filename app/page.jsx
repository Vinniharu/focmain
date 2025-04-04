"use client";

import HomeHero from "./components/Home/HomeHero";
import AboutSection from "./components/Home/AboutSection";
import Speakers from "./components/Home/Speakers";
import Sponsors from "./components/Home/Sponsors";
import { motion } from "framer-motion";
import ReadyToJoin from "./components/Home/ReadyToJoin";
import HomeNavbar from "./components/Home/HomeNavbar";
import VolunteerCTA from "./components/Home/VolunteerCTA";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <HomeNavbar />
        
        <div id="hero">
          <HomeHero/>
        </div>
        
        <div id="about">
          <AboutSection/>
        </div>
        
        <div id="speakers">
          <Speakers/>
        </div>
        
        <div id="volunteer">
          <VolunteerCTA/>
        </div>
        
        <div id="sponsors">
          <Sponsors/>
        </div>
        
        <div id="join">
          <ReadyToJoin/>
        </div>
    </motion.div>
  );
}