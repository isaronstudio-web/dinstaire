"use client";

import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import ClientsSection from "@/components/ClientsSection";
import ContactCTA from "@/components/ContactCTA";

export default function HomeEN() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProjectsPreview />
      <ClientsSection />
      <ContactCTA />
    </>
  );
}