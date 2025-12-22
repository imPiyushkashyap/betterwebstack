import { Shield, TrendingUp, Zap } from "lucide-react";

export function TrustIndicators() {
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4" />
        <span>No hidden fees</span>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4" />
        <span>Complete solution</span>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex items-center gap-2">
        <Zap className="h-4 w-4" />
        <span>Live in 2 weeks</span>
      </div>
    </div>
  );
}
