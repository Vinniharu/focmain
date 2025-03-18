"use client";

import { Suspense } from "react";
import RegistrationHero from "../components/Registration/RegistrationHero";
import RegistrationForm from "../components/Registration/RegistrationForm";
import RegistrationInfo from "../components/Registration/RegistrationInfo";

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Loading hero section...</div>}>
        <RegistrationHero />
      </Suspense>
      
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading registration form...</div>}>
            <RegistrationForm />
          </Suspense>
          
          <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center text-white">Loading event information...</div>}>
            <RegistrationInfo />
          </Suspense>
        </div>
      </div>
      
      {/* Footer spacing */}
      <div className="h-24"></div>
    </main>
  );
} 