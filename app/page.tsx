import { NavbarDemo } from "@/component/Navbar";
import HeroPage from "@/component/Hero";

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
