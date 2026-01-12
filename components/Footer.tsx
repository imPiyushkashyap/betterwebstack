import Link from "next/link";
import { FooterLinks } from "@/components/footer/FooterLinks";
import { FooterSocials } from "@/components/footer/FooterSocials";
import UnderlineButton from "@/components/UnderlineButton";

export default function FooterSection() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <UnderlineButton label="BetterWebStack" />
          </div>

          <FooterLinks />
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t-[3px] py-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <span className="text-muted-foreground text-sm whitespace-nowrap">
              © {new Date().getFullYear()} BetterWebStack
            </span>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <UnderlineButton href="/terms" label="Terms" />
              <UnderlineButton href="/privacy" label="Privacy" />
            </div>
          </div>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}

