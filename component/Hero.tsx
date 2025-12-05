import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Shield, TrendingUp } from "lucide-react";

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
          <span>Faster than WordPress. Cheaper than agencies.</span>
        </div>
        {/* Main Headline */}
        <h1 className="max-w-5xl text-balance text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          3x faster. Better SEO. More conversions.
          <br />
          <span className="text-foreground">
            Get a website that actually works.
          </span>
        </h1>
        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-balance text-center text-lg text-muted-foreground md:text-xl">
          We build blazing-fast Next.js websites for businesses stuck on slow
          PHP, WordPress, or Webflow sites. Complete with SEO, CRM, analytics,
          AI chatbots, and automation. All for less than a basic WordPress plan.
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
            <span>No upfront cost</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>3x faster load times</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            <span>Live in 2 weeks</span>
          </div>
        </div>
        {/* Comparison visual - removed red/green colors, now black/white */}
        <div className="mt-16 w-full max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Old way */}
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
              <div className="relative">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  The old way
                </p>
                <h3 className="mb-4 text-lg font-semibold">
                  WordPress / Webflow / PHP
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span>✕</span> Slow page loads (3-5+ seconds)
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✕</span> Security vulnerabilities
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✕</span> Plugin bloat & hidden costs
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✕</span> Poor mobile experience
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✕</span> Bad for SEO rankings
                  </li>
                </ul>
              </div>
            </div>

            {/* New way */}
            <div className="relative overflow-hidden rounded-2xl border border-foreground bg-secondary p-6">
              <div className="relative">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-foreground">
                  The BetterWebStack way
                </p>
                <h3 className="mb-4 text-lg font-semibold">
                  Next.js + Modern Stack
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-foreground">✓</span> Lightning fast
                    (under 1 second)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground">✓</span> Enterprise-grade
                    security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground">✓</span> All-inclusive
                    pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground">✓</span> Perfect on every
                    device
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-foreground">✓</span> SEO optimized
                    from day one
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
