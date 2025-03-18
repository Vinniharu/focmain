"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";

// Import components
import SponsorshipHero from "../components/Sponsorship/SponsorshipHero";
import WhySponsorSection from "../components/Sponsorship/WhySponsorSection";
import SponsorshipPackagesSection from "../components/Sponsorship/SponsorshipPackagesSection";
import SpecialSponsorshipSection from "../components/Sponsorship/SpecialSponsorshipSection";
import SponsorshipFAQSection from "../components/Sponsorship/SponsorshipFAQSection";
import SponsorshipCTASection from "../components/Sponsorship/SponsorshipCTASection";
import SponsorshipNavbar from "../components/Sponsorship/SponsorshipNavbar";

export default function SponsorshipPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      <SponsorshipNavbar />
      
      {/* Hero section */}
      <div id="hero">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading Hero...</div>}>
          <SponsorshipHero />
        </Suspense>
      </div>

      {/* Why Sponsor section */}
      <div id="why-sponsor">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Why Sponsor...</div>}>
          <WhySponsorSection />
        </Suspense>
      </div>

      {/* Sponsorship Packages section */}
      <div id="packages">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Packages...</div>}>
          <SponsorshipPackagesSection />
        </Suspense>
      </div>

      {/* Special Sponsorship Opportunities section */}
      <div id="special">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Special Opportunities...</div>}>
          <SpecialSponsorshipSection />
        </Suspense>
      </div>

      {/* FAQ section */}
      <div id="faq">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading FAQ...</div>}>
          <SponsorshipFAQSection />
        </Suspense>
      </div>

      {/* Call to Action section */}
      <div id="cta">
        <Suspense fallback={<div className="py-20 flex items-center justify-center">Loading Call to Action...</div>}>
          <SponsorshipCTASection />
        </Suspense>
      </div>
    </motion.div>
  );
} 