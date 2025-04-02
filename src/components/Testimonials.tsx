import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Textile Business Owner",
    company: "Sharma Textiles",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=PS",
    testimonial: "CardPe has transformed how we manage vendor payments. We've saved ₹1.2L/yr using their platform while earning valuable rewards on our credit cards."
  },
  {
    id: 2,
    name: "Vikram Mehta",
    role: "CEO",
    company: "TechServe Solutions",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=VM",
    testimonial: "Managing multiple credit cards for business expenses was a nightmare before CardPe. Now we track everything in one place and our cash flow has improved by 40%."
  },
  {
    id: 3,
    name: "Ananya Patel",
    role: "Finance Director",
    company: "GreenLeaf Organics",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=AP",
    testimonial: "The GST payment feature alone has saved us countless hours every month. CardPe's platform is intuitive and their customer support is exceptional."
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    role: "Founder",
    company: "Innovative Electronics",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=RK",
    testimonial: "As a growing electronics business, cash flow management is critical. CardPe has given us breathing room with their 45-day credit window and simplified our B2B payments."
  },
  {
    id: 5,
    name: "Neha Gupta",
    role: "Operations Head",
    company: "Sparkle Hospitality",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=NG",
    testimonial: "CardPe helped us transition from legacy payment systems to digital solutions seamlessly. We've reduced payment processing time by 70%."
  },
  {
    id: 6,
    name: "Suresh Iyer",
    role: "Director",
    company: "Precision Manufacturing Ltd",
    image: "https://via.placeholder.com/400x400/4f46e5/ffffff?text=SI",
    testimonial: "The rewards optimization feature is brilliant! We've accumulated over ₹80,000 in cashback this year alone just by routing payments through CardPe."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trusted by <span className="text-indigo-600">15,000+</span> Indian SMEs
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from business owners who've transformed their financial operations with CardPe
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full border-2 hover:border-indigo-200 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 border-2 border-indigo-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-indigo-100 text-indigo-700">{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="mt-2 mb-4">
                  <svg className="h-5 w-5 text-indigo-500 inline-block" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 flex-grow">{testimonial.testimonial}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Verified Customer</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Trusted by Companies Across India</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-lg font-semibold text-white text-center">Manufacturing</h4>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 p-6 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-lg font-semibold text-white text-center">Technology</h4>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-lg font-semibold text-white text-center">Retail</h4>
            </div>
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 p-6 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-lg font-semibold text-white text-center">Services</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
