import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogs | BetterWebStack",
  description:
    "Read our latest blogs on the latest trends in web development, Next.js, automation, and more.",
  openGraph: {
    title: "Blogs | BetterWebStack",
    description:
      "Read our latest blogs on the latest trends in web development, Next.js, automation, and more.",
    url: "https://betterwebstack.com/blogs",
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
