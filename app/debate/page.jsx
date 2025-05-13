"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import DebateHero from "../components/Debate/DebateHero";
import DebateOverview from "../components/Debate/DebateOverview";
import DebateFormat from "../components/Debate/DebateFormat";
import DebateRegistration from "../components/Debate/DebateRegistration";
import DebatePrizes from "../components/Debate/DebatePrizes";
import DebateJudges from "../components/Debate/DebateJudges";
import DebateSchedule from "../components/Debate/DebateSchedule";

export default function DebatePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div id="hero">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateHero />
        </Suspense>
      </div>
      
      <div id="overview">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateOverview />
        </Suspense>
      </div>
      
      <div id="format">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateFormat />
        </Suspense>
      </div>
      
      <div id="registration">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateRegistration />
        </Suspense>
      </div>
      
      <div id="prizes">
        <Suspense fallback={<div>Loading...</div>}>
          <DebatePrizes />
        </Suspense>
      </div>
      
      <div id="judges">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateJudges />
        </Suspense>
      </div>
      
      <div id="schedule">
        <Suspense fallback={<div>Loading...</div>}>
          <DebateSchedule />
        </Suspense>
      </div>
    </motion.div>
  );
}
