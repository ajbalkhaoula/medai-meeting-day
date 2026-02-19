import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AgendaSection from "@/components/AgendaSection";
import SpeakersSection from "@/components/SpeakersSection";
import CommitteeSection from "@/components/CommitteeSection";
import SponsorsSection from "@/components/SponsorsSection";
import VenueSection from "@/components/VenueSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <AgendaSection />
      <CommitteeSection />
      <SponsorsSection />
      <VenueSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
