
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Thank you for joining our waitlist!",
        description: "We'll notify you as soon as early access is available.",
      });
      setEmail('');
      setBusinessType('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="cta-section" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-cta shadow-xl">
          <div className="absolute inset-0 bg-cta-gradient opacity-90"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          {/* Floating Cards */}
          <div className="hidden lg:block absolute top-1/4 right-16 transform -rotate-12 animate-float">
            <div className="w-48 h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-5 rounded bg-indigo-600"></div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                  <div className="w-4 h-4 rounded-full bg-red-600"></div>
                </div>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <div className="w-12 h-3 rounded bg-gray-300"></div>
                <div className="text-xs font-mono text-gray-600">•••• 4242</div>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block absolute top-1/3 left-16 transform rotate-6 animate-float" style={{ animationDelay: "200ms" }}>
            <div className="w-48 h-28 bg-white rounded-xl shadow-lg p-3 flex flex-col">
              <div className="flex items-center mb-2">
                <div className="w-8 h-5 rounded bg-emerald-600"></div>
                <div className="ml-auto flex space-x-1">
                  <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                  <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                </div>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <div className="w-12 h-3 rounded bg-gray-300"></div>
                <div className="text-xs font-mono text-gray-600">•••• 5678</div>
              </div>
            </div>
          </div>
          
          <div className="relative px-6 py-12 md:py-20 md:px-8 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-md text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business Finances?</h2>
              <p className="text-white/80 mb-6">
                Join 15,000+ SMEs already optimizing their cash flow and earning rewards with CardPe.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>No setup or monthly fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>14-day free trial with full features</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-emerald-300 shrink-0 mt-0.5">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span>Cancel anytime, no commitments</span>
                </li>
              </ul>
            </div>
            
            <div className="w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-semibold text-white mb-6">Join Waitlist</h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Business Email" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Select value={businessType} onValueChange={setBusinessType}>
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Business Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-indigo-600 hover:bg-white/90 hover:text-indigo-700 gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Join Waitlist"} 
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/70 text-center">
                    By signing up, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
