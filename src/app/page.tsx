import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import BrandsSection from "@/components/BrandsSection";
import ProjectsPreview from "@/components/ProjectsPreview";
import ClientsSection from "@/components/ClientsSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <BrandsSection />
      <ProjectsPreview />
      <ClientsSection />
      <ContactCTA />
    </>
  );
}