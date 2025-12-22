import { MorphyButton } from "@/components/ui/morphy-button";
import { ExpandableScreenTrigger } from "@/components/ui/expandable-screen";

export function ContactHero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[90%] tracking-[-0.03em] text-foreground mix-blend-exclusion max-w-2xl">
          Need a website that doesn&apos;t suck?
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-[160%] text-foreground max-w-2xl px-4">
          Need a website that loads fast, modern web apps that actually work.
          No bloat, no drama, just good tech.
        </p>

        <ExpandableScreenTrigger>
          <MorphyButton className="select-none">Get in touch</MorphyButton>
        </ExpandableScreenTrigger>
      </div>
    </div>
  );
}
