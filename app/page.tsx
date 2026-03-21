"use client";

import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import GallerySection from "@/app/components/GallerySection";
import FeaturesSection from "@/app/components/FeaturesSection";
import QrSection from "@/app/components/QrSection";
import ProofSection from "@/app/components/ProofSection";
import PricingSection from "@/app/components/PricingSection";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";

export default function LandingPage() {
  useGsapAnimations();

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <HowItWorksSection />
        <GallerySection />
        <FeaturesSection />
        <QrSection />
        <ProofSection />
        <PricingSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
