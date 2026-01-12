import Link from "next/link";
import { footerLinks } from "@/lib/data/footer-links";
import UnderlineButton from "@/components/UnderlineButton";

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-3">
      {footerLinks.map((link, index) => (
        <div key={index} className="space-y-4 text-sm">
          <span className="block font-medium">{link.group}</span>
          {link.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <UnderlineButton href={item.href} label={item.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
