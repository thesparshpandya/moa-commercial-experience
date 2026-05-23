'use client';

import { useState } from 'react';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/StatsSection';
import WhyMOASection from '@/components/sections/WhyMOASection';
import RetailSection from '@/components/sections/RetailSection';
import LuxurySection from '@/components/sections/LuxurySection';
import ZoneMapSection from '@/components/sections/ZoneMapSection';
import AttractionsSection from '@/components/sections/AttractionsSection';
import DiningSection from '@/components/sections/DiningSection';
import EventsSection from '@/components/sections/EventsSection';
import SponsorshipSection from '@/components/sections/SponsorshipSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/ui/Footer';
import ContactModal from '@/components/ui/ContactModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Partnership Inquiry');

  const openModal = (subject = 'Partnership Inquiry') => {
    setModalSubject(subject);
    setModalOpen(true);
  };

  return (
    <main className="relative">
      <Navigation />
      <Hero onOpenModal={() => openModal()} />
      <StatsSection />
      <WhyMOASection />
      <RetailSection onOpenModal={() => openModal('Retail Leasing')} />
      <LuxurySection />
      <ZoneMapSection />
      <AttractionsSection />
      <DiningSection />
      <EventsSection onOpenModal={() => openModal('Event Booking')} />
      <SponsorshipSection onOpenModal={() => openModal('Brand Sponsorship')} />
      <TestimonialsSection />
      <CTASection onOpenModal={openModal} />
      <Footer />
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subject={modalSubject}
      />
    </main>
  );
}
