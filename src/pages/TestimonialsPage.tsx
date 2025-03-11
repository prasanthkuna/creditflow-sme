
import React from 'react';
import Navbar from '@/components/Navbar';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-center mb-10">What Our Customers Say</h1>
          <Testimonials />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
