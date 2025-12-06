import { Button } from "@/components/ui/button"
import { socialMediaLinks } from "@/lib/data/socialmedialink"
import Link from "next/link"

export function BlogCTA() {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-neutral-800">
      <div>
        <p className="text-lg mb-6">
          <span className="font-semibold">See if we're the right fit!</span>{" "}
          <span className="text-neutral-400">
            We offer a free consultation call to help you determine if our services are a good fit for your needs.
          </span>
        </p>
        <div className="flex gap-3">
          <Button className="bg-white text-black hover:bg-neutral-200">Book a Consultation</Button>
          
        </div>
      </div>
      <div className="md:pl-8">
        <p className="text-sm mb-4">
          <span className="font-semibold">Connect with us</span>{" "}
          <span className="text-neutral-400">Follow us on social media for updates and insights.</span>
        </p>
        <div className="flex gap-4 mb-6">
          {socialMediaLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Icon className="w-6 h-6" />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}