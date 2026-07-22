import HeroSection from "@/components/sections/HeroSection";
import PhilosophyBlock from "@/components/sections/PhilosophyBlock";
import JournalGrid from "@/components/sections/JournalGrid";
import FeaturedEssay from "@/components/sections/FeaturedEssay";
import PressReel from "@/components/sections/PressReel";
import FAQAccordion from "@/components/sections/FAQAccordion";
import InvitationBlock from "@/components/sections/InvitationBlock";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophyBlock />
      <JournalGrid />
      <FeaturedEssay />
      <PressReel />
      <FAQAccordion />
      <InvitationBlock />
    </>
  );
}
