"use client";

import { motion } from "framer-motion";
import { Suspense } from "react";
import EventHero from "../components/EventDetail/EventHero";
import ThemeSection from "../components/EventDetail/ThemeSection";
import ProgramSection from "../components/EventDetail/ProgramSection";
import SpecialFeaturesSection from "../components/EventDetail/SpecialFeaturesSection";
import CallToActionSection from "../components/EventDetail/CallToActionSection";
import EventDetailNavbar from "../components/EventDetail/EventDetailNavbar";

export default function EventDetailPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <EventDetailNavbar />
      
      <div id="hero">
        <Suspense fallback={<div>Loading...</div>}>
          <EventHero />
        </Suspense>
      </div>
      
      <div id="theme">
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeSection />
        </Suspense>
      </div>
      
      <div id="program">
        <Suspense fallback={<div>Loading...</div>}>
          <ProgramSection />
        </Suspense>
      </div>
      
      <div id="features">
        <Suspense fallback={<div>Loading...</div>}>
          <SpecialFeaturesSection />
        </Suspense>
      </div>
      
      <div id="cta">
        <Suspense fallback={<div>Loading...</div>}>
          <CallToActionSection />
        </Suspense>
      </div>
    </motion.div>
  );
} 