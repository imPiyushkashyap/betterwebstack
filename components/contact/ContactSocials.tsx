import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { contactInfo } from "@/lib/data/contact";
import { socialMediaLinks } from "@/lib/data/socialmedialink";

export function ContactSocials() {
  return (
    <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-primary-foreground/20">
      <div className="flex flex-col gap-4">
        {/* Email */}
        <div>
          <p className="text-sm text-primary-foreground/70 mb-1">
            {contactInfo.emailLabel}
          </p>
          <Link
            href={`mailto:${contactInfo.email}`}
            className="text-base sm:text-lg text-primary-foreground hover:underline flex items-center gap-2"
          >
            <CiMail className="w-5 h-5" />
            {contactInfo.email}
          </Link>
        </div>

        {/* Socials */}
        <div>
          <p className="text-sm text-primary-foreground/70 mb-2">
            Follow us
          </p>
          <div className="flex gap-3">
            {socialMediaLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-primary-foreground/70 transition"
                  aria-label={social.ariaLabel}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
