import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { PositioningSection } from "@/components/sections/PositioningSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ApproachTeaser } from "@/components/sections/ApproachTeaser";
import { FounderTeaser } from "@/components/sections/FounderTeaser";
import { ClarityCheckTeaser } from "@/components/sections/ClarityCheckTeaser";
import { BrandStory } from "@/components/sections/BrandStory";
import { ClosingCta } from "@/components/sections/ClosingCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <PositioningSection />
      <ServicesOverview />
      <ApproachTeaser />
      <FounderTeaser />
      <ClarityCheckTeaser />
      <BrandStory />
      <ClosingCta />
    </>
  );
}
