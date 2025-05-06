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
        
        <main>
          <section id="hero" aria-label="Festival of Change hero section">
            <HomeHero/>
          </section>
          
          <section id="about" aria-label="About the Festival">
            <AboutSection/>
          </section>
          
          <section id="speakers" aria-label="Event speakers">
            <Speakers/>
          </section>
          
          <section id="volunteer" aria-label="Volunteer opportunities">
            <VolunteerCTA/>
          </section>
          
          <section id="sponsors" aria-label="Event sponsors">
            <Sponsors/>
          </section>
          
          <section id="join" aria-label="Registration call to action">
            <ReadyToJoin/>
          </section>
        </main>
    </motion.div>
  );
}