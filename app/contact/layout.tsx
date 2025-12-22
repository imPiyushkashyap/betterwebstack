import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BetterWebStack",
  description:
    "Get in touch with BetterWebStack for support, project inquiries, or collaboration.",
  openGraph: {
    title: "Contact Us | BetterWebStack",
    description:
      "Reach out for project support, Next.js development, automation, or custom builds.",
    url: "https://betterwebstack.com/contact",
    siteName: "BetterWebStack",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

