"use client";

import {
  ExpandableScreen,
  ExpandableScreenContent,
} from "@/components/ui/expandable-screen";
import { ContactHero } from "./contact/ContactHero";
import { ContactFeatures } from "./contact/ContactFeatures";
import { ContactForm } from "./contact/ContactForm";
import { ContactSocials } from "./contact/ContactSocials";

const ExpandableScreenDemo = () => {
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="100px"
      contentRadius="24px"
    >
      <ContactHero />

      <ExpandableScreenContent className="bg-primary">
        <div className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1100px] mx-auto items-center p-6 sm:p-10 lg:p-16 gap-8 lg:gap-16">
          <div className="flex-1 flex flex-col justify-center space-y-3 w-full">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-primary-foreground leading-none tracking-[-0.03em]">
              Contact us
            </h2>

            <ContactFeatures />
            <ContactSocials />
          </div>

          <div className="flex-1 w-full">
            <ContactForm />
          </div>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
};

export default ExpandableScreenDemo;

