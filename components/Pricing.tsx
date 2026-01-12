"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import UnderlineButton from "@/components/UnderlineButton";

type Currency = 'INR' | 'USD';

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and personal projects",
    price: {
      USD: "$5",
      INR: "₹499"
    },
    period: "one-time",
    icon: Zap,
    popular: false,
    features: [
      "One-time build or short engagement",
      "Clearly defined scope",
      "Fast, focused delivery",
      "No long-term commitment",
    ],
    cta: "Book a Call",
    variant: "outline" as const
  },
  {
    name: "Growth",
    description: "For growing businesses that need more power",
    price: {
      USD: "$12",
      INR: "₹1199"
    },
    period: "one-time",
    icon: Sparkles,
    popular: true,
    features: [
      "Monthly or phased collaboration",
      "Automations + AI workflows",
      "Continuous improvements",
      "Priority access & support",
      "Performance optimization",
    ],
    cta: "Book a Call",
    variant: "default" as const
  },
  {
    name: "Enterprise",
    description: "Full-scale solution for established businesses",
    price: {
      USD: "Custom",
      INR: "Custom"
    },
    period: "quote",
    icon: Crown,
    popular: false,
    features: [
      "Fully custom workflow",
      "Built around your business logic",
      "Long-term technical partnership",
      "Priority support",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom AI training",
      "Multi-language support"
    ],
    cta: "Book a Call",
    variant: "outline" as const
  }
];

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>('INR');

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 md:py-24" id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. No hidden fees, no surprises, just quality work delivered.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3">
            <Label 
              htmlFor="currency-toggle" 
              className={`text-sm font-medium cursor-pointer ${currency === 'INR' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setCurrency('INR')}
            >
              INR (₹)
            </Label>
            <Switch
              id="currency-toggle"
              checked={currency === 'USD'}
              onCheckedChange={(checked) => setCurrency(checked ? 'USD' : 'INR')}
            />
            <Label 
              htmlFor="currency-toggle" 
              className={`text-sm font-medium cursor-pointer ${currency === 'USD' ? 'text-primary' : 'text-muted-foreground'}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </Label>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                plan.popular 
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02] md:scale-105" 
                  : "border-border/50 hover:border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted w-fit">
                  <plan.icon className={`h-6 w-6 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price[currency]}</span>
                  {plan.period !== "quote" && (
                    <span className="text-muted-foreground ml-1">/{plan.period}</span>
                  )}
                </div>
                
                <Separator className="mb-6" />
                
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 ${plan.popular ? "text-primary" : "text-green-500"}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={plan.variant}
                  className={`w-full ${plan.popular ? "shadow-md" : ""}`}
                  size="lg"
                  onClick={scrollToBooking}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            All plans include free consultation. Need something custom?{" "}
            <UnderlineButton label="Let's talk" href="#booking" />
          </div>
        </div>
      </div>
    </section>
  );
}
