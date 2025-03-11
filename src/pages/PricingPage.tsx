
import React from 'react';
import Navbar from '@/components/Navbar';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Pricing />
        <div id="cta-section">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
