"use client";

import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { CasesSection } from "@/components/sections/CasesSection";
import { ConsultationSection } from "@/components/sections/ConsultationSection";
import { CrimeCategoriesSection } from "@/components/sections/CrimeCategoriesSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { UrgentSituationsSection } from "@/components/sections/UrgentSituationsSection";
import { WorkStepsSection } from "@/components/sections/WorkStepsSection";

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ContactModal open={isModalOpen} onClose={closeModal} />
      <Header onContactClick={openModal} />

      <main id="top">
        <HeroSection onContactClick={openModal} />
        <UrgentSituationsSection />
        <CrimeCategoriesSection />
        <ServicesSection />
        <AboutSection />
        <WorkStepsSection />
        <CasesSection />
        <ConsultationSection onContactClick={openModal} />
        <ReviewsSection />
        <FaqSection />
        <ContactsSection onContactClick={openModal} />
      </main>

      <Footer />
    </>
  );
}
