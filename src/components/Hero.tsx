import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Smartphone, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [activeType, setActiveType] = useState<'business' | 'personal'>('business');
  
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
  
  const handleTypeChange = (type: 'business' | 'personal') => {
    setActiveType(type);
    
    if (type === 'business') {
      toast({
        title: "Business Mode Activated",
        description: "Optimized for SMEs and business transactions.",
      });
    } else {
      toast({
        title: "Personal Mode Activated",
        description: "Optimized for individual credit card management.",
      });
    }
  };
  
  const handleJoinWaitlist = () => {
    const ctaElement = document.getElementById('cta-section');
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
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
            <Button className="h-12 px-6 gap-2 flex-1" size="lg" onClick={handleJoinWaitlist}>
              Join Waitlist <ArrowRight className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-3 w-full justify-center">
              <Button 
                variant={activeType === 'business' ? 'default' : 'outline'} 
                className={`flex-1 ${activeType === 'business' ? 'bg-indigo-600' : ''}`}
                onClick={() => handleTypeChange('business')}
              >
                <CreditCard className="mr-2 h-5 w-5" /> Business
              </Button>
              <Button 
                variant={activeType === 'personal' ? 'default' : 'outline'} 
                className={`flex-1 ${activeType === 'personal' ? 'bg-indigo-600' : ''}`}
                onClick={() => handleTypeChange('personal')}
              >
                <Smartphone className="mr-2 h-5 w-5" /> Personal
              </Button>
            </div>
          </div>
          
          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "0.9s" }}>
            <Button variant="outline" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                <path d="M18 14.5V16" />
                <path d="M18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                <path d="M14 17.5h-4" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="text-xs">Get it on</span>
                <span className="text-sm font-semibold">Google Play</span>
              </div>
            </Button>
          </div>
          
          {/* <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
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
          </div> */}
          
          <div className="w-full max-w-4xl bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-1 mt-10 animate-fade-in opacity-0" style={{ animationDelay: "1.2s" }}>
            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-wrap justify-center items-center gap-6">
              <img src="https://placehold.co/100x40/e31837/white?text=HDFC" alt="HDFC" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/f37e20/white?text=ICICI" alt="ICICI" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/1a4784/white?text=SBI" alt="SBI" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/97144d/white?text=AXIS" alt="AXIS" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/006fcf/white?text=AMEX" alt="AMEX" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://placehold.co/100x40/003874/white?text=KOTAK" alt="KOTAK" className="h-8 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
