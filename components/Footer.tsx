import Link from "next/link";
import { FooterLinks } from "@/components/footer/FooterLinks";
import { FooterSocials } from "@/components/footer/FooterSocials";

export default function FooterSection() {
  return (
    <footer className="border-b bg-white pt-20 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label="go home" className="block size-fit">
              BetterWebStack
            </Link>
          </div>

          <FooterLinks />
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">
            © {new Date().getFullYear()} BetterWebStack, All rights reserved
          </span>
          <FooterSocials />
        </div>
      </div>
    </footer>
  );
}

