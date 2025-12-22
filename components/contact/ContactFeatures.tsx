import { contactFeatures } from "@/lib/data/contact";

export function ContactFeatures() {
  return (
    <div className="space-y-4 sm:space-y-6 pt-4">
      {contactFeatures.map((feature, index) => (
        <div key={index} className="flex gap-3 sm:gap-4">
          <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
            {feature.icon}
          </div>
          <div>
            <p className="text-sm sm:text-base text-primary-foreground leading-[150%]">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
