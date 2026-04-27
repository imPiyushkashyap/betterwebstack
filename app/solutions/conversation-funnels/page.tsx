"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Calculator } from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import UnderlineButton from "@/components/UnderlineButton";

const relatedSolutions = [
  { title: "AI-Powered Websites", description: "A full website built to capture leads and book clients.", href: "/solutions/ai-driven-websites" },
  { title: "AI Agents & Voice Assistants", description: "Automate support, bookings, and follow-ups 24/7.", href: "/solutions/ai-agents" },
  { title: "Conversation Intelligence", description: "Analyze conversations to improve your conversion rate.", href: "/solutions/conversation-intelligence" },
];

function FunnelAnimation() {
  const steps = ["Visitor Lands", "Starts Chat", "Answers Questions", "Qualified Lead", "Books Call"];
  return (
    <div className="flex flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="px-6 py-3.5 rounded-2xl border bg-background shadow-sm text-sm font-medium w-60 text-center transition-all duration-500"
            style={{
              borderColor: `hsl(${220 + i * 25}, 70%, 55%)`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <span className="text-xs font-bold mr-2 opacity-40">{i + 1}</span>
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-0.5">
              <div className="w-0.5 h-3 bg-border" />
              <ArrowRight className="w-4 h-4 text-primary rotate-90" />
              <div className="w-0.5 h-3 bg-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ROICalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [currentLeads, setCurrentLeads] = useState(20);
  const [uplift, setUplift] = useState(40);

  const extraLeads = Math.round(currentLeads * (uplift / 100));
  const totalLeads = currentLeads + extraLeads;

  return (
    <Card className="border-primary/20 shadow-lg max-w-lg mx-auto">
      <CardHeader className="text-center">
        <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
        <CardTitle className="text-xl">ROI Calculator</CardTitle>
        <CardDescription>See how many extra leads a funnel could bring you.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="visitors">Monthly Visitors</Label>
          <Input id="visitors" type="number" value={visitors} onChange={(e) => setVisitors(Number(e.target.value))} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="leads">Current Leads / Month</Label>
          <Input id="leads" type="number" value={currentLeads} onChange={(e) => setCurrentLeads(Number(e.target.value))} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="uplift">Expected Uplift (%)</Label>
          <Input id="uplift" type="number" value={uplift} onChange={(e) => setUplift(Number(e.target.value))} />
        </div>
        <div className="pt-4 border-t text-center">
          <p className="text-sm text-muted-foreground mb-1">Estimated extra leads per month</p>
          <p className="text-4xl font-bold text-primary">+{extraLeads}</p>
          <p className="text-sm text-muted-foreground mt-1">{totalLeads} total leads from {visitors.toLocaleString()} visitors</p>
        </div>
      </CardContent>
    </Card>
  );
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <p className="text-sm text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export default function ConversationFunnelsPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background relative">
      {/* Back Button */}
      <div className="absolute top-4 left-6 z-10 hidden md:block">
        <UnderlineButton />
      </div>

      {/* Hero */}
      <section className="w-full py-20 lg:py-32 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-6 py-1.5 px-4 rounded-full border border-primary/20 text-primary font-medium">
              Conversation Funnels
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Turn Visitors Into <span className="text-primary">Qualified Leads</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Replace static forms with guided conversations that convert more visitors into booked calls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/contact">Book Free Call <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8" asChild>
                <Link href="/#pricing">Get Quote</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-medium text-muted-foreground">
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Higher Conversions</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Instant Replies</span>
              <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Auto Booking</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <FunnelAnimation />
          </div>
        </div>
      </section>

      {/* Why Forms Fail - Split Comparison */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Most Visitors Never Fill Out Contact Forms</h2>
            <p className="text-muted-foreground text-lg">Static forms feel cold. Conversations feel natural and convert better.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive"><XCircle className="w-5 h-5" /> Old Contact Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Too many fields", "No instant answers", "Easy to ignore"].map((p, i) => (
                  <p key={i} className="flex items-center gap-2 text-muted-foreground text-sm"><span className="text-destructive font-bold">-</span> {p}</p>
                ))}
              </CardContent>
            </Card>
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary"><CheckCircle2 className="w-5 h-5" /> Smart Funnel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {["Friendly first step", "Guided questions", "Higher completion rate"].map((p, i) => (
                  <p key={i} className="flex items-center gap-2 text-sm font-medium"><span className="text-primary font-bold">+</span> {p}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conversion Metrics - Animated Stats */}
      <section className="w-full py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Business Impact</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatedStat value="More" label="Qualified Leads" />
            <AnimatedStat value="Lower" label="Drop-offs" />
            <AnimatedStat value="Faster" label="Responses" />
            <AnimatedStat value="Better" label="Booking Rate" />
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Estimate Your Growth</h2>
            <p className="text-muted-foreground text-lg">See what a conversation funnel could do for your numbers.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who It Works For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Clinic", desc: "Patients book appointments through a guided conversation." },
              { label: "Gym / Fitness", desc: "Visitors pick goals and sign up for trial sessions." },
              { label: "Real Estate", desc: "Buyers share budget and request a callback instantly." },
              { label: "Agency", desc: "Leads choose service type and submit a qualified inquiry." },
            ].map((u, i) => (
              <Card key={i} className="bg-muted/20 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{u.label}</Badge>
                  <CardDescription className="text-sm leading-relaxed">{u.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="w-full py-24 bg-muted/30 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Work With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Custom Builds", desc: "No templates. Every funnel is designed around your business." },
              { title: "Modern Fast Stack", desc: "Built with Next.js for speed and reliability." },
              { title: "Conversion Focused", desc: "Every step moves visitors closer to booking." },
              { title: "Clean UI", desc: "Simple experiences your visitors will actually use." },
              { title: "Real Automation", desc: "CRM sync, booking, and WhatsApp integration included." },
              { title: "Support After Launch", desc: "We stay available to optimize your funnel." },
            ].map((item, i) => (
              <Card key={i} className="border-border/50 shadow-sm">
                <CardHeader>
                  <ShieldCheck className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <RelatedSolutions solutions={relatedSolutions} />

      {/* Pricing */}
      <SolutionPricing
        features={{
          starter: ["Guided lead capture flow", "Contact collection", "Basic qualification steps", "Mobile-ready experience"],
          growth: ["Smart branching logic", "Booking integration", "CRM sync", "Funnel analytics", "Conversion improvements"],
          enterprise: ["Multi-service funnels", "Advanced routing logic", "Multi-location setup", "Custom integrations"]
        }}
      />

      {/* Final CTA */}
      <section className="w-full py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-3xl p-12 shadow-sm">
          <h2 className="text-4xl font-bold mb-6">Ready to Convert More Traffic?</h2>
          <p className="text-xl text-muted-foreground mb-10">Let&apos;s build a conversation funnel that helps your business grow.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full h-14 px-8 text-lg" asChild>
              <Link href="/contact">Book Free Call</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg bg-background" asChild>
              <Link href="/#pricing">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
