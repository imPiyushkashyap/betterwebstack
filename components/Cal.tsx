"use client";

import { Suspense, lazy } from "react";
import { Loader } from "@/components/ui/loader";

const Cal = lazy(() => import("@calcom/embed-react"));
function CalLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
      <div className="flex flex-col items-center gap-3">
        <Loader size="lg" />
        <span className="text-muted-foreground text-sm">Loading calendar...</span>
      </div>
    </div>
  );
}

export default function CalBooKing() {
  return (
    <div id="booking" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-2xl font-bold text-center mb-6">Book a Call</h2>
      <div className="w-full relative" style={{ minHeight: "600px" }}>
        <Suspense fallback={<CalLoader />}>
          <Cal 
            calLink="piyush-kashyap18/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </Suspense>
      </div>
    </div>
  );
}

