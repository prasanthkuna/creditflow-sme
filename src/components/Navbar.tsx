
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold">Circle<span className="text-emerald-500">Pe</span></span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-indigo-600 transition-colors">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors">Pricing</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="default" size="sm" className="gap-1">
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
          <a href="#features" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#how-it-works" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
          <a href="#testimonials" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" className="text-lg font-medium hover:text-indigo-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <div className="pt-6 flex flex-col gap-4">
            <Button variant="default" className="gap-2" onClick={() => setIsMenuOpen(false)}>
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
