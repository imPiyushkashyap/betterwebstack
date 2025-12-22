import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export function HeroCTA() {
  return (
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
      <Link href="#booking">
        <Button size="lg" className="h-12 gap-2 px-8 text-base font-medium">
          <Calendar className="h-4 w-4" />
          Book a Free Call
        </Button>
      </Link>
      <Button
        size="lg"
        variant="outline"
        className="h-12 gap-2 bg-transparent px-8 text-base font-medium"
      >
        See Our Work
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
