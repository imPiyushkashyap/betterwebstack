"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/types/navbar";
import Link from "next/link";

export function NavbarDemo() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} currentPath={pathname} />
        <div className="flex items-center gap-4">
          <NavbarButton as={Link} href="/#booking" variant="primary">
            Book a call
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => {
            const isActive = pathname === item.link;
            
            return (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={
                  isActive 
                    ? "relative text-black dark:text-white font-semibold" 
                    : "relative text-neutral-600 dark:text-neutral-300"
                }
              >
                <span className="block">{item.name}</span>
              </Link>
            );
          })}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              as={Link}
              href="/#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
