"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check, Zap, Sparkles, Crown } from "lucide-react";
import Link from "next/link";

type Currency = "INR" | "USD";

export interface SolutionPricingProps {
  features: {
    starter: string[];
    growth: string[];
    enterprise: string[];
  };
}

export default function SolutionPricing({ features }: SolutionPricingProps) {
  const [currency, setCurrency] = useState<Currency>("INR");

  const tiers = [
    {
      name: "Starter",
      description: "Best for getting started fast.",
      price: { USD: "$6", INR: "₹499" },
      period: "one-time",
      icon: Zap,
      popular: false,
      variant: "outline" as const,
      features: features.starter,
      cta: "Get Started",
    },
    {
      name: "Growth",
      description: "Best for businesses ready to grow faster.",
      price: { USD: "$12", INR: "₹1199" },
      period: "one-time",
      icon: Sparkles,
      popular: true,
      variant: "default" as const,
      features: features.growth,
      cta: "Book Free Call",
    },
    {
      name: "Enterprise",
      description: "Best for advanced needs and larger systems.",
      price: { USD: "Custom", INR: "Custom" },
      period: "quote",
      icon: Crown,
      popular: false,
      variant: "outline" as const,
      features: features.enterprise,
      cta: "Request Quote",
    },
  ];

  return (
    <section className="w-full py-24 px-4 bg-muted/20" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">Pricing</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Simple packages with clear deliverables. Choose what fits your business today.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Label
              htmlFor="currency-toggle-solution"
              className={`text-sm font-medium cursor-pointer ${currency === "INR" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setCurrency("INR")}
            >
              INR (₹)
            </Label>
            <Switch
              id="currency-toggle-solution"
              checked={currency === "USD"}
              onCheckedChange={(checked) => setCurrency(checked ? "USD" : "INR")}
            />
            <Label
              htmlFor="currency-toggle-solution"
              className={`text-sm font-medium cursor-pointer ${currency === "USD" ? "text-primary" : "text-muted-foreground"}`}
              onClick={() => setCurrency("USD")}
            >
              USD ($)
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, i) => (
            <Card
              key={i}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                tier.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-[1.02] md:scale-105"
                  : "border-border/50 hover:border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-4 py-1 bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 p-3 rounded-full bg-muted w-fit">
                  <tier.icon className={`h-6 w-6 ${tier.popular ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-sm">{tier.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{tier.price[currency]}</span>
                  {tier.period !== "quote" && (
                    <span className="text-muted-foreground ml-1">/{tier.period}</span>
                  )}
                </div>
                <Separator className="mb-6" />
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 ${tier.popular ? "text-primary" : "text-green-500"}`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex flex-col gap-3">
                <Button variant={tier.variant} className={`w-full ${tier.popular ? "shadow-md" : ""}`} size="lg" asChild>
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
