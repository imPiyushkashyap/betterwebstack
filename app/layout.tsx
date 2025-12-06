import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://betterwebstack.com"),
  title: "BetterWebStack",
  description: "A better stack for your next web project",
  openGraph: {
    title: "BetterWebStack",
    description: "A better stack for your next web project",
    url: "https://betterwebstack.com",
    siteName: "BetterWebStack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "te4jBtQrgaZcNY3wWKysf_K0X7uNqdnbMm--LzLZ-qY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
