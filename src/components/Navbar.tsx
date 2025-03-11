import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const scrollToCTA = () => {
    if (location.pathname === '/') {
      const ctaElement = document.getElementById('cta-section');
      if (ctaElement) {
        ctaElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToCTA: true } });
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" onClick={handleLogoClick}>
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold">Circle<span className="text-emerald-500">Pe</span></span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="/#features" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
          <a href="/#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a>
          <a href="/#testimonials" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
          <a href="/#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="default" 
            size="sm" 
            className="gap-1" 
            onClick={scrollToCTA}
          >
            Join Waitlist <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-16 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-6 space-y-6">
          <a href="/#features" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a>
          <a href="/#how-it-works" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How It Works</a>
          <a href="/#testimonials" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials'); }}>Testimonials</a>
          <a href="/#pricing" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
          <div className="pt-6 flex flex-col gap-4">
            <Button 
              variant="default" 
              className="gap-2" 
              onClick={scrollToCTA}
            >
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
