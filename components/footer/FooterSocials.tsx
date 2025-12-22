import Link from "next/link";
import { Twitter, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  { href: "#", ariaLabel: "X/Twitter", icon: Twitter },
  { href: "#", ariaLabel: "Facebook", icon: Facebook },
  { href: "#", ariaLabel: "Instagram", icon: Instagram },
];

export function FooterSocials() {
  return (
    <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.ariaLabel}
          className="text-muted-foreground hover:text-primary block"
        >
          <social.icon className="size-6" />
        </Link>
      ))}
    </div>
  );
}

