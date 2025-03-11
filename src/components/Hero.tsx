
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Smartphone } from "lucide-react";

const Hero = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
      if (count1 < 15000) {
        setCount1(prev => Math.min(prev + 500, 15000));
      }
    }, 50);
    
    const timer2 = setTimeout(() => {
      if (count2 < 850) {
        setCount2(prev => Math.min(prev + 50, 850));
      }
    }, 100);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [count1, count2]);
  
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-28">
      {/* Background Gradient Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute top-20 -left-40 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 h-[300px] w-[300px] rounded-full bg-emerald-500/20 blur-3xl"></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-6 max-w-4xl">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
              <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800">
                <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                Now in Early Access
              </span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
              Turn Credit Cards into<br /><span className="gradient-text">Working Capital</span> for Your SME
            </h1>
            
            <p className="text-xl text-muted-foreground md:text-2xl animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
              Pay vendors, GST & bills via credit cards.<br />Get 45-50 days interest-free credit + earn rewards
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <Button className="h-12 px-6 gap-2" size="lg">
              Get Early Access <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-3 w-full sm:w-auto justify-center">
              <Button variant="outline" className="flex-1 sm:flex-none">
                <CreditCard className="mr-2 h-5 w-5" /> Business
              </Button>
              <Button variant="outline" className="flex-1 sm:flex-none">
                <Smartphone className="mr-2 h-5 w-5" /> Personal
              </Button>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-indigo-600">{count1.toLocaleString()}+</span>
              <span className="text-sm text-muted-foreground">SMEs Trust Us</span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-indigo-600">₹{count2}Cr+</span>
              <span className="text-sm text-muted-foreground">Processed</span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-indigo-600">4.8/5</span>
              <span className="text-sm text-muted-foreground">User Rating</span>
            </div>
          </div>
          
          <div className="w-full max-w-4xl bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-1 mt-10 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-wrap justify-center items-center gap-6">
              <img src="https://placehold.co/100x40/indigo/white?text=HDFC" alt="HDFC" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/indigo/white?text=ICICI" alt="ICICI" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/indigo/white?text=SBI" alt="SBI" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/indigo/white?text=AXIS" alt="AXIS" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/indigo/white?text=AMEX" alt="AMEX" className="h-8 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
