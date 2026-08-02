import LandingShell from "components/landing/LandingShell";
import EditorialHeader from "components/landing/EditorialHeader";
import Hero from "components/landing/Hero";
import GalleryMarquee from "components/landing/GalleryMarquee";
import Diptych from "components/landing/Diptych";
import ZoomDetail from "components/landing/ZoomDetail";
import HowItWorks from "components/landing/HowItWorks";
import UseCases from "components/landing/UseCases";
import Stats from "components/landing/Stats";
import Pricing from "components/landing/Pricing";
import Reviews from "components/landing/Reviews";
import Faq from "components/landing/Faq";
import FinalCta, { EditorialFooter } from "components/landing/FinalCta";

export default function LandingPage() {
  return (
    <LandingShell>
      <EditorialHeader />
      <main className="overflow-x-clip bg-white">
        <Hero />
        <GalleryMarquee />
        <Diptych />
        <ZoomDetail />
        <HowItWorks />
        <UseCases />
        <Stats />
        <Pricing />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <EditorialFooter />
    </LandingShell>
  );
}
