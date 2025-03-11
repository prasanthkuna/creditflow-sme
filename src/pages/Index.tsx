
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStats from '@/components/ProblemStats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we should scroll to CTA section after navigation
    if (location.state && location.state.scrollToCTA) {
      const ctaElement = document.getElementById('cta-section');
      if (ctaElement) {
        setTimeout(() => {
          ctaElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Handle hash fragment for section navigation
    if (location.hash) {
      const id = location.hash.substring(1); // remove the # character
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <ProblemStats />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
