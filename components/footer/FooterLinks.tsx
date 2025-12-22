import Link from "next/link";
import { footerLinks } from "@/lib/data/footer-links";

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
      {footerLinks.map((link, index) => (
        <div key={index} className="space-y-4 text-sm">
          <span className="block font-medium">{link.group}</span>
          {link.items.map((item, itemIndex) => (
            <Link
              key={itemIndex}
              href={item.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
