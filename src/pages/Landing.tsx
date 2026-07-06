import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionSection } from '../components/SolutionSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { BloquesSection } from '../components/BloquesSection';
import { BonusesSection } from '../components/BonusesSection';
import { ProcessesSection } from '../components/ProcessesSection';
import { PricingSection } from '../components/PricingSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { TestimonialsBottom } from '../components/TestimonialsBottom';
import { FaqSection } from '../components/FaqSection';
import { FinalPricingCTA } from '../components/FinalPricingCTA';
import { Footer } from '../components/Footer';
export function Landing() {
  return <main className="min-h-screen bg-transparent">
      <HeroSection />
      <ProblemSection />
      <div className="cv-section">
        <SolutionSection />
      </div>
      <div className="cv-section">
        <FeaturesSection />
      </div>
      <div className="cv-section">
        <BloquesSection />
      </div>
      <div className="cv-section">
        <BonusesSection />
      </div>
      <div className="cv-section">
        <ProcessesSection />
      </div>
      <PricingSection />
      <div className="cv-section">
        <GuaranteeSection />
      </div>
      <div className="cv-section">
        <TestimonialsBottom />
      </div>
      <div className="cv-section">
        <FaqSection />
      </div>
      <div className="cv-section">
        <FinalPricingCTA />
      </div>
      <Footer />
    </main>;
}
