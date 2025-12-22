import { Zap } from "lucide-react";

export function HeroBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm">
      <Zap className="h-4 w-4" />
      <span>A better website for a better business.</span>
    </div>
  );
}
