import { EducationHighlights } from "@/components/home/EducationHighlights";
import { FeaturedExperts } from "@/components/home/FeaturedExperts";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesSection } from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FeaturedExperts />
      <HowItWorks />
      <EducationHighlights />
    </>
  );
}