
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Receipt, Layers, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const featureItems = [
  {
    id: "b2b-payments",
    label: "B2B Payments",
    icon: <CreditCard className="h-5 w-5" />,
    title: "Simplify Vendor & Utility Payments",
    description: "Pay any vendor, utility bill, or rent directly with credit cards even if they don't accept cards natively.",
    benefits: [
      "Extend cash flow by 45-50 days with interest-free credit",
      "Track all B2B payments in one dashboard",
      "Schedule recurring payments automatically",
      "Get receipt management & GST itemization built-in",
    ],
    imageSrc: "https://placehold.co/600x400/indigo/white?text=B2B+Payments+Demo"
  },
  {
    id: "gst-compliance",
    label: "GST & Compliance",
    icon: <Receipt className="h-5 w-5" />,
    title: "Automate GST & Tax Payments",
    description: "Pay GST, TDS and other compliance payments with your credit card. Auto-generate filing reports.",
    benefits: [
      "Pay GST with credit cards even during cash crunches",
      "Auto-reconcile with your accounting software",
      "Get filing reminders and deadline alerts",
      "Access detailed GST analytical reports",
    ],
    imageSrc: "https://placehold.co/600x400/indigo/white?text=GST+Compliance+Demo"
  },
  {
    id: "multi-card",
    label: "Multi-Card",
    icon: <Layers className="h-5 w-5" />,
    title: "Manage Multiple Cards Efficiently",
    description: "Link and manage all your business credit cards in one place with spend controls and team access.",
    benefits: [
      "Set team spending limits and approval workflows",
      "Optimize credit utilization across cards",
      "Track all expenses with custom categories",
      "Integrate with accounting software seamlessly",
    ],
    imageSrc: "https://placehold.co/600x400/indigo/white?text=Multi-Card+Demo"
  },
  {
    id: "rewards",
    label: "Rewards Optimizer",
    icon: <Award className="h-5 w-5" />,
    title: "Maximize Card Rewards & Cashback",
    description: "Our smart AI suggests which card to use for each payment to maximize rewards, points, and savings.",
    benefits: [
      "Earn 2-3x more rewards with optimal card selection",
      "Track reward points across all cards in one view",
      "Get personalized redemption recommendations",
      "Set up alerts for special reward promotions",
    ],
    imageSrc: "https://placehold.co/600x400/indigo/white?text=Rewards+Optimizer+Demo"
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("b2b-payments");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-in opacity-0">
            Powerful Features for SME Growth
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            Everything you need to optimize cash flow, streamline payments, and earn maximum rewards.
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full md:w-fit mx-auto mb-8">
            {featureItems.map((item) => (
              <TabsTrigger key={item.id} value={item.id} className="flex items-center gap-2 py-3">
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {featureItems.map((item) => (
            <TabsContent key={item.id} value={item.id} className="mt-0">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  <ul className="space-y-3">
                    {item.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-emerald-600">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="mt-4 gap-2">
                    Join Waitlist <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex-1 max-w-full">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                    <img 
                      src={item.imageSrc} 
                      alt={item.title} 
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;
