"use client";
import AnimatedTextGenerateDemo from "@/components/ui/AnimatedTextGenerator";
import { Button } from "@/components/ui/button";
import { CardHoverEffectDemo } from "@/components/ui/HoverCard";
import { ArrowRight, Calendar, Zap, Shield, TrendingUp } from "lucide-react";
import FooterSection from "./Footer";
import CalBooKing from "@/components/Cal";

const HeroPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm">
          <Zap className="h-4 w-4" />
          <span>A better website for a better business.</span>
        </div>
        {/* Main Headline */}
        <AnimatedTextGenerateDemo />
        {/* Subheadline */}
        <p className="mt-6  text-balance text-center text-lg text-muted-foreground md:text-xl">
          BetterWebStack delivers Next.js sites with everything baked in, killer
          SEO, CRM tools, AI chatbots, analytics, and automation that actually
          makes sense.
        </p>
        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 gap-2 px-8 text-base font-medium">
            <Calendar className="h-4 w-4" />
            Book a Free Call
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 gap-2 bg-transparent px-8 text-base font-medium"
          >
            See Our Work
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        {/* Trust indicators - removed colored icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>No hidden fees</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Complete solution</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Live in 2 weeks</span>
          </div>
        </div>
        <div>
          <CardHoverEffectDemo />
        </div>
        <div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <CalBooKing />/
          </div>
        </div>
        <FooterSection />
      </div>
    </section>
  );
};

export default HeroPage;
