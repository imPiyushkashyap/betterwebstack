import { Button } from "@/components/ui/button"

export function BlogCTA() {
  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-neutral-800">
      <div>
        <p className="text-lg mb-6">
          <span className="font-semibold">Ready to deploy?</span>{" "}
          <span className="text-neutral-400">
            Start building with a free account.
            <br />
            Speak to an expert for your <span className="text-white underline cursor-pointer">Pro</span> or{" "}
            <span className="text-white underline cursor-pointer">Enterprise</span> needs.
          </span>
        </p>
        <div className="flex gap-3">
          <Button className="bg-white text-black hover:bg-neutral-200">Start Deploying</Button>
          <Button variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800 bg-transparent">
            Talk to an Expert
          </Button>
        </div>
      </div>
      <div className="md:pl-8">
        <p className="text-sm mb-4">
          <span className="font-semibold">Explore Vercel Enterprise</span>{" "}
          <span className="text-neutral-400">with an interactive product tour, trial, or a personalized demo.</span>
        </p>
        <Button variant="outline" className="border-neutral-700 text-white hover:bg-neutral-800 bg-transparent">
          Explore Enterprise
        </Button>
      </div>
    </section>
  )
}