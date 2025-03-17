"use client";

import Navbar from "./UI/Navbar";
import HomeHero from "./components/Home/HomeHero";
import AboutSection from "./components/Home/AboutSection";
import Speakers from "./components/Home/Speakers";
import Sponsors from "./components/Home/Sponsors";
import { motion } from "framer-motion";
import ReadyToJoin from "./components/Home/ReadyToJoin";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
        <HomeHero/>
        <AboutSection/>
        <Speakers/>
        <Sponsors/>
        <ReadyToJoin/>
    </motion.div>
  );
}