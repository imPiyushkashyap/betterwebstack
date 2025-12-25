"use client";
import AnimatedTextGenerateDemo from "@/components/ui/AnimatedTextGenerator";
import { CardHoverEffectDemo } from "@/components/ui/HoverCard";
import FooterSection from "@/components/Footer";
import CalBooKing from "@/components/Cal";
import { HeroBadge } from "@/components/hero/HeroBadge";
import { HeroCTA } from "@/components/hero/HeroCTA";
import { TrustIndicators } from "@/components/hero/TrustIndicators";
import Solutions from "@/components/Solutions";
import Pricing from "@/components/Pricing";

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
        <HeroBadge />
        <AnimatedTextGenerateDemo />
        
        <p className="mt-6 text-balance text-center text-lg text-muted-foreground md:text-xl">
          BetterWebStack delivers Next.js sites with everything baked in, killer
          SEO, CRM tools, AI chatbots, analytics, and automation that actually
          makes sense.
        </p>
        
        <HeroCTA />
        <TrustIndicators />
        
        <div>
          <CardHoverEffectDemo />
        </div>

        {/* Solutions Section */}
        <Solutions />

        {/* Pricing Section */}
        <Pricing />
        
        {/* Cal.com Booking Section */}
        <div className="w-full py-12">
          <CalBooKing />
        </div>
        
        <FooterSection />
      </div>
    </section>
  );
};

export default HeroPage;

