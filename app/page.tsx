import { NavbarDemo } from "@/component/Navbar";
import HeroPage from "@/component/Hero";

export const metadata = {
  title: " BetterWebStack",
  description: "Build fast and better stack for your next web project",
  alternates: {
    canonical: "https://betterwebstack.vercel.app/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavbarDemo />
      <div className="container mx-auto p-1 pt-24">
        <HeroPage />
      </div>
    </div>
  );
}
