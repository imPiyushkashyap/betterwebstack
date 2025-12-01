import { NavbarDemo } from "@/component/Navbar";
import { DotPatternDemo } from "@/components/Background";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavbarDemo />
      <DotPatternDemo />
    </div>
  );
}
