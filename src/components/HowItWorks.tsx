
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CreditCard, 
  ArrowRight, 
  Zap, 
  Landmark, 
  BarChart4,
  PlusCircle
} from "lucide-react";

const HowItWorks = () => {
  const [monthlySavings, setMonthlySavings] = useState("");
  const [calculatedSavings, setCalculatedSavings] = useState<number | null>(null);
  
  const handleCalculate = () => {
    if (!monthlySavings) return;
    
    const monthly = parseFloat(monthlySavings.replace(/,/g, ""));
    if (isNaN(monthly)) return;
    
    // Simple calculation: 2% cashback + 1.5% value of credit period + 1% rewards
    const savings = monthly * 0.045 * 12;
    setCalculatedSavings(savings);
  };
  
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate-fade-in opacity-0">
            How CreditFlow Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
            Get started in minutes and transform how your business manages payments
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-indigo-100"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "300ms" }}>
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-indigo-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white">
                    <span className="text-lg font-bold">1</span>
                  </div>
                </div>
                
                <div className="ml-24">
                  <h3 className="text-xl font-bold flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-indigo-500" />
                    Connect Your Credit Cards
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Add all your business credit cards securely to the platform in minutes. No technical setup required.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                      Bank Grade Security
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      5-Minute Setup
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                      All Major Banks
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-indigo-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white">
                    <span className="text-lg font-bold">2</span>
                  </div>
                </div>
                
                <div className="ml-24">
                  <h3 className="text-xl font-bold flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-indigo-500" />
                    Make Vendor & GST Payments
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Pay any vendor or GST with your credit cards. We handle the processing even if they don't accept cards.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                      Any Vendor
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      Scheduled Payments
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                      GST Integration
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
                <div className="absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-indigo-100">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white">
                    <span className="text-lg font-bold">3</span>
                  </div>
                </div>
                
                <div className="ml-24">
                  <h3 className="text-xl font-bold flex items-center">
                    <Landmark className="mr-2 h-5 w-5 text-indigo-500" />
                    Earn Rewards & Extend Cash Flow
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Enjoy 45-50 days of interest-free credit while earning card rewards on all your business expenses.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700">
                      2-3% Cashback
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                      50-Day Float
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
                      Points Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Calculator */}
          <div className="animate-fade-up opacity-0" style={{ animationDelay: "900ms" }}>
            <Card className="bg-white border shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-lg font-semibold text-indigo-600">
                    <BarChart4 className="h-5 w-5" />
                    <h3>Calculate Your Annual Savings</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    See how much your business could save with CreditFlow's credit card optimization.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Monthly Business Expenses (₹)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                        <input
                          type="text"
                          value={monthlySavings}
                          onChange={(e) => setMonthlySavings(e.target.value)}
                          placeholder="50,000"
                          className="w-full pl-8 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full" 
                      size="lg" 
                      onClick={handleCalculate}
                    >
                      Calculate Savings
                    </Button>
                    
                    {calculatedSavings !== null && (
                      <div className="p-4 bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-lg border border-indigo-100 mt-4">
                        <h4 className="text-lg font-semibold text-indigo-700">Your Potential Annual Savings</h4>
                        <div className="flex items-baseline mt-2">
                          <span className="text-3xl font-bold text-emerald-600">₹{calculatedSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                          <span className="ml-2 text-sm text-gray-600">/year</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                          Based on 2% cashback, 1.5% value of credit period, and 1% rewards optimization
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full gap-2">
                      <PlusCircle className="h-4 w-4" />
                      Request Detailed ROI Analysis
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
