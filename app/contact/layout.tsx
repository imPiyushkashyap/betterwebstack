import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
