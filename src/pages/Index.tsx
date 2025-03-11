import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemStats from '@/components/ProblemStats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
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
        <section id="features">
          <Features />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="testimonials" className="py-16">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-10">What Our Customers Say</h2>
            <Testimonials />
          </div>
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <div id="cta-section">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
