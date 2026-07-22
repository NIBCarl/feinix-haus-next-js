import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FeaturedEssay from "@/components/sections/FeaturedEssay";
import EssayArchive from "@/components/sections/EssayArchive";

export const metadata: Metadata = {
  title: "From the Margins — Essays & Editorial · Feinix Haus",
  description:
    "Long-form essays, reflections, and observations on drifting, permission, and the art of after. Published by Feinix Haus.",
};

export default function FromTheMarginsPage() {
  return (
    <>
      <PageHero
        eyebrow="Essays & Reflections · The Reading Table"
        title="From the"
        titleEmphasis="Margins."
        lead="Long-form essays, reflections, and observations on drifting, permission, and the art of after. Published by the house. Written by the editor."
        breadcrumb="From the Margins"
      />

      <FeaturedEssay />

      <EssayArchive />
    </>
  );
}
