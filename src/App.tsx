import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import DistributionEngine from './components/DistributionEngine';
import HowItWorks from './components/HowItWorks';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import WhyZeronix from './components/WhyZeronix';
import CaseStudies from './components/CaseStudies';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import CampaignModal from './components/CampaignModal';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<{
    serviceId?: string;
    budgetTier?: string;
    clientType?: string;
  }>({});

  const handleOpenCampaignModal = (preset?: string | { serviceId?: string; budgetTier?: string }) => {
    if (typeof preset === 'string') {
      setModalPreset({ serviceId: preset });
    } else if (preset) {
      setModalPreset(preset);
    } else {
      setModalPreset({});
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalPreset({});
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Laser Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navigation Header */}
      <Navbar onOpenCampaignModal={() => handleOpenCampaignModal()} />

      <main className="flex-1">
        {/* 1. HERO */}
        <Hero
          onOpenCampaignModal={() => handleOpenCampaignModal()}
          onExploreServices={scrollToServices}
        />

        {/* 2. SOCIAL PROOF */}
        <SocialProof />

        {/* 3. SERVICES */}
        <Services onOpenCampaignModal={(serviceId) => handleOpenCampaignModal(serviceId)} />

        {/* Interactive Highlight: Content Clipping & Distribution Engine */}
        <DistributionEngine onOpenCampaignModal={() => handleOpenCampaignModal('content-clipping')} />

        {/* 4. HOW IT WORKS */}
        <HowItWorks onOpenCampaignModal={() => handleOpenCampaignModal()} />

        {/* 5. WHO WE WORK WITH */}
        <WhoWeWorkWith onOpenCampaignModal={(clientId) => handleOpenCampaignModal(clientId)} />

        {/* 6. WHY ZERONIX */}
        <WhyZeronix onOpenCampaignModal={(preset) => handleOpenCampaignModal(preset)} />

        {/* 7. CASE STUDIES */}
        <CaseStudies onOpenCampaignModal={(clientName) => handleOpenCampaignModal(clientName)} />

        {/* 8. FAQ */}
        <FAQ onOpenCampaignModal={() => handleOpenCampaignModal()} />

        {/* 9. FINAL CTA */}
        <FinalCTA onOpenCampaignModal={() => handleOpenCampaignModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenCampaignModal={() => handleOpenCampaignModal()} />

      {/* Interactive Campaign Modal */}
      <CampaignModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        presetData={modalPreset}
      />
    </div>
  );
}
