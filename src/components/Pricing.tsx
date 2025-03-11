
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const handleJoinWaitlist = () => {
    toast({
      title: "You've joined our waitlist!",
      description: "We'll notify you when early access is available.",
    });
  };
  
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Pay only for what you use, with no hidden fees or long-term commitments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <Card className="border-2 relative">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>Perfect for small businesses</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">Free</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Up to ₹1L in monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Basic vendor management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Single credit card support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Standard customer support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={handleJoinWaitlist}>
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
          
          {/* Growth Plan - Highlighted */}
          <Card className={cn("border-2 border-indigo-600 relative")}>
            <div className="absolute -top-5 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Growth</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">₹1,500</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Up to ₹10L in monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Advanced vendor management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Up to 5 credit cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Priority customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>GST & compliance automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Basic analytics dashboard</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleJoinWaitlist}>
                Join Waitlist
              </Button>
            </CardFooter>
          </Card>
          
          {/* Enterprise Plan */}
          <Card className="border-2 relative">
            <CardHeader className="pb-0">
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large businesses</CardDescription>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">Custom</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Unlimited payment volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Enterprise vendor management</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Unlimited credit cards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Advanced GST & compliance tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>API access for integration</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline" onClick={handleJoinWaitlist}>
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="text-left">
              <h4 className="font-medium mb-2">Is there a free trial?</h4>
              <p className="text-muted-foreground">Yes, we offer a 14-day free trial with full access to all features in the Growth plan.</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-2">Can I cancel anytime?</h4>
              <p className="text-muted-foreground">Absolutely. There are no long-term commitments, and you can cancel your subscription at any time.</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-2">What payment methods are accepted?</h4>
              <p className="text-muted-foreground">We accept all major credit/debit cards, UPI, and net banking for subscription payments.</p>
            </div>
            <div className="text-left">
              <h4 className="font-medium mb-2">Is my data secure?</h4>
              <p className="text-muted-foreground">Yes, we are PCI-DSS compliant and use bank-level encryption to ensure your financial data is always secure.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
