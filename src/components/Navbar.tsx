
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToCTA = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to CTA
      const ctaElement = document.getElementById('cta-section');
      if (ctaElement) {
        ctaElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home and then scroll to CTA
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
          <Link to="/">
            <div className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold">Circle<span className="text-emerald-500">Pe</span></span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm font-medium hover:text-indigo-600 transition-colors">Features</Link>
          <Link to="/#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors">How It Works</Link>
          <Link to="/testimonials" className="text-sm font-medium hover:text-indigo-600 transition-colors">Testimonials</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors">Pricing</Link>
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
          <Link to="/#features" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
          <Link to="/#how-it-works" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
          <Link to="/testimonials" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
          <Link to="/pricing" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
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
