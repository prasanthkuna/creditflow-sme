
import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, CreditCard, PieChart, Wallet, HandCoins } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  percentage: number;
  delay: number;
}

const StatCard = ({ icon, title, description, percentage, delay }: StatCardProps) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (progressRef.current) {
      observer.observe(progressRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const startAnimation = () => {
          let start = 0;
          const end = percentage;
          const duration = 1500;
          const startTime = performance.now();
          
          const updateProgress = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentProgress = Math.floor(progress * end);
            
            setProgress(currentProgress);
            
            if (progress < 1) {
              requestAnimationFrame(updateProgress);
            }
          };
          
          requestAnimationFrame(updateProgress);
        };
        
        startAnimation();
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);
  
  return (
    <div className="stat-card animate-fade-up opacity-0" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-start mb-4">
        <div className="p-3 rounded-lg bg-indigo-50 text-indigo-600 mr-3">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <div className="mt-auto">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-gray-500">SMEs Affected</span>
          <span className="text-xs font-semibold text-indigo-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2" ref={progressRef}>
          <div 
            className="bg-gradient-to-r from-indigo-600 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ProblemStats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-in opacity-0">Why SMEs Need CreditFlow</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            Indian SMEs face critical working capital challenges that limit growth and operational efficiency.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatCard 
            icon={<CreditCard className="h-6 w-6" />}
            title="Only 5% B2B Payments Use Cards"
            description="Despite the benefits, card adoption remains low in B2B transactions."
            percentage={95}
            delay={300}
          />
          
          <StatCard 
            icon={<Wallet className="h-6 w-6" />}
            title="73% SMEs Face Cash Flow Gaps"
            description="Most businesses struggle with working capital and delayed payments."
            percentage={73}
            delay={500}
          />
          
          <StatCard 
            icon={<PieChart className="h-6 w-6" />}
            title="68% Prefer Digital But Lack Solutions"
            description="SMEs want digital payments but lack tailored tools for their needs."
            percentage={68}
            delay={700}
          />
          
          <StatCard 
            icon={<HandCoins className="h-6 w-6" />}
            title="85% Use Cash/Cheques for Vendors"
            description="Traditional payment methods dominate vendor transactions."
            percentage={85}
            delay={900}
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemStats;
