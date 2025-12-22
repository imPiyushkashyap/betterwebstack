import Cal from "@calcom/embed-react";

export default function CalBooKing() {
  return (
    <div id="booking" className="w-full max-w-4xl mx-auto scroll-mt-24">
      <h2 className="text-2xl font-bold text-center mb-6">Book a Call</h2>
      <div className="w-full" style={{ minHeight: "600px" }}>
        <Cal 
          calLink="rick/get-rick-rolled"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </div>
  );
}

